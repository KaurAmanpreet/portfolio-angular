import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [InfoService]
})
export class ExperienceComponent implements OnInit {
  experiences: any;
  constructor( private infoService: InfoService){}

  ngOnInit() {
    this.experiences = this.infoService.getExperience();
  }
}
