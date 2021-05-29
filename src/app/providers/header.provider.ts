import { Injectable } from '@angular/core';
import { HeaderMenuObject } from '../models/header-menu-object';

@Injectable({
  providedIn: 'root'
})
export class HeaderProvider {

  private no_logging_menu:HeaderMenuObject = {
    icon: '',
    title: 'royal hotel',
    items: [
      { title: 'registrarse', url: '/register' },
      { title: 'iniciar sesión', url: '/login' },
      { title: 'Hoteles', url: '/' }
    ]
  }

  private user_logging_menu:HeaderMenuObject = {
    icon: '',
    title: 'royal hotel',
    items: [
      { title: 'realizar reserva', url: '/booking'},
      { title: 'mis reservas', url: '/my-bookings'},
      { title: 'contáctanos', url: ''},
      { title: 'desconectar', url: ''}
    ]
  }
  
  private admin_logging_menu:HeaderMenuObject = {
    icon: '',
    title: 'administracion royal hotel',
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
}
