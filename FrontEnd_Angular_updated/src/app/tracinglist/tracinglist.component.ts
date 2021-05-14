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

  filters = {
    keyword: '',
    sortBy: 'id', 
    order: 'Ascending' /*default value*/
  }

  constructor(private functionsService: FunctionsService, 
    private router: Router) { }

  ngOnInit(){
    this.getTracing();
  };

  getTracing() {
    this.functionsService.findAllTracing().subscribe(data => {
      this.tracinglist = this.filterTracing(data);
    });
  }

  tracingupdate(id: number) {
    this.router.navigate(['tracingupdate',id]);
  }

  tracingdelete(id: number) {
    this.functionsService.tracingdelete(id).subscribe(data => {
      console.log(data);
      this.getTracing();
    })
  }

  filterTracing(tracinglist: Tracinglist[]) {
    return tracinglist.filter((o) => {
      if (o.name.toLowerCase().indexOf(this.filters.keyword.toLowerCase()) != -1 ||
      o.email.toLowerCase().indexOf(this.filters.keyword.toLowerCase()) != -1 ||
      o.drivername.toLowerCase().indexOf(this.filters.keyword.toLowerCase()) != -1 ||
      o.drivercontact.toString().indexOf(this.filters.keyword.toString()) != -1 ||
      o.room.toString().indexOf(this.filters.keyword.toString()) != -1 ||
      o.id.toString().indexOf(this.filters.keyword.toString()) != -1) {
        return true;
      }
      else
        return false;
    }).sort((a,b) => {
      if(this.filters.sortBy == 'Name') {
        if(this.filters.order == 'Ascending') {
          return a.name.toLowerCase() < b.name.toLowerCase() ? -1:1;
        }
        else {
          return a.name.toLowerCase() > b.name.toLowerCase() ? -1:1;
        }
      }
      else if(this.filters.sortBy == 'Email') {
        if(this.filters.order == 'Ascending') {
          return a.email.toLowerCase() < b.name.toLowerCase() ? -1:1;
        }
        else {
          return a.email.toLowerCase() > b.name.toLowerCase() ? -1:1;
        }
      } 
      else if(this.filters.sortBy == 'Room') {
        if(this.filters.order == 'Ascending') {
          return a.room < b.room ? -1:1;
        }
        else {
          return a.room > b.room ? -1:1;
        }
      }
      else if(this.filters.sortBy == 'Id') {
        if(this.filters.order == 'Ascending') {
          return a.id < b.id ? -1:1;
        }
        else {
          return a.id > b.id ? -1:1;
        }
      }
    })
  }

}
