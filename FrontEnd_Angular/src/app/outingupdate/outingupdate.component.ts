import { Component, OnInit } from '@angular/core';
import { Outinglist } from '../model/outinglist';
import { FunctionsService} from '../services/functions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-outingupdate',
  templateUrl: './outingupdate.component.html',
  styleUrls: ['./outingupdate.component.css']
})
export class OutingupdateComponent implements OnInit {

  id: number;
  outinglist: Outinglist;
  form: any = {};
  isOut = false;
  isOutingFailed = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute,private router: Router,
    private functionsService: FunctionsService) { }

  ngOnInit(): void {
    this.outinglist = new Outinglist();

    this.id = this.route.snapshot.params['id'];
    
    this.functionsService.getOuting(this.id)
      .subscribe(data => {
        console.log(data)
        this.outinglist = data;
      }, error => console.log(error));
  }

  updateOuting() {
    this.functionsService.updateOuting(this.id, this.outinglist)
    .subscribe(data => {
      console.log(data);
      this.outinglist = new Outinglist();
      this.gotoList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateOuting();
  }

  gotoList() {
    this.router.navigate(['/outing']);
  }

}
