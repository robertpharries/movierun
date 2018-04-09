import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

@Injectable()
export class FilesService {
  private url_listAll = 'http://localhost:3000/list';

  constructor(private http: HttpClient) 
  { }

  get_listAllFiles(): Observable<String[]> {
    console.log("in service");
    console.log(this.http.get<String[]>(this.url_listAll));

    return this.http.get<String[]>(this.url_listAll);
  }
}
