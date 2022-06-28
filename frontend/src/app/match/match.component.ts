import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import {Router} from "@angular/router";



@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  constructor(private apollo: Apollo, private router: Router) {
  }

  hideCreateGame: boolean = false;
  hideIngame: boolean[] = [true, true, true];

  ngOnInit(): void {

  }

  matchId: string = ""
  addMatchId(matchId: string) {
    this.matchId = matchId;
    if(this.matchId != ""){
      this.hideIngame[0] = false;
      this.hideCreateGame = true;
    }
  }


  legId: string[] = []
  addLegId(legId: string[]) {
    this.legId = legId;
  }

}
