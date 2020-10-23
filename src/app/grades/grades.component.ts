import { Component, OnInit } from '@angular/core';
import { ScoreComponent } from '../score/score.component';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})


export class GradesComponent implements OnInit {

  Assignments = [
    {
      name: 'Assignment1',
      id: 111
    },
    {
      name: 'Assignment2',
      id: 112
    },
    // {
    //   name: 'Assignment3',
    //   id: 113
    // },
    {
      name: 'Assignment4',
      id: 114
    }
  ];
  
  Students = [
    {
      name: 'Student1',
      id: 221
    },
    {
      name: 'Student2',
      id: 222
    },
    {
      name: 'Student3',
      id: 223
    },
    {
      name: 'Student4',
      id: 224
    }
  ];

  CanvasScores = [
    {
      canvasScore: 54,
      assignment_id: 111,
      student_id: 221
    },
    {
      canvasScore: 78,
      assignment_id: 112,
      student_id: 222
    },
    {
      canvasScore: 98,
      assignment_id: 114,
      student_id: 223
    },
    {
      canvasScore: 22,
      assignment_id: 114,
      student_id: 224
    }
  ];

  EcollegeScores = [
    {
      ecollegeScore: 55,
      assignment_id: 111,
      student_id: 221
    },
    {
      ecollegeScore: 78,
      assignment_id: 112,
      student_id: 222
    },
    {
      ecollegeScore: 99,
      assignment_id: 113,
      student_id: 223
    },
    {
      ecollegeScore: 23,
      assignment_id: 114,
      student_id: 224
    }
  ];

  constructor() { }

  ngOnInit(): void {}

  
}



