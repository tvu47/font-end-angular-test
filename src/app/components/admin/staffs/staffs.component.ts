import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Roles } from 'src/app/obj/Roles';
import { Staffs } from 'src/app/obj/Staffs';
import { RoleUserService } from 'src/app/services/role-user.service';
import { StaffsService } from 'src/app/services/staffs.service';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss'],
})
export class StaffsComponent implements OnInit {
  public listStaff!: Staffs[];
  public listRoles!: Roles[];

  constructor(
    private staffService: StaffsService,
    private roleService: RoleUserService
  ) {}

  ngOnInit(): void {
    this.getListStaffs();
    this.getListRoles();
  }

  public getListStaffs(): void {
    this.staffService.getStaffs().subscribe({
      next: (v) => {
        this.listStaff = v;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  public getListRoles(): void {
    this.roleService.getAllRole().subscribe({
      next: (v) => {
        this.listRoles = v;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  public onAddStaff(form: NgForm): void {
    this.staffService.addStaffs(form.value).subscribe({
      next: (n) => {
        console.log('add successfully!!!' + n);
      },
      error: (e) => {
        console.log('add error!!!' + e);
      },
    });
  }

  public onOpenModal(staff: Staffs | null, modal: string): void {
    const container = document.getElementById('staff-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (modal === 'add') {
      button.setAttribute('data-target', '#addStaffModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
