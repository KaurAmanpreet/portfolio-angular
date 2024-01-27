import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [InfoService]
})
export class EducationComponent implements OnInit { 
  educations: any;
  constructor(private infoService: InfoService){}
  
  ngOnInit() {
    this.educations = this.infoService.getEducation();
  }

}
