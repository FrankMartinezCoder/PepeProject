import { Injectable } from '@angular/core';
import { HeaderMenuObject } from '../models/header-menu-object';

@Injectable({
  providedIn: 'root'
})
export class HeaderProvider {

  private no_logging_menu:HeaderMenuObject = {
    icon: '',
    title: 'Royal Hotel',
    items: [
      { title: 'Registrarse', url: '/register' },
      { title: 'Iniciar Sesión', url: '/login' }
    ]
  }

  private user_logging_menu:HeaderMenuObject = {
    icon: '',
    title: 'Royal Hotel',
    items: [
      { title: 'Realizar Reserva', url: '/booking'},
      { title: 'Mis reservas', url: '/my-bookings'},
      { title: 'Contáctanos', url: ''},
      { title: 'Desconectar', url: ''}
    ]
  }
  
  private admin_logging_menu:HeaderMenuObject = {
    icon: '',
    title: 'Administración Royal Hotel',
    items: [
      { title: 'usuarios', url: '/user-management'},
      { title: 'habitaciones', url: '/hotel-management'},
      { title: 'desconectar', url: ''}
    ]
  }

  private logosUrl:String = 'utilities/logo.svg';
  constructor() {}

  getMenu():HeaderMenuObject {
    let menu = this.user_logging_menu;
    menu.icon = this.logosUrl;
    return menu;
  }

  getMenuNoLogging():HeaderMenuObject {
    let menu = this.no_logging_menu;
    menu.icon = this.logosUrl;
    return menu;
  }
}
