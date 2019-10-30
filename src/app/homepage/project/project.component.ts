import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProjserviceService } from 'src/app/projservice.service';
import { Projectclass } from 'src/app/projectclass.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project: Projectclass;
  project1: Projectclass[];
  projid: string;
  Projectdetails: any = [];


  projecthading: string;
  projectdate: string;
  projectintro: string;
  projectintroduction: any;
  projectdescription: any;
  projectdescription2: any;
  projectlink1: any;
  projectlink2: any;
  projectlink3: any;



  constructor(private _router: ActivatedRoute, private _projservice: ProjserviceService,private httpService: HttpClient) { }

  ngOnInit() {
    //this.project = this._projservice.getprojectbyid(this._router.snapshot.params['id']);
    //console.log(this.project.id);

    //this.project1 = this._projservice.getprojects(this._router.snapshot.params['id']);
    //console.log(this.project1[0].id);



    this.projid = this._projservice.getprojectid(this._router.snapshot.paramMap.get('id'));
    console.log(this.projid);


    this.httpService.get('./assets/data/projectlist.json').subscribe(
      Projectdetails => {

        let res= Projectdetails[this.projid];

        this.projecthading = res.projecthading;
        this.projectdate = res["projectdate"];
        this.projectintro = res["projectintro"];
        this.projectintroduction = res["projectintroduction"];
        this.projectdescription = res["projectdescription"];
        this.projectdescription2 = res["projectdescription2"];
        this.projectlink1 = res["projectlink1"];
        this.projectlink2 = res["projectlink2"];
        this.projectlink3 = res["projectlink3"];

      });






  }


}

