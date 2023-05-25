import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css']
})
export class InfoSectionComponent implements OnInit{
  constructor(public authService:AuthService) {
  }
  ngOnInit() {
  }
}
