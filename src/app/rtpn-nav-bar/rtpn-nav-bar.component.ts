import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'rtpn-nav-bar',
  templateUrl: 'rtpn-nav-bar.component.html',
  styleUrls: ['rtpn-nav-bar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class RtpnNavBarComponent {}
