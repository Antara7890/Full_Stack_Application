import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faFacebook }  from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp }  from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  faLinkedin=faLinkedin;
  faFacebook=faFacebook;
  faWhatsapp=faWhatsapp;
  faTwitter=faTwitter;
}
