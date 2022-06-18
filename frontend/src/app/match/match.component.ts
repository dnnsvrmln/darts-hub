import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  submitForm(form: NgForm) {
      alert(JSON.stringify(form.value))

  }
}
