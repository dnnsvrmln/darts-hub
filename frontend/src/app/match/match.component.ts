import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Apollo, gql } from 'apollo-angular';
import {GraphQLEnumType} from "graphql";
import {Match} from "../model/Match";
import {MatchFunctions} from "../graphqlCalls/MatchFunctions"
import {Router} from "@angular/router";
import {LegFunctions} from "../graphqlCalls/LegFunctions";
import {Leg} from "../model/Leg";


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  constructor(private apollo: Apollo, private router: Router) {
  }

  hideCreateGame: boolean = false;
  hideIngame: boolean = true;

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
