import { Component, OnInit } from '@angular/core';

interface Employee {
  upline: string;
  name: string;
  position: string;
  level: number;
}

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myDownline = [
    {
      upline : null,
      name : "Me",
      position : "CEO",
      level   : 0
    },
    {
      upline : "Me",
      name : "John",
      position : "Project Manager",
      level   : 1
    },
    {
      upline : "John",
      name : "Reese",
      position : "Assistant Manager",
      level   : 2
    },
    {
      upline : "Reese",
      name : "Kyle",
      position : "Developer",
      level   : 3
    },
    {
      upline : "Me",
      name : "Sarah",
      position : "Secretary",
      level   : 1
    },
    {
      upline : "Sarah",
      name : "Layla",
      position : "Writer",
      level   : 2
    },
    {
      upline : "Sarah",
      name : "Eddie",
      position : "Reporter",
      level   : 2
    },
  ];


  // emp
  employees: Employee[] = [
    {
      upline : "Me",
      name : "John",
      position : "Project Manager",
      level   : 1
    },
    {
      upline : "John",
      name : "Reese",
      position : "Assistant Manager",
      level   : 2
    },
    {
      upline : "Reese",
      name : "Kyle",
      position : "Developer",
      level   : 3
    },
    {
      upline : "Me",
      name : "Sarah",
      position : "Secretary",
      level   : 1
    },
    {
      upline : "Sarah",
      name : "Layla",
      position : "Writer",
      level   : 2
    },
    {
      upline : "Sarah",
      name : "Eddie",
      position : "Reporter",
      level   : 2
    },
  ];

}
