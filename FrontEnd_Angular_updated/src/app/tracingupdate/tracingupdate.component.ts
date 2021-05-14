import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Outinglist } from '../model/outinglist';
import { Tracinglist } from '../model/tracinglist';
import { FunctionsService} from '../services/functions.service';

@Component({
  selector: 'app-tracingupdate',
  templateUrl: './tracingupdate.component.html',
  styleUrls: ['./tracingupdate.component.css']
})
export class TracingupdateComponent implements OnInit {

  form: any = {};
  tracingadd: Tracinglist = new Tracinglist(
    this.form.id,
    this.form.name,
    this.form.email,
    this.form.room,
    this.form.drivername,
    this.form.drivercontact
  );
  isTraced = false;
  isTracingFailed = false;
  errorMessage = '';
  id: number;

  constructor(private functionsService: FunctionsService,private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.functionsService.getTracingById(this.id).subscribe(data => {
      this.tracingadd = data;
    }, error => console.log(error));
  }

  tracingupdate() {
    this.functionsService.tracingupdate(this.id, this.tracingadd).subscribe(data => {
      this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.tracingupdate();
  }

  gotoList() {
    this.router.navigate(['/tracinglist']);
  }

}
