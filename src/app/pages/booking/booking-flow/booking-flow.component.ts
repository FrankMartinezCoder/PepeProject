import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-flow',
  templateUrl: './booking-flow.component.html',
  styleUrls: ['./booking-flow.component.scss', './step1.scss', './step2.scss', './step3.scss']
})
export class BookingFlowComponent {

  private scenes: Array<Scene>;
  public currentScene: Scene;
  private currentIndex: number = 0;

  public buttonBack: ButtonLogic = new ButtonLogic('button--danger', 'Salir');
  public buttonNext: ButtonLogic = new ButtonLogic('button--default', 'Siguiente');
  public isValid: boolean = false;
  //---------step 1---------

  //------------------------
  constructor() {
    this.scenes = new Array(3);
    this.scenes[0] = new Scene(0, 'Ocupantes', '.step-1', new ButtonLogic('button--danger', 'Salir', true), new ButtonLogic('button--default', 'Siguiente', true));
    this.scenes[1] = new Scene(1, 'Servicios', '.step-2', new ButtonLogic('button--default', 'Atrás', true), new ButtonLogic('button--info', 'Siguiente', true));
    this.scenes[2] = new Scene(2, 'Resumen', '.step-3', new ButtonLogic('button--default', 'Atrás', true), new ButtonLogic('button--verified', 'Terminar', true));

    this.currentScene = this.scenes[this.currentIndex];
  }
  // INICIO LOGICA STEP 1





  // FIN LOGICA STEP 1
  // INICIO LOGICA FLUJO
  public close(): void {
    this.reset();
    $(".booking-flow").fadeOut();
  }

  public goTo(newStep: number) {
    if (newStep > 0 && (newStep) <= this.scenes.length && newStep != this.currentIndex) {
      this.currentIndex = newStep;
      this.loadScene();
    }
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
    $.map($(".booking-flow .header-item-dot"), function (item: HTMLElement, idx) {
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

    this.buttonBack = new ButtonLogic('button--danger', 'Salir');
    this.buttonNext = new ButtonLogic('button--default', 'Siguiente');
    this.isValid = false;
  }

  public show() {
    $(".booking-flow--background").show();
    $(".booking-flow").fadeIn();
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