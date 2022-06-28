import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Apollo, gql } from 'apollo-angular';
import {GraphQLEnumType} from "graphql";
import {Match} from "../model/Match";
import {MatchFunctions} from "../graphqlCalls/MatchFunctions"
import {Router} from "@angular/router";
import {LegFunctions} from "../graphqlCalls/LegFunctions";
import {Leg} from "../model/Leg";
import {CreateGameComponent} from "../create-game/create-game.component";
import {LegComponent} from "../leg/leg.component";


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  hideCreateGame: boolean = false;
  hideIngame: boolean[] = [true, true, true];

  constructor() {}

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
