import { Component, OnInit } from '@angular/core';
import { Outinglist } from '../model/outinglist';
import { FunctionsService} from '../services/functions.service';

@Component({
  selector: 'app-outing',
  templateUrl: './outing.component.html',
  styleUrls: ['./outing.component.css']
})
export class OutingComponent implements OnInit {

  outinglist : Outinglist[];

  constructor(private functionsService: FunctionsService) { }

  ngOnInit(){
    this.functionsService.findAllOuting().subscribe(data => {
      this.outinglist = data;
  });

};





}

