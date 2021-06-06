import { Injectable } from '@angular/core';
import { HeaderMenuObject } from '../models/header-menu-object';
import { User } from '../models/User';
import { UserType } from '../models/UserType';
import { UserProvider } from './user.provider';

@Injectable({
  providedIn: 'root'
})
export class HeaderProvider {

  private free_access:HeaderMenuObject = {
    title: 'Royal Hotel',
    items: [
      { title: 'Registrarse', url: '' },
      { title: 'Iniciar Sesión', url: '' }
    ]
  }

  private standar_access:HeaderMenuObject = {
    title: 'Royal Hotel',
    items: [
      { title: 'Realizar Reserva', url: '/booking'},
      { title: 'Mis reservas', url: '/my-bookings'},
      { title: 'Contáctanos', url: ''},
      { title: 'Desconectar', url: ''}
    ]
  }
  
  private admin_access:HeaderMenuObject = {
    title: 'Administración Royal Hotel',
    items: [
      { title: 'usuarios', url: '/user-management'},
      { title: 'habitaciones', url: '/hotel-management'},
      { title: 'desconectar', url: ''}
    ]
  }

  constructor(private userProvider: UserProvider) {}

  getMenu():HeaderMenuObject {
    let userLogged:User = this.userProvider.getUserLogged();

    let menu = this.free_access;

    if(userLogged) {
      menu = userLogged.userType == UserType.ADMIN ? this.admin_access : this.standar_access;
    }
    return menu;
  }
}
