import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public employeeID;
  public employeeName;
  public employeeExperience;

  constructor(private rroute: ActivatedRoute) { }

  ngOnInit() {

    /*let Id = this.rroute.snapshot.params['Id'];
    this.employeeID = Id;

    let Name = this.rroute.snapshot.params['Name'];
    this.employeeName = Name;

    let Experience = this.rroute.snapshot.params['Experience'];
    this.employeeExperience = Experience;*/

    this.rroute.params.subscribe((params : Params) => {
      let Id = parseInt(params['Id']);
      this.employeeID = Id;
    })

    this.rroute.params.subscribe((params : Params) => {
      let Name = params['Name'];
      this.employeeName = Name ;
    })

    this.rroute.params.subscribe((params : Params) => {
      let Experience = parseInt(params['Experience']);
      this.employeeExperience = Experience;
    })

  }


}
