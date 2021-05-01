import { Component, OnInit } from '@angular/core';
import { Permissionlist } from '../model/permissionlist';
import { Outinglist } from '../model/outinglist';
import { FunctionsService} from '../services/functions.service';
import { ɵDomRendererFactory2 } from '@angular/platform-browser';
import { HttpClient ,HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  permissionlist : Permissionlist[];
  Permission : Permissionlist;

  constructor(private functionsService: FunctionsService) { }

  ngOnInit(){
    this.functionsService.findAllPermission().subscribe(data => {
      this.permissionlist = data;
  });

};


callFunction1(event, post:number){
  
  this.functionsService.acceptr(post).subscribe();
  window.location.reload();

  };

callFunction2(event, post:number){
  
  this.functionsService.denyr(post).subscribe();
  window.location.reload();
  };

 
  
}





