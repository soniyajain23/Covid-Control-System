import { Component, OnInit } from '@angular/core';
import { Tracinglist } from '../model/tracinglist';
import { FunctionsService} from '../services/functions.service';

@Component({
  selector: 'app-tracingadd',
  templateUrl: './tracingadd.component.html',
  styleUrls: ['./tracingadd.component.css']
})
export class TracingaddComponent implements OnInit {

  form: any = {};
  tracingadd: Tracinglist;
  isTraced = false;
  isTracingFailed = false;
  errorMessage = '';

  constructor(private functionsService: FunctionsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form);
  
    this.tracingadd = new Tracinglist(
      this.form.id,
      this.form.name,
      this.form.email,
      this.form.room,
      this.form.drivername,
      this.form.drivercontact);
  
    this.functionsService.trace(this.tracingadd).subscribe(
      data => {
        console.log(data);
        this.isTraced = true;
        this.isTracingFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isTracingFailed = true;
      }
    );
  }

}
