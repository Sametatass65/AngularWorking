import { Component, Input } from '@angular/core';
import { Model } from 'src/app/model/model';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  @Input() movie:Model

}
