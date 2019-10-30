import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  projecthading1: string;
  projectdate1: string;
  projectdescription1: string;

  projecthading2: string;
  projectdate2: string;
  projectdescription2: string;

  projecthading3: string;
  projectdate3: string;
  projectdescription3: string;



  Projectdetails: any = [];


  constructor(private httpService: HttpClient, private _router: Router) { }
  viewproj(projid: string){
    console.log(projid);
    this._router.navigate(['/homepage', projid]);

  }


  ngOnInit() {
this.httpService.get('./assets/data/projectlist.json').subscribe(
  Projectdetails => {
    this.Projectdetails = Projectdetails;
   },
  (err: HttpErrorResponse) => {
   console.log (err.message);
  });




}
}
