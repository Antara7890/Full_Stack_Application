import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faFacebook }  from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp }  from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HealthCare';
  faBars=faBars;
  faMagnifyingGlass=faMagnifyingGlass;
  faLinkedin=faLinkedin;
  faFacebook=faFacebook;
  faWhatsapp=faWhatsapp;
  faTwitter=faTwitter;
  faCopyright=faCopyright;
  faInstagram=faInstagram;
}
