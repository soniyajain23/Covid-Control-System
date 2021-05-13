import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tracinglist } from '../model/tracinglist';
import { Outinglist } from '../model/outinglist';
import { Permissionlist } from '../model/permissionlist';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private tracinglistUrl = 'http://localhost:8081/api/tracing/show';
  private tracingaddUrl = 'http://localhost:8081/api/tracing/add';
  private permissionlistUrl = 'http://localhost:8081/api/permission/show';
  private outinglistUrl = 'http://localhost:8081/api/outing/show';
  

  constructor(private http: HttpClient) { }

  public findAllTracing(): Observable<Tracinglist[]> {
    return this.http.get<Tracinglist[]>(this.tracinglistUrl);
  }

  public trace(tracingadd: Tracinglist): Observable<string>{
    return this.http.post<string>(this.tracingaddUrl, tracingadd, this.httpOptions);
    }

    public findAllOuting(): Observable<Outinglist[]> {
      return this.http.get<Outinglist[]>(this.outinglistUrl);
    }

    public findAllPermission(): Observable<Permissionlist[]> {
      return this.http.get<Permissionlist[]>(this.permissionlistUrl);
    }


  }



 

