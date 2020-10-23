import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() assignmnentId: number;
  @Input() stdId: number;
  @Input() CScores: {canvasScore: number; assignment_id: number; student_id: number;}[]
  @Input() eScores: {ecollegeScore: number; assignment_id: number; student_id: number;}[]
  @Input() parentElement: HTMLElement;
  public cscore: number;
  public escore: number;
  
  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < this.CScores.length; i++) {
      if (this.CScores[i].assignment_id === this.assignmnentId && this.CScores[i].student_id === this.stdId) {
        this.cscore = this.CScores[i].canvasScore;
      }
    }
    for (let i = 0; i < this.eScores.length; i++) {
      if (this.eScores[i].assignment_id === this.assignmnentId && this.eScores[i].student_id === this.stdId) {
        this.escore = this.eScores[i].ecollegeScore;
      }
    }
    if (this.escore !== this.cscore) {
      this.parentElement.style.backgroundColor = 'red';
    }
  }
}
