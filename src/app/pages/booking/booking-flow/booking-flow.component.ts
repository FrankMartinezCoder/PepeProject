import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/model/back-model/BackendService';
import { Room } from 'src/app/model/back-model/Room';
import { User } from 'src/app/model/back-model/User';
import { BookingFilter } from 'src/app/model/front-model/BookingFilter';
import { Service } from 'src/app/model/front-model/Service';
import { BookingProvider } from 'src/app/providers/booking.provider';
import { ServicesProvider } from 'src/app/providers/hotel_services.provider';
import { UserProvider } from 'src/app/providers/user.provider';
import { ValoracionProvider } from 'src/app/providers/valoracion-service.provider';

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
  public adultos: number = 1;
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
  public pensiones: Array<BackendService>;

  @Input() public flowListener: EventEmitter<Room>;
  //------------------------
  //---------step 3---------

  @Input() public filterListener: EventEmitter<BookingFilter>;
  public filter: BookingFilter;

  public user: User = new User();
  public costeTotalHabitacion: number;
  public totalCosteReserva: number;

  public numDias: number = 1;
  //------------------------

  constructor(private servicesProvider: ServicesProvider,
    private bookingProvider: BookingProvider,
    private userProvider: UserProvider,
    private valoracionesProvider: ValoracionProvider,
    private router: Router) { }

  ngOnInit(): void {

    this.scenes = new Array(3);
    this.scenes[0] = new Scene(0, 'Ocupantes', '.step-1', new ButtonLogic('button--danger', 'Salir', true), new ButtonLogic('button--default', 'Siguiente', true), true);
    this.scenes[1] = new Scene(1, 'Servicios', '.step-2', new ButtonLogic('button--default', 'Atrás', true), new ButtonLogic('button--info', 'Siguiente', true), true);
    this.scenes[2] = new Scene(2, 'Resumen', '.step-3', new ButtonLogic('button--default', 'Atrás', true), new ButtonLogic('button--verified', 'Terminar', true), true);

    this.currentScene = this.scenes[this.currentIndex];

    this.filterListener.subscribe(
      filter => {
        this.filter = filter;
        this.numDias = this.filter.fechaSalida.getDate() - this.filter.fechaEntrada.getDate();
      }
    )

    this.flowListener.subscribe(
      room => {
        this.show();
        this.room = room;
        this.costeTotalHabitacion = ((this.adultos * this.room.precioOcupante) + (this.jovenes * (0.7 * this.room.precioOcupante))) > this.room.precioHabitacionTotal ? this.room.precioHabitacionTotal : ((this.adultos * this.room.precioOcupante) + (this.jovenes * (0.7 * this.room.precioOcupante)));

        this.servicesProvider.getServicesFromHotelId({ 'esPension': false, 'hotelID': room.hotelID.hotelID }).subscribe(
          services => {
            this.servicios = new Array<BackendService>(services.length);

            for (let id in services) {
              this.servicios[id] = BackendService.parse(services[id]);
            }

            this.servicesProvider.getServicesFromHotelId({ 'esPension': true, 'hotelID': room.hotelID.hotelID }).subscribe(
              pensiones => {
                
                this.pensiones = new Array<BackendService>(pensiones.length);

                for (let id in pensiones) {
                  this.pensiones[id] = BackendService.parse(pensiones[id]);
                }
                if (!this.pensiones.find(e => e.tipo == this.pension_todo_incluido.title)) {
                  this.pension_todo_incluido.isVisible = false;
                }
                if (!this.pensiones.find(e => e.tipo == this.pension_desayuno.title)) {
                  this.pension_desayuno.isVisible = false;
                }
                if (!this.pensiones.find(e => e.tipo == this.pension_comida.title)) {
                  this.pension_comida.isVisible = false;
                }
                if (!this.pensiones.find(e => e.tipo == this.pension_cena.title)) {
                  this.pension_cena.isVisible = false;
                }

                this.loadScene();
              },
              err => {
                this.reset();
              }
            );
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
      return;
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
    this.costeTotalHabitacion = ((this.adultos * this.room.precioOcupante) + (this.jovenes * (0.7 * this.room.precioOcupante))) > this.room.precioHabitacionTotal ? this.room.precioHabitacionTotal : ((this.adultos * this.room.precioOcupante) + (this.jovenes * (0.7 * this.room.precioOcupante)));
    this.updateStep(this.adultos > 0 && (this.adultos + this.jovenes + this.children) <= this.room.ocupantes);
  }

  public less(id: number) {
    let temporal: number;
    switch (id) {
      case 0:
        temporal = this.adultos;
        if (temporal > 1)
          temporal--;
        break
      case 1:
        temporal = this.jovenes;
        break
      case 2:
        temporal = this.children;
        break
    }
    if (id != 0 && temporal > this.min) {
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
    this.costeTotalHabitacion = ((this.adultos * this.room.precioOcupante) + (this.jovenes * (0.7 * this.room.precioOcupante))) > this.room.precioHabitacionTotal ? this.room.precioHabitacionTotal : ((this.adultos * this.room.precioOcupante) + (this.jovenes * (0.7 * this.room.precioOcupante)));
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
    this.costeTotalHabitacion = ((this.adultos * this.room.precioOcupante) + (this.jovenes * (0.7 * this.room.precioOcupante))) > this.room.precioHabitacionTotal ? this.room.precioHabitacionTotal : ((this.adultos * this.room.precioOcupante) + (this.jovenes * (0.7 * this.room.precioOcupante)));
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
    this.user = this.userProvider.getUserLogged();

    this.updateHeader();
    this.updateTotalCoste();
  }

  public updateTotalCoste() {
    this.totalCosteReserva = this.costeTotalHabitacion * this.numDias;

    for (let i = 0; i < this.servicios.length; i++) {
      if (this.servicios[i].isSelected) {
        this.totalCosteReserva += (this.servicios[i].precio * this.room.ocupantes * this.numDias);
      }
    }

    if (!this.pensiones.find(e => e.tipo == this.pension_todo_incluido.title) && this.pension_todo_incluido.isActive) {
      let precioXpersona = this.pensiones.find(e => e.tipo == this.pension_todo_incluido.title).precio;
      this.totalCosteReserva += (precioXpersona ? precioXpersona : 1 * this.room.ocupantes * this.numDias)
    }
    if (!this.pensiones.find(e => e.tipo == this.pension_desayuno.title) && this.pension_desayuno.isActive) {
      let precioXpersona = this.pensiones.find(e => e.tipo == this.pension_desayuno.title).precio;
      this.totalCosteReserva += (precioXpersona * this.room.ocupantes * this.numDias)
    }
    if (!this.pensiones.find(e => e.tipo == this.pension_comida.title) && this.pension_comida.isActive) {
      let precioXpersona = this.pensiones.find(e => e.tipo == this.pension_comida.title).precio;
      this.totalCosteReserva += (precioXpersona * this.room.ocupantes * this.numDias)
    }
    if (!this.pensiones.find(e => e.tipo == this.pension_cena.title) && this.pension_cena.isActive) {
      let precioXpersona = this.pensiones.find(e => e.tipo == this.pension_cena.title).precio;
      this.totalCosteReserva += (precioXpersona * this.room.ocupantes * this.numDias)
    }
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

      this.bookingProvider.addBooking(
        this.adultos,
        this.jovenes,
        this.children,
        BookingFilter.dateFormat(this.filter.fechaEntrada, true),
        BookingFilter.dateFormat(this.filter.fechaSalida, true),
        this.user.usuarioID,
        this.room.hotelID.hotelID,
        this.room.habitacionID,
        this.totalCosteReserva,
        this.costeTotalHabitacion).subscribe(
          ok => {
            this.close();
            this.router.navigate(['/my-bookings']);
          }
        );
        
      this.valoracionesProvider.getServicesFromHotelId(this.servicios.filter(e=>e.isSelected),this.room.hotelID, ((this.adultos+this.jovenes+this.children) * this.numDias)).subscribe(
        ok => {
          console.log(ok);
          
        }
      )
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
    this.adultos = 1;
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