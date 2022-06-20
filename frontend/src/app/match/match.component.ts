import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  hideCreateGame: boolean = false;
  hideIngame: boolean = true;

  constructor() {}

  ngOnInit(): void {

  }

  matchId: string = ""
  addMatchId(matchId: string) {
    this.matchId = matchId;
    if(this.matchId != ""){
      this.hideIngame = false;
      this.hideCreateGame = true;
    }
  }

  legId: string = ""
  addLegId(legId: string) {
    this.legId = legId;
  }
}
