import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Outinglist } from '../model/outinglist';
import { FunctionsService} from '../services/functions.service';

@Component({
  selector: 'app-outing',
  templateUrl: './outing.component.html',
  styleUrls: ['./outing.component.css']
})
export class OutingComponent implements OnInit {

  outinglist : Outinglist[];

  filters = {
    keyword: '',
    sortBy: 'Day', 
    order: 'Descending' /*default value*/
  }

  constructor(private functionsService: FunctionsService,
    private router: Router) { }

  ngOnInit(): void{
      this.getOuting();
  };

  getOuting() {
    this.functionsService.findAllOuting().subscribe(data => {
      this.outinglist = this.filterOuting(data);
    });
  }

  outingupdate(id: number){
    this.router.navigate(['outingupdate',id]);
  }

  outingdelete(id: number) {
    this.functionsService.outingdelete(id).subscribe(data => {
      console.log(data);
      this.getOuting();
    })
  }

  filterOuting(outinglist: Outinglist[]) {
    return outinglist.filter((o) => {
      if (o.name.toLowerCase().indexOf(this.filters.keyword.toLowerCase()) != -1 ||
      o.email.toLowerCase().indexOf(this.filters.keyword.toLowerCase()) != -1 ||
      o.day.toLowerCase().indexOf(this.filters.keyword.toLowerCase()) != -1 ||
      o.reason.toLowerCase().indexOf(this.filters.keyword.toLowerCase()) != -1 ||
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
      else if(this.filters.sortBy == 'Day') {
        if(this.filters.order == 'Ascending') {
          return a.day.toLowerCase() < b.name.toLowerCase() ? -1:1;
        }
        else {
          return a.day.toLowerCase() > b.name.toLowerCase() ? -1:1;
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

