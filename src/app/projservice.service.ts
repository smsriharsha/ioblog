import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projectclass } from './projectclass.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjserviceService {

  constructor(private httpService: HttpClient) { }
private porjectslist: Projectclass[];
private porject: Projectclass;

/*
getPosts(): Observable<iposts[]> {
  return this.http
      .get(this._postsURL)
      .map((response: Response) => {
          return <iposts[]>response.json();
      })
      .catch(this.handleError);
}

return this.http.get("/api/users").map((res: Response) => res.json())*/

    getprojects(id: string): Projectclass[] {
    this.httpService.get('./assets/data/projectlist.json').subscribe(
      porjectslist => {
        const id1 = +id;
        this.porjectslist = porjectslist[id1];
      });
    return this.porjectslist;

  }
  getprojectbyid(id: string): Projectclass{
    this.httpService.get('./assets/data/projectlist.json').subscribe(
      porjectslist => {
        this.porject = this.porjectslist.find(e => e.id === id);
      });

    return this.porject;


  }

  getprojectid(id: string): string{
    return id;  }

  addproject(){}
  updateproject(){}
}
