import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/model/back-model/Room';

@Component({
  selector: 'app-booking-flow',
  templateUrl: './booking-flow.component.html',
  styleUrls: ['./booking-flow.component.scss', './step1.scss', './step2.scss', './step3.scss']
})
export class BookingFlowComponent implements OnInit {

  private scenes: Array<Scene>;
  public currentScene: Scene;
  private currentIndex: number = 0;
  private listener: EventEmitter<Room> = new EventEmitter();
  //---------step 1---------
  public adultos: number = 0;
  public jovenes: number = 0;
  public children: number = 0;
  private id: number = Math.round(Math.random() * 5000 + 1);

  public room: Room = new Room();

  private max: number = 99;
  private min: number = 0;
  //------------------------
  //---------step 2---------
  public pension_todo_incluido: boolean = true;
  public pension_desayuno: boolean = false;
  public pension_comida: boolean = false;
  public pension_cena: boolean = false;

  @Input() public flowListener: EventEmitter<Room>;

  public wifi: boolean = false;

  //------------------------
  ngOnInit(): void {

    this.scenes = new Array(3);
    this.scenes[0] = new Scene(0, 'Ocupantes', '.step-1', new ButtonLogic('button--danger', 'Salir', true), new ButtonLogic('button--default', 'Siguiente', true));
    this.scenes[1] = new Scene(1, 'Servicios', '.step-2', new ButtonLogic('button--default', 'Atrás', true), new ButtonLogic('button--info', 'Siguiente', true));
    this.scenes[2] = new Scene(2, 'Resumen', '.step-3', new ButtonLogic('button--default', 'Atrás', true), new ButtonLogic('button--verified', 'Terminar', true));

    this.currentScene = this.scenes[this.currentIndex];

    this.flowListener.subscribe(
      room => {
        this.show();
        this.room = room;
        this.loadScene();
      }
    )
  }
  // INICIO LOGICA STEP 1

  public plus(id: number) {
    if((this.adultos + this.jovenes + this.children)+1 > this.room.ocupantes) {
      return
    }

    let temporal: number;
    switch (id) {
      case 0:
        temporal = this.adultos;
        break
      case 1:
        temporal = this.jovenes;
        break
      case 2:
        temporal = this.children;
        break
    }

    if (temporal < this.max) {
      temporal++;
    }
    switch (id) {
      case 0:
        this.adultos = temporal;
        break
      case 1:
        this.jovenes = temporal;
        break
      case 2:
        this.children = temporal;
        break
    }
    this.updateStep(this.adultos > 0 && (this.adultos + this.jovenes + this.children) <= this.room.ocupantes);
  }

  public less(id: number) {
    let temporal: number;
    switch (id) {
      case 0:
        temporal = this.adultos;
        break
      case 1:
        temporal = this.jovenes;
        break
      case 2:
        temporal = this.children;
        break
    }
    if (temporal > this.min) {
      temporal--;
    }
    switch (id) {
      case 0:
        this.adultos = temporal;
        break
      case 1:
        this.jovenes = temporal;
        break
      case 2:
        this.children = temporal;
        break
    }
    this.updateStep(this.adultos > 0 && (this.adultos + this.jovenes + this.children) <= this.room.ocupantes);
  }

  public checkValue(id: number) {
    switch (id) {
      case 0:
        if (this.adultos < this.min) {
          this.adultos = this.min;
        }
        if (this.adultos > this.max) {
          this.adultos = this.max;
        }
        break
      case 1:
        if (this.jovenes < this.min) {
          this.jovenes = this.min;
        }
        if (this.jovenes > this.max) {
          this.jovenes = this.max;
        }
        break
      case 2:
        if (this.children < this.min) {
          this.children = this.min;
        }
        if (this.children > this.max) {
          this.children = this.max;
        }
        break
    }
    this.updateStep(this.adultos > 0 && (this.adultos + this.jovenes + this.children) <= this.room.ocupantes);
  }

  // FIN LOGICA STEP 1
  // INICIO LOGICA STEP 2


  public checkPension(type: number) {
    const _ = this;
    let timeOut = setTimeout(function () {
      let isAllIncluyed = false;
      let pension: boolean;
      switch (type) {
        case 0: //todo incluido
          isAllIncluyed = true;
          if (_.pension_todo_incluido) {
            _.pension_desayuno = false;
            _.pension_comida = false;
            _.pension_cena = false;
          }
          break;
        case 1: //desayuno
          pension = _.pension_desayuno
          break;
        case 2: //almuerzo
          pension = _.pension_comida
          break;
        case 3: //cena
          pension = _.pension_cena
          break;
      }
      if (!isAllIncluyed) {
        if (pension) {
          _.pension_todo_incluido = false;
        }
        if (_.pension_desayuno && _.pension_comida && _.pension_cena) {
          _.pension_todo_incluido = true;
          _.checkPension(0);
        }
      }

      _.updateStep(_.pension_todo_incluido || (_.pension_desayuno || _.pension_comida || _.pension_cena));
    }, 5);
  }


  // FIN LOGICA STEP 2
  // INICIO LOGICA FLUJO
  public close(): void {
    this.reset();
    $(".booking-flow").fadeOut();
    $(".booking-flow--background").hide();
  }

  public goTo(newStep: number) {
    if (newStep >= 0 && (newStep + 1) <= this.scenes.length && newStep != this.currentIndex && this.scenes[newStep].isValid) {
      this.currentIndex = newStep;
      this.loadScene();
    }
  }

  public updateStep(valid: boolean = false) {
    this.scenes[this.currentIndex].isValid = valid;
  }

  private loadScene() {
    this.currentScene = this.scenes[this.currentIndex];
    $(".step").hide();
    $(this.currentScene.node).fadeIn();
    this.updateHeader();
  }

  public back() {
    if (this.currentIndex == 0) {
      this.close();
    }
    else {
      this.currentIndex--;
      this.loadScene();
    }
  }

  public next() {
    if ((this.currentIndex + 1) == this.scenes.length) {
      console.log("final flujo");

      // THROW SERVICESD
    }
    else {
      this.currentIndex++;
      this.loadScene();
    }
  }

  private updateHeader() {
    const _ = this;
    $.map($(".booking-flow .header-item-dot"), function (item: HTMLElement, idx: number) {
      if (idx <= _.currentIndex) {
        $(item).attr('done', '');
      }
      else {
        $(item).removeAttr('done');
      }
    });
  }

  private reset() {
    this.scenes = new Array(3);
    this.scenes[0] = new Scene(0, 'Ocupantes', '.step-1', new ButtonLogic('button--danger', 'Salir', true), new ButtonLogic('button--default', 'Siguiente', true));
    this.scenes[1] = new Scene(1, 'Servicios', '.step-2', new ButtonLogic('button--default', 'Atrás', true), new ButtonLogic('button--info', 'Siguiente', true));
    this.scenes[2] = new Scene(2, 'Resumen', '.step-3', new ButtonLogic('button--default', 'Atrás', true), new ButtonLogic('button--verified', 'Terminar', true));
  }

  public show() {
    $(".booking-flow--background").show();
    $(".booking-flow").fadeIn();
  }

  public hide() {
    $(".booking-flow--background").hide();
    $(".booking-flow").fadeOut();
  }
  // FIN LOGICA FLUJO
}

class ButtonLogic {
  public class: string;
  public text: string;
  public isValid: boolean = true;

  constructor(className: string, text: string, isValid: boolean = true) {
    this.class = className;
    this.text = text;
    this.isValid = isValid;
  }
}

class Scene {
  public id: number;
  public node: string;
  public title: string;
  public backButton: ButtonLogic;
  public nextButton: ButtonLogic;
  public isValid: boolean = false;

  constructor(id: number, title: string, node: string, backButton: ButtonLogic, nextButton: ButtonLogic, isValid: boolean = false) {
    this.id = id;
    this.title = title;
    this.node = node;
    this.backButton = backButton;
    this.nextButton = nextButton;
    this.isValid = isValid;
  }
}