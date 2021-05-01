import { Component, OnInit } from '@angular/core';
import { Outinglist } from '../model/outinglist';
import { FunctionsService} from '../services/functions.service';

@Component({
  selector: 'app-outingadd',
  templateUrl: './outingadd.component.html',
  styleUrls: ['./outingadd.component.css']
})
export class OutingaddComponent implements OnInit {
  form: any = {};
  outingadd: Outinglist;
  isOut = false;
  isOutingFailed = false;
  errorMessage = '';

  constructor(private functionsService: FunctionsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form);
  
    // this.outingadd = new Outinglist(
    //   this.form.id,
    //   this.form.name,
    //   this.form.email,
    //   this.form.day,
    //   this.form.duration,
    //   this.form.reason,
    //   this.form.outgoingtime,
    //   this.form.returningtime);
  
    this.functionsService.outing(this.outingadd).subscribe(
      data => {
        console.log(data);
        this.isOut = true;
        this.isOutingFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isOutingFailed = true;
      }
    );
  }
}
