import { Component, OnInit, Input, NgModule} from '@angular/core';


@Component({
  selector: 'app-professional-skills',
  templateUrl: './professional-skills.component.html',
  styleUrls: ['./professional-skills.component.css']
})
export class ProfessionalSkillsComponent implements OnInit {
  @Input() professionalSkill;

  constructor() { }

  ngOnInit(): void {
  }

}
