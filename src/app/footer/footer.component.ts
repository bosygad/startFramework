import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  location:string ='LOCATION'
  address:string ='2215 John Daniel Drive '
  address2:string ='Clark, MO 65243'
   
  web:string ='AROUND THE WEB'
  freelance:string='ABOUT FREELANCER'
  aboutFreelance:string ='Freelance is a free to use, licensed Bootstrap theme created by Route'
  copyRight:string ='Copyright © Your Website 2021'
}
