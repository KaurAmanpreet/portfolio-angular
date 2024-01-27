import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  bannerData = {
    name : "Anthony Barnett",
    designated: "Web Developer, Graphic Designer,  Photographer",
    images : {
      banner : '../assets/images/cc-bg-1.jpg',
      profile : '../assets/images/anthony.jpg'
    }
  };

  aboutData = {
    about : "Creative CV is a HTML resume template for professionals. Built with Bootstrap 4, Now UI Kit and FontAwesome, this modern and responsive design template is perfect to showcase your portfolio, skills and experience.",
    basic_info: {
      Age: "24",
      Email: "anthony@company.com",
      Phone: "+1718-111-0011",
      Address: "140, City Center, New York, U.S.A",
      Language: "English, German, French"
    }
  };
  professionalSkill = [
    {skill: 'html', percentage:'80%'},
    {skill: 'css', percentage:'85%'},
    {skill: 'JavaScript', percentage:'60%'},
    {skill: 'SASS', percentage:'60%'},
    {skill: 'Bootstrap', percentage:'75%'},
    {skill: 'Photoshop', percentage:'70%'}
  ]
}
