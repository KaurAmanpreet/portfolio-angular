import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() bannerData;

  constructor() { }

  ngOnInit(): void {
  }

}
