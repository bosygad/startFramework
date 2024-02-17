import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  @Input() darkColor:string ='dark'
  srcImg1:string ='../../assets/img/poert1.png'
  srcImg2:string ='../../assets/img/port2.png'
  srcImg3:string ='../../assets/img/port3.png'


}
