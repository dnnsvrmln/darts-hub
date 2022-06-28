import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Match} from "../model/Match";
import {Leg} from "../model/Leg";
import {MatchFunctions} from "../graphqlCalls/MatchFunctions";
import {LegFunctions} from "../graphqlCalls/LegFunctions";
import {Apollo} from "apollo-angular";
import {Router} from "@angular/router";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})


export class CreateGameComponent implements OnInit {

  @Output() newMatchId = new EventEmitter<string>();
  @Output() newLegId = new EventEmitter<string[]>();
  matchFunctions: MatchFunctions
  legFunctions: LegFunctions
  constructor(private apollo: Apollo, private router: Router) {
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
    match.createMatch(this.matchId, date, matchType,totalAmount, isSet)

    this.matchFunctions.createMatch(match);
    this.newMatchId.emit(this.matchId);
    localStorage.setItem("playerTwo", form.value.playerTwo);
    let legIds: string[] = []
    for(var x = 0; x < totalAmount; x++) {

      const legId: string = Math.random().toString(16).substr(2, 8).toString()
      const scoreType: String = form.value.scoreType;
      let leg = new Leg();
      leg.createLeg(legId, scoreType)

      legIds.push(legId)

      await this.legFunctions.createLeg(leg)
      console.log("legId "+leg.legId)
      this.legFunctions.addLegToMatch(this.matchId, legId)
    }

    this.newLegId.emit(legIds);
  }
}
