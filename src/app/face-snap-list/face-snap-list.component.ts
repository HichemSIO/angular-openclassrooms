import { Component , OnInit} from '@angular/core';
import { interval, tap } from 'rxjs';
import { FaceSnap } from '../core/models/face-snap-model';
import { FaceSnapsService } from '../core/service/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {
  faceSnaps!: FaceSnap[];
  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

  }
 }

