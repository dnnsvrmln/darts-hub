import {Component, OnInit} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import {Apollo} from "apollo-angular";

import {NgForm} from "@angular/forms";
import {MatchModel} from "../model/match/match.model";
import {LegModel} from "../model/match/leg.model";
import {MatchFunctions} from "../graphqlCalls/match/match.functions";
import {LegFunctions} from "../graphqlCalls/match/leg.functions";

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  @Output() newMatchId = new EventEmitter<string>();
  @Output() newLegId = new EventEmitter<string>();
  matchFunctions: MatchFunctions
  legFunctions: LegFunctions

  constructor(private apollo: Apollo) {
    this.matchFunctions = new MatchFunctions(apollo);
    this.legFunctions = new LegFunctions(apollo);
  }

  ngOnInit(): void {
  }

  matchId: string = ""

  async submitForm(form: NgForm) {
    const userString: any = JSON.parse(sessionStorage.getItem("user")!);
    console.log(userString['playerName'])
    // const userName: String = userString[];
    this.matchId = Math.random().toString(16).substr(2, 8).toString()
    const date: Number = Date.now()
    const totalAmount: Number = parseInt(form.value.totalNumber)
    const matchType: String = form.value.matchType
    const isSet: boolean = (form.value.legOrSet == 'set')
    let match = new MatchModel();
    match.matchId = this.matchId;
    match.date = date;
    match.totalAmount = totalAmount;
    match.matchType = matchType;
    match.isSet = isSet;

    this.matchFunctions.createMatch(match);
    this.newMatchId.emit(this.matchId);
    localStorage.setItem("playerTwo", form.value.playerTwo);

    let leg = new LegModel();
    const legId: string = Math.random().toString(16).substr(2, 8).toString()
    const scoreType: String = form.value.scoreType;
    leg.legId = legId;
    leg.scoreType = scoreType;
    this.newLegId.emit(legId);

    await this.legFunctions.createLeg(leg)
    console.log(this.matchId)
    console.log(leg.legId)
    this.legFunctions.addLegToMatch(this.matchId, legId)
  }
}
