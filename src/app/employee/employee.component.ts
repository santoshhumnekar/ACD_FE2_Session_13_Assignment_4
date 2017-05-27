import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute , Params } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employeeList : any = [

    {Id:'1',Name:'Kyile', Experience : '4', Details:'User Details..'},
    {Id:'2',Name:'Riley', Experience : '2', Details:'User Details..'},
    {Id:'3',Name:'Jenni', Experience : '3', Details:'User Details..'},
    {Id:'4',Name:'Lilly', Experience : '1', Details:'User Details..'},
    {Id:'5',Name:'Monica', Experience : '2', Details:'User Details..'}

  ]

  constructor( private router:Router, private route: ActivatedRoute ) { }

  ngOnInit() {

  }

  onSelect(emp){
        // Absolute Route
      //this.router.navigate(['/employee',emp.Id, emp.Name , emp.Experience]);
       //Relative Route
      this.router.navigate([emp.Id, emp.Name , emp.Experience], {relativeTo: this.route});

  }

}
