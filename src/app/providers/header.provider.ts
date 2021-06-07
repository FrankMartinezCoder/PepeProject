import { Injectable } from '@angular/core';
import { StaticPages } from '../config/pageUrls';
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
    items: null
  }

  private standar_access:HeaderMenuObject = {
    title: 'Royal Hotel',
    items: [
      { name: 'Realizar Reserva', url: '/booking', id:-1},
      { name: 'Mis reservas', url: '/my-bookings', id:-1},
    ]
  }
  
  private admin_access:HeaderMenuObject = {
    title: 'Administración Royal Hotel',
    items: [
      { name: 'usuarios', url: '/user-management', id:-1},
      { name: 'habitaciones', url: '/hotel-management', id:-1},
    ]
  }

  constructor(private userProvider: UserProvider) {}

  getMenu():HeaderMenuObject {
    let userLogged:User = this.userProvider.getUserLogged();

    let menu = this.free_access;

    if(userLogged) {
      if(userLogged.userType == UserType.ADMIN) {
        menu = this.admin_access;
      }
      else {
        menu = this.standar_access;

      }
      menu.items = menu.items.filter((item)=>item.id!=1).concat({ name: 'Desconectar', url: '', id:1});
    }
    else {
      menu.items = [
        { name: 'Realizar Reserva', url: StaticPages.bookings, id:-1},
        { name: 'iniciar sesión', url: null, id:0},
        { name: 'Registrarse', url: null, id:2}
      ]
    }
    return menu;
  }
}
