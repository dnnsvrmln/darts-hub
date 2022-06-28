import {Component, Input, OnInit, Output} from '@angular/core';
import {Apollo} from "apollo-angular";
import {TurnFunctions} from "../../graphqlCalls/match/turn.functions";
import {LegFunctions} from "../../graphqlCalls/match/leg.functions";
import {TurnModel} from "../../model/match/turn.model";


@Component({
  selector: 'app-leg',
  templateUrl: './leg.component.html',
  styleUrls: ['./leg.component.css']
})
export class LegComponent implements OnInit {
  // public totalPlayerOne = 501;
  // public totalPlayerTwo = 501;
  public dartOnePlayerOne : string | undefined;
  public dartTwoPlayerOne : string | undefined;
  public dartThreePlayerOne : string | undefined;
  public dartOnePlayerTwo : string | undefined;
  public dartTwoPlayerTwo : string | undefined;
  public dartThreePlayerTwo : string | undefined;
  // public turnTotalPlayerOne = 0;
  // public turnTotalPlayerTwo = 0;
  public scorePlayerOne = 0;
  public scorePlayerTwo = 0;

  constructor(private apollo: Apollo) {
    this.turnFunctions = new TurnFunctions(apollo);
    this.legFunctions = new LegFunctions(apollo);
  }

  @Input() legId = '';
  @Output() winners = [];
  turnFunctions: TurnFunctions;
  legFunctions: LegFunctions;

  ngOnInit(): void {
    const userString: any = JSON.parse(sessionStorage.getItem("user")!);
    this.players.push(userString['playerName'])
    this.players.push(localStorage.getItem("playerTwo")!)
  }
  players: Array<String> = []

  isValidScore(score: number) {
    return score != undefined && (score <= 20 && score >= 0) || score == 25;

  }
  score = 0;
  darts: TurnModel[] = [];
  totalPlayerOne = 501;
  totalPlayerTwo = 501;
  turnTotalPlayerOne:number = 0;
  turnTotalPlayerTwo:number = 0;
  pointsOne: any;
  pointsTwo: any;

  resetScore(){
    this.score = 0
    this.darts = []
    this.totalPlayerOne = 501;
    this.totalPlayerTwo = 501;
    this.turnTotalPlayerOne = 0;
    this.turnTotalPlayerTwo = 0;
  }


  throws:number = 0;
  noteScoreOne(points: number, multiplier: number, player: number){

    if (this.isValidScore(this.score)) {
      const turn: TurnModel = new TurnModel()
      turn.createTurn(points, multiplier, this.players[player])
      if (multiplier == 2 && this.totalPlayerOne - (points * multiplier) == 0) {
        alert(this.players[player] + " has won!")
        this.totalPlayerOne = -(points * multiplier)
        this.legFunctions.finishLeg(this.legId, this.players[player])
        this.resetScore()
      } else if (this.throws != 3) {
        if (this.totalPlayerOne - (points * multiplier) < 2) {
          if (this.totalPlayerOne - (points * multiplier) < 1) {
            console.log(this.totalPlayerOne - (points * multiplier))
            return
          }
          return;
        }
        this.darts.push(turn)
        this.turnTotalPlayerOne += (points * multiplier);
        this.totalPlayerOne = this.totalPlayerOne - (points * multiplier);
        this.turnFunctions.addNewTurn(this.legId, this.turnTotalPlayerOne, 1, this.players[player])
        this.throws++
      } else {
        this.throws = 0;
        alert("Your turn is over");
      }

    } else
    {
      alert("Please enter a valid score");
    }
  }

  noteScoreTwo(points: number, multiplier: number, player: number){

    if (this.isValidScore(this.score)) {
      const turn: TurnModel = new TurnModel()
      turn.createTurn(points, multiplier, this.players[player])
      if (multiplier == 2 && this.totalPlayerTwo - (points * multiplier) == 0) {
        alert(this.players[player] + " has won!")
        this.totalPlayerTwo = -(points * multiplier)
        this.legFunctions.finishLeg(this.legId, this.players[player])
        this.resetScore()
      } else if (this.throws != 3) {
        if (this.totalPlayerTwo - (points * multiplier) < 2) {
          if (this.totalPlayerTwo - (points * multiplier) < 1) {
            console.log(this.totalPlayerTwo - (points * multiplier))
            return
          }
          return;
        }
        this.darts.push(turn)
        this.turnTotalPlayerTwo += (points * multiplier);
        this.totalPlayerTwo = this.totalPlayerTwo - (points * multiplier);
        this.turnFunctions.addNewTurn(this.legId, this.turnTotalPlayerTwo, 1, this.players[player])
        this.throws++
      } else {
        this.throws = 0;
        alert("Your turn is over");
      }

    } else
    {
      alert("Please enter a valid score");
    }
  }

  resetListboxPlayerOne() {
    this.dartOnePlayerOne = undefined;
    this.dartTwoPlayerOne = undefined;
    this.dartThreePlayerOne = undefined;
  }

  resetListboxPlayerTwo() {
    this.dartOnePlayerTwo = undefined;
    this.dartTwoPlayerTwo = undefined;
    this.dartThreePlayerTwo = undefined;
  }

  endTurnPlayerOne() {
    if (this.totalPlayerOne-this.turnTotalPlayerOne>1) {
    this.totalPlayerOne -= this.turnTotalPlayerOne;
    }
    this.resetListboxPlayerOne();
    this.turnTotalPlayerOne = 0;
  }

  endTurnPlayerTwo() {
    if (this.totalPlayerTwo-this.turnTotalPlayerTwo>1) {
      this.totalPlayerTwo -= this.turnTotalPlayerTwo;
    }
    this.resetListboxPlayerTwo();
    this.turnTotalPlayerTwo = 0;
  }
}
