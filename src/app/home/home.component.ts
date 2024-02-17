import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // @Input() darkColor =''
  imgSrc:string ='assets/img/avataaars.svg'
title:string ='START FRAMEWORK'
titleJob:string ='Graphic Artist -'
titleJob2:string ='Web Designer -'
titleJob3:string ='Illustrator'

}
