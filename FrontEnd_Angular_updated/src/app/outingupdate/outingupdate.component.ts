import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Outinglist } from '../model/outinglist';
import { FunctionsService} from '../services/functions.service';

@Component({
  selector: 'app-outingupdate',
  templateUrl: './outingupdate.component.html',
  styleUrls: ['./outingupdate.component.css']
})
export class OutingupdateComponent implements OnInit {
  form: any = {};
  //outingadd: Outinglist;
  outingadd: Outinglist = new Outinglist(
    this.form.id,
    this.form.name,
    this.form.email,
    this.form.day,
    this.form.duration,
    this.form.reason,
    this.form.outgoingtime,
    this.form.returningtime);
  isOut = false;
  isOutingFailed = false;
  errorMessage = '';
  id: number;
  
  constructor(private functionsService: FunctionsService,private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.functionsService.getOutingById(this.id).subscribe(data => {
      this.outingadd = data;
    }, error => console.log(error));
  }

  outingupdate() {
    this.functionsService.outingupdate(this.id, this.outingadd).subscribe(data => {
      this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.outingupdate();
  }

  gotoList() {
    this.router.navigate(['/outing']);
  }
}
