import { HttpClient ,HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tracinglist } from '../model/tracinglist';
import { Outinglist } from '../model/outinglist';
import { Permissionlist } from '../model/permissionlist';
import { RouterLink } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
import { ConnectableObservable } from "rxjs"
import { publish } from "rxjs/operators";
import { map, filter, switchMap } from 'rxjs/operators';

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
  private permissionaddUrl = 'http://localhost:8081/api/permission/add';
  private outinglistUrl = 'http://localhost:8081/api/outing/show';
  private outingaddUrl = 'http://localhost:8081/api/outing/add';
  private acceptUrl = 'http://localhost:8081/api/permission/update+';
  private denyUrl = 'http://localhost:8081/api/permission/update-';
  

  constructor(private http: HttpClient) { }

  public findAllTracing(): Observable<Tracinglist[]> {
    return this.http.get<Tracinglist[]>(this.tracinglistUrl);
  }
  public trace(tracingadd: Tracinglist): Observable<string>{
    return this.http.post<string>(this.tracingaddUrl, tracingadd, this.httpOptions);
  }
  public getTracingById(id: number): Observable<Tracinglist> {
    return this.http.get<Tracinglist>(`${this.tracinglistUrl}/${id}`);
  }
  public tracingupdate(id: number, tracing: Tracinglist): Observable<Object> {
    return this.http.put(`${this.tracinglistUrl}/${id}`, tracing);
  }
  public tracingdelete(id: number): Observable<any> {
    return this.http.delete(`${this.tracinglistUrl}/${id}`,{responseType: 'text'});
  }


  public findAllOuting(): Observable<Outinglist[]> {
    return this.http.get<Outinglist[]>(this.outinglistUrl);
  }
  public outing(outingadd: Outinglist): Observable<string>{
    return this.http.post<string>(this.outingaddUrl, outingadd, this.httpOptions);
  }
  public getOutingById(id: number): Observable<Outinglist> {
    return this.http.get<Outinglist>(`${this.outinglistUrl}/${id}`);
  }
  public outingupdate(id: number, outing: Outinglist): Observable<Object> {
    return this.http.put(`${this.outinglistUrl}/${id}`, outing);
  }
  public outingdelete(id: number): Observable<any> {
    return this.http.delete(`${this.outinglistUrl}/${id}`,{responseType: 'text'});
  }
  
  
  public findAllPermission(): Observable<Permissionlist[]> {
    return this.http.get<Permissionlist[]>(this.permissionlistUrl);
  }
  public permission(permissionadd: Permissionlist): Observable<string>{
    return this.http.post<string>(this.permissionaddUrl, permissionadd, this.httpOptions);
  }
  acceptr(pidn:number) {
    var observable = this.http.post('http://localhost:8081/api/permission/update+'+'?pid='+pidn,pidn)
    return observable;
  }
  denyr(pidn:number) {
    var observable = this.http.post('http://localhost:8081/api/permission/update-'+'?pid='+pidn,pidn)
    return observable;
  }

  //public denyr(pid : number):{
 // const params = new HttpParams().append('pid', '37' );
    
  
  


  }



 

