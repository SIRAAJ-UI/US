import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable()
export class ReversalExceptionService {

  constructor(private http:HttpClient) { }
  public unProcessedReversal(postParams):Observable<any>{
    return this.http.post(environment.serverUrl + 'api/UnProcessedReversal',postParams)
  }
  updateUnProcessed(postParam):Observable<any>{
    return this.http.post(environment.serverUrl+'api/UnProcessedReversal/UpdateUnProcessed',postParam)
}
}
