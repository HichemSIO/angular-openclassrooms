
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { FaceSnap } from './core/models/face-snap-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!:FaceSnap[];
  

  ngOnInit() {

    
  }
} 