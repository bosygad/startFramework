import { isNgTemplate } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() darkColor ='dark'
  userName:string ='';
  userAge:null =null
  userEmail:string =''
  userPassword:any =''

}


