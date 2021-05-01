import { Component, OnInit } from '@angular/core';
import { Tracinglist } from '../model/tracinglist';
import { FunctionsService} from '../services/functions.service';

@Component({
  selector: 'app-tracinglist',
  templateUrl: './tracinglist.component.html',
  styleUrls: ['./tracinglist.component.css']
})
export class TracinglistComponent implements OnInit {

  tracinglist : Tracinglist[];

  constructor(private functionsService: FunctionsService) { }

  ngOnInit(){
    this.functionsService.findAllTracing().subscribe(data_t => {
      this.tracinglist = data_t;
  });

};





}
