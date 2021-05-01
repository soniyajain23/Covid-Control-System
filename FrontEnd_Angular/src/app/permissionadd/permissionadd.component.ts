import { Component, OnInit } from '@angular/core';
import { Permissionlist } from '../model/permissionlist';
import { FunctionsService} from '../services/functions.service';

@Component({
  selector: 'app-permissionadd',
  templateUrl: './permissionadd.component.html',
  styleUrls: ['./permissionadd.component.css']
})
export class PermissionaddComponent implements OnInit {
  form: any = {};
  permissionadd: Permissionlist;
  isPermitted = false;
  isPermissionFailed = false;
  errorMessage = '';

  constructor(private functionsService: FunctionsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form);
  
    this.permissionadd = new Permissionlist(
      this.form.name ,
      this.form.email,
      this.form.pid,
      this.form.msg,
      this.form.duration,
      this.form.status,
      this.form.day,
      );
  
    this.functionsService.permission(this.permissionadd).subscribe(
      data => {
        console.log(data);
        this.isPermitted = true;
        this.isPermissionFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isPermissionFailed = true;
      }
    );
  }
}
