import { Injectable } from '@angular/core';
import { HeaderMenuObject } from '../models/header-menu-object';

@Injectable({
  providedIn: 'root'
})
export class HeaderProvider {

  private no_logging_menu:HeaderMenuObject = {
    icon: 'main_logo',
    title: 'royal hotel',
    items: [
      { title: 'registrarse', url: '/register' },
      { title: 'iniciar sesión', url: '/login' },
      { title: 'Hoteles', url: '/' }
    ]
  }

  private user_logging_menu:HeaderMenuObject = {
    icon: 'main_logo',
    title: 'royal hotel',
    items: [
      { title: 'realizar reserva', url: '/booking'},
      { title: 'mis reservas', url: '/my-bookings'},
      { title: 'contáctanos', url: ''},
      { title: 'desconectar', url: ''}
    ]
  }
  
  private admin_logging_menu:HeaderMenuObject = {
    icon: 'main_logo',
    title: 'administracion royal hotel',
    items: [
      { title: 'usuarios', url: '/user-management'},
      { title: 'habitaciones', url: '/hotel-management'},
      { title: 'desconectar', url: ''}
    ]
  }

  constructor() {}

  getMenu():HeaderMenuObject {

    return this.admin_logging_menu;
  }
}
