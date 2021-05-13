import { Component, OnInit } from '@angular/core';
import { Permissionlist } from '../model/permissionlist';
import { FunctionsService} from '../services/functions.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  permissionlist : Permissionlist[];

  constructor(private functionsService: FunctionsService) { }

  ngOnInit(){
    this.functionsService.findAllPermission().subscribe(data => {
      this.permissionlist = data;
  });

};





}
