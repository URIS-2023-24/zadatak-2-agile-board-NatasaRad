import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  baseUrl = "https://app.microenv.com/backend/key/b84d899884e5691835bd49/rest/api/contributors/";

  constructor(private httpClient: HttpClient) { }

  public getContributors() : Observable<any> {
    return this.httpClient.get(this.baseUrl)
     .pipe(map((response : Response) => response));
  }
}
