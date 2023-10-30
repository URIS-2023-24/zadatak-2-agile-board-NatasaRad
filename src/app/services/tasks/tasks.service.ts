import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseUrl = "https://app.microenv.com/backend/key/b84d899884e5691835bd49/rest/api/tasks/";

  constructor(private httpClient: HttpClient) { }

  public getTasks() : Observable<any> {
    return this.httpClient.get(this.baseUrl)
     .pipe(map((response : Response) => response));
  }
}
