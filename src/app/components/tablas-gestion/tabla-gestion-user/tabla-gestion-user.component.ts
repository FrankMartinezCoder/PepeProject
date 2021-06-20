import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaticPages } from 'src/app/config/pageUrls';
import { User } from 'src/app/model/back-model/User';

@Component({
  selector: 'app-tabla-gestion-user',
  templateUrl: './tabla-gestion-user.component.html',
  styleUrls: ['./tabla-gestion-user.component.scss']
})
export class TablaGestionUserComponent implements OnInit {
  @Input() public title: string;

  public editable: Array<boolean>;

  @Input() private tableDataListener: EventEmitter<User>;

  @Input() private dataChange: EventEmitter<User>;
  @Input() private dataDelete: EventEmitter<User>;


  public users: User[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.tableDataListener.subscribe(
      data => {
        this.users = data;

        this.editable = new Array(data.length).fill(false);
      }
    )
  }

  public editar(idx: number) {
    this.editable[idx] = true;
  }

  public eliminar(item: User) {
    this.dataDelete.emit(item);
    this.reload();
  }

  public actualizar(user: User, idx: number) {
    this.dataChange.emit(user);
    this.cancelarActualizar(idx);
    this.reload();
  }

  public cancelarActualizar(idx: number) {
    this.editable[idx] = false;
  }

  private reload() {
    this.router.navigateByUrl(StaticPages.userManagement);
  }
}
