import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  Work: string;
  loaction: string;
  email: string;
  phone: string;

  languages: any = [];
  skills: any = [];
  workexperience: any = [];
  education: any = [];
  resume: any = [];


  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get('./assets/data/resume.json').subscribe(
      resume => {
        this.resume = resume;

      });
    this.httpService.get('./assets/data/languages.json').subscribe(
      languages => {
          this.languages = languages;

        });
    this.httpService.get('./assets/data/skills.json').subscribe(
      skills => {
            this.skills = skills;

          });
    this.httpService.get('./assets/data/workexperience.json').subscribe(
      workexperience => {
              this.workexperience = workexperience;

            });
    this.httpService.get('./assets/data/education.json').subscribe(
              education => {
                      this.education = education;

                    });

  }

}
