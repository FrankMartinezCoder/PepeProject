import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BackendService } from 'src/app/model/back-model/BackendService';
import { Room } from 'src/app/model/back-model/Room';
import { Service } from 'src/app/model/front-model/Service';
import { ServicesProvider } from 'src/app/providers/hotel_services.provider';

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

  public room: Room = new Room();

  private max: number = 99;
  private min: number = 0;
  //------------------------
  //---------step 2---------
  public tituloPension: string = "Sin pensión";
  public pension_todo_incluido: Service = new Service(0, "Todo incluido", "pension-all.png");
  public pension_desayuno: Service = new Service(1, "Desayuno", "pension-breakfast.jpg");
  public pension_comida: Service = new Service(2, "Almuerzo", "pension-lunch.jpg");
  public pension_cena: Service = new Service(3, "Cena", "pension-dinner.jpg");

  public servicios: Array<BackendService>;
  @Input() public flowListener: EventEmitter<Room>;

  //------------------------
  constructor(private servicesProvider: ServicesProvider) { }
  ngOnInit(): void {

    this.scenes = new Array(3);
    this.scenes[0] = new Scene(0, 'Ocupantes', '.step-1', new ButtonLogic('button--danger', 'Salir', true), new ButtonLogic('button--default', 'Siguiente', true));
    this.scenes[1] = new Scene(1, 'Servicios', '.step-2', new ButtonLogic('button--default', 'Atrás', true), new ButtonLogic('button--info', 'Siguiente', true),true);
    this.scenes[2] = new Scene(2, 'Resumen', '.step-3', new ButtonLogic('button--default', 'Atrás', true), new ButtonLogic('button--verified', 'Terminar', true),true);

    this.currentScene = this.scenes[this.currentIndex];
    this.flowListener.subscribe(
      room => {
        this.show();
        this.room = room;
        this.loadScene();

        this.servicesProvider.getServicesFromHotelId({ 'esPension': false, 'hotelID': room.hotelID.hotelID }).subscribe(
          services => {
            this.servicios = new Array<BackendService>(services.length);

            for (let id in services) {
              this.servicios[id] = BackendService.parse(services[id]);
            }
          },
          err => {
            this.reset();
          }
        );
      },
      err => {
        this.reset();
      }
    )
  }
  // INICIO LOGICA STEP 1

  public plus(id: number) {
    if ((this.adultos + this.jovenes + this.children) + 1 > this.room.ocupantes) {
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
    let temporal: string = "Sin Pensión";
    switch (type) {
      case 0:
        this.pension_todo_incluido.isActive = (!this.pension_todo_incluido.isActive);
        temporal = this.pension_todo_incluido.title;
        this.pension_desayuno.isActive = false;
        this.pension_comida.isActive = false;
        this.pension_cena.isActive = false;
        break;
      case 1:
        this.pension_desayuno.isActive = (!this.pension_desayuno.isActive);
        this.pension_todo_incluido.isActive = false;
        break;
      case 2:
        this.pension_comida.isActive = (!this.pension_comida.isActive);
        this.pension_todo_incluido.isActive = false;
        break;
      case 3:
        this.pension_cena.isActive = (!this.pension_cena.isActive);
        this.pension_todo_incluido.isActive = false;
        break;
    }

    if (type != 0) {
      let services = new Array<Service>(3);
      services[0] = this.pension_desayuno;
      services[1] = this.pension_comida;
      services[2] = this.pension_cena;

      temporal = Service.getTitleCombined(services);
    }

    if (this.pension_desayuno.isActive && this.pension_comida.isActive && this.pension_cena.isActive) {
      this.pension_todo_incluido.isActive = true;
      temporal = this.pension_todo_incluido.title;
      this.pension_desayuno.isActive = false;
      this.pension_comida.isActive = false;
      this.pension_cena.isActive = false;

      const timeOutVar = setTimeout(function (tipo) {

        switch (tipo) {
          case 0:
            _.pension_todo_incluido.isActive = false;
            break;
          case 1:
            _.pension_desayuno.isActive = false;
            break;
          case 2:
            _.pension_comida.isActive = false;
            break;
          case 3:
            _.pension_cena.isActive = false;
            break;
        }
        clearTimeout(timeOutVar);
      }, 1, type);
    }
    this.tituloPension = temporal;
    this.updateStep(true);
  }
  // FIN LOGICA STEP 2
  // INICIO LOGICA FLUJO
  public close(): void {
    this.reset();
    $(".booking-flow").fadeOut();
    $(".booking-flow--background").hide();
  }

  public goTo(newStep: number) {
    if (newStep >= 0 && (newStep + 1) <= this.scenes.length && newStep != this.currentIndex && this.scenes[newStep].isDirty) {
      this.currentIndex = newStep;
      this.loadScene();
    }
  }

  public updateStep(valid: boolean = false) {
    this.scenes[this.currentIndex].isValid = valid;
  }

  private loadScene() {
    this.currentScene = this.scenes[this.currentIndex];
    this.currentScene.isDirty = true;
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

    this.scenes = new Array<Scene>();
    this.currentScene = null;
    this.currentIndex = 0;
    this.listener = new EventEmitter();
    //---------step 1---------
    this.adultos = 0;
    this.jovenes = 0;
    this.children = 0;

    this.room = new Room();

    this.max = 99;
    this.min = 0;
    //------------------------
    //---------step 2---------
    this.tituloPension = "Sin pensión";
    this.pension_todo_incluido = new Service(0, "Todo incluido", "pension-all.png");
    this.pension_desayuno = new Service(1, "Desayuno", "pension-breakfast.jpg");
    this.pension_comida = new Service(2, "Almuerzo", "pension-lunch.jpg");
    this.pension_cena = new Service(3, "Cena", "pension-dinner.jpg");

    this.ngOnInit();
    $(".step").hide();
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
  public isDirty: boolean = false;

  constructor(id: number, title: string, node: string, backButton: ButtonLogic, nextButton: ButtonLogic, isValid: boolean = false) {
    this.id = id;
    this.title = title;
    this.node = node;
    this.backButton = backButton;
    this.nextButton = nextButton;
    this.isValid = isValid;
  }
}