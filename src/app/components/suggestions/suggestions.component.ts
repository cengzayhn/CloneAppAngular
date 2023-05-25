import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit{

  constructor(public authService:AuthService) {
  }
  ngOnInit() {
  }

}
