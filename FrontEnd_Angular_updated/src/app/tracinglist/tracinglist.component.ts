import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tracinglist } from '../model/tracinglist';
import { FunctionsService} from '../services/functions.service';

@Component({
  selector: 'app-tracinglist',
  templateUrl: './tracinglist.component.html',
  styleUrls: ['./tracinglist.component.css']
})
export class TracinglistComponent implements OnInit {

  tracinglist : Tracinglist[];

  constructor(private functionsService: FunctionsService, 
    private router: Router) { }

  ngOnInit(){
    this.getTracing();
  };

  getTracing() {
    this.functionsService.findAllTracing().subscribe(data_t => {
      this.tracinglist = data_t;
    });
  }

  // tracingupdate(id: number) {
  //   this.router.navigate(['tracingupdate',id]);
  // }

  // tracingdelete(id: number) {
  //   this.functionsService.tracingdelete(id).subscribe(data => {
  //     console.log(data);
  //     this.getTracing();
  //   })
  // }


}
