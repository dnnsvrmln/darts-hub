import {Component, Input, OnInit} from '@angular/core';
import {TurnFunctions} from "../graphqlCalls/match/turn.functions";
import {Apollo} from "apollo-angular";
import {TurnModel} from "../model/match/turn.model";
import {LegFunctions} from "../graphqlCalls/match/leg.functions";

@Component({
  selector: 'app-leg',
  templateUrl: './leg.component.html',
  styleUrls: ['./leg.component.css']
})
export class LegComponent implements OnInit {
  // public totalPlayerOne = 501;
  // public totalPlayerTwo = 501;
  public dartOnePlayerOne: string | undefined;
  public dartTwoPlayerOne: string | undefined;
  public dartThreePlayerOne: string | undefined;
  public dartOnePlayerTwo: string | undefined;
  public dartTwoPlayerTwo: string | undefined;
  public dartThreePlayerTwo: string | undefined;
  // public turnTotalPlayerOne = 0;
  // public turnTotalPlayerTwo = 0;
  public scorePlayerOne = 0;
  public scorePlayerTwo = 0;

  constructor(private apollo: Apollo) {
    this.turnFunctions = new TurnFunctions(apollo);
    this.legFunctions = new LegFunctions(apollo);
  }

  @Input() legId = '';
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
  turnTotalPlayerOne: number = 0;
  turnTotalPlayerTwo: number = 0;
  pointsOne: any;
  pointsTwo: any;

  throws: number = 0;

  noteScoreOne(points: number, multiplier: number, player: number) {

    if (this.isValidScore(this.score)) {
      const turn: TurnModel = new TurnModel()
      turn.score = points
      turn.multiplier = multiplier
      turn.player = this.players[player]
      if (multiplier == 2 && this.totalPlayerOne - (points * multiplier) == 0) {
        alert(this.players[player] + " has won!")
        this.totalPlayerOne = -(points * multiplier)
        this.legFunctions.finishLeg(this.legId, this.players[player])
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

    } else {
      alert("Please enter a valid score");
    }
  }

  noteScoreTwo(points: number, multiplier: number, player: number) {

    if (this.isValidScore(this.score)) {
      const turn: TurnModel = new TurnModel()
      turn.score = points
      turn.multiplier = multiplier
      turn.player = this.players[player]
      if (multiplier == 2 && this.totalPlayerTwo - (points * multiplier) == 0) {
        alert(this.players[player] + " has won!")
        this.totalPlayerTwo = -(points * multiplier)
        this.legFunctions.finishLeg(this.legId, this.players[player])
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

    } else {
      alert("Please enter a valid score");
    }
  }

  scoreSinglePlayerOne() {
    this.scorePlayerOne = Number((<HTMLInputElement>document.getElementById("score-p1")).value);
    if (this.isValidScore(this.scorePlayerOne)) {
      console.error(String(<HTMLInputElement>document.getElementById("score-p1")));
      if (this.dartOnePlayerOne == undefined) {
        console.log("test")
        this.turnTotalPlayerOne += this.scorePlayerOne;
        this.dartOnePlayerOne = "S" + this.scorePlayerOne;
        this.turnFunctions.addNewTurn(this.legId, this.turnTotalPlayerOne, 1, this.players[0])
      } else if (this.dartTwoPlayerOne == undefined) {
        this.turnTotalPlayerOne += this.scorePlayerOne;
        this.dartTwoPlayerOne = "S" + this.scorePlayerOne;
        this.turnFunctions.addNewTurn(this.legId, this.turnTotalPlayerOne, 1, this.players[0])
      } else if (this.dartThreePlayerOne == undefined) {
        this.turnTotalPlayerOne += this.scorePlayerOne;
        this.dartThreePlayerOne = "S" + this.scorePlayerOne;
      } else {
        alert("Your turn is over");
      }
    } else {
      alert("Please enter a valid score");
    }
  }

  scoreDoublePlayerOne() {
    this.scorePlayerOne = Number((<HTMLInputElement>document.getElementById("score-p1")).value);
    if (this.isValidScore(this.scorePlayerOne)) {
      if (this.dartOnePlayerOne == undefined) {
        this.turnTotalPlayerOne += (2 * this.scorePlayerOne);
        this.dartOnePlayerOne = "D" + this.scorePlayerOne;
      } else if (this.dartTwoPlayerOne == undefined) {
        this.turnTotalPlayerOne += (2 * this.scorePlayerOne);
        this.dartTwoPlayerOne = "D" + this.scorePlayerOne;
      } else if (this.dartThreePlayerOne == undefined) {
        this.turnTotalPlayerOne += (2 * this.scorePlayerOne);
        this.dartThreePlayerOne = "D" + this.scorePlayerOne;
      } else {
        alert("Your turn is over");
      }
      if (this.totalPlayerOne - this.turnTotalPlayerOne == 0) {
        this.totalPlayerOne -= this.turnTotalPlayerOne;
        alert("PlayerModel one has won!")
      }
    } else {
      alert("Please enter a valid score");
    }
  }

  scoreTriplePlayerOne() {
    this.scorePlayerOne = Number((<HTMLInputElement>document.getElementById("score-p1")).value);
    if (this.isValidScore(this.scorePlayerOne) && this.scorePlayerTwo != 25) {
      if (this.dartOnePlayerOne == undefined) {
        this.turnTotalPlayerOne += (3 * this.scorePlayerOne);
        this.dartOnePlayerOne = "T" + this.scorePlayerOne;
      } else if (this.dartTwoPlayerOne == undefined) {
        this.turnTotalPlayerOne += (3 * this.scorePlayerOne);
        this.dartTwoPlayerOne = "T" + this.scorePlayerOne;
      } else if (this.dartThreePlayerOne == undefined) {
        this.turnTotalPlayerOne += (3 * this.scorePlayerOne);
        this.dartThreePlayerOne = "T" + this.scorePlayerOne;
      } else {
        alert("Your turn is over");
      }
    } else {
      alert("Please enter a valid score");
    }
  }

  scoreSinglePlayerTwo() {
    this.scorePlayerTwo = Number((<HTMLInputElement>document.getElementById("score-p2")).value);
    if (this.isValidScore(this.scorePlayerTwo)) {
      if (this.dartOnePlayerTwo == undefined) {
        this.turnTotalPlayerOne += this.scorePlayerTwo;
        this.dartOnePlayerTwo = "S" + this.scorePlayerTwo;
      } else if (this.dartTwoPlayerTwo == undefined) {
        this.turnTotalPlayerOne += this.scorePlayerTwo;
        this.dartTwoPlayerTwo = "S" + this.scorePlayerTwo;
      } else if (this.dartThreePlayerTwo == undefined) {
        this.turnTotalPlayerOne += this.scorePlayerTwo;
        this.dartThreePlayerTwo = "S" + this.scorePlayerTwo;
      } else {
        alert("Your turn is over");
      }
    } else {
      alert("Please enter a valid score");
    }
  }

  scoreDoublePlayerTwo() {
    this.scorePlayerTwo = Number((<HTMLInputElement>document.getElementById("score-p2")).value);
    if (this.isValidScore(this.scorePlayerTwo)) {
      if (this.dartOnePlayerTwo == undefined) {
        this.turnTotalPlayerTwo += (2 * this.scorePlayerTwo);
        this.dartOnePlayerTwo = "D" + this.scorePlayerTwo;
      } else if (this.dartTwoPlayerTwo == undefined) {
        this.turnTotalPlayerTwo += (2 * this.scorePlayerTwo);
        this.dartTwoPlayerTwo = "D" + this.scorePlayerTwo;
      } else if (this.dartThreePlayerTwo == undefined) {
        this.turnTotalPlayerTwo += (2 * this.scorePlayerTwo);
        this.dartThreePlayerTwo = "D" + this.scorePlayerTwo;
      } else {
        alert("Your turn is over");
      }
      if (this.totalPlayerTwo - this.turnTotalPlayerTwo == 0) {
        this.totalPlayerTwo -= this.turnTotalPlayerTwo;
        alert("PlayerModel two has won!")
      }
    } else {
      alert("Please enter a valid score");
    }
  }

  scoreTriplePlayerTwo() {
    this.scorePlayerTwo = Number((<HTMLInputElement>document.getElementById("score-p2")).value);
    if (this.isValidScore(this.scorePlayerTwo) && this.scorePlayerTwo != 25) {
      if (this.dartOnePlayerTwo == undefined) {
        this.turnTotalPlayerTwo += (3 * this.scorePlayerTwo);
        this.dartOnePlayerTwo = "T" + this.scorePlayerTwo;
      } else if (this.dartTwoPlayerTwo == undefined) {
        this.turnTotalPlayerTwo += (3 * this.scorePlayerTwo);
        this.dartTwoPlayerTwo = "T" + this.scorePlayerTwo;
      } else if (this.dartThreePlayerTwo == undefined) {
        this.turnTotalPlayerTwo += (3 * this.scorePlayerTwo);
        this.dartThreePlayerTwo = "T" + this.scorePlayerTwo;
      } else {
        alert("Your turn is over");
      }
    } else {
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
    if (this.totalPlayerOne - this.turnTotalPlayerOne > 1) {
      this.totalPlayerOne -= this.turnTotalPlayerOne;
    }
    this.resetListboxPlayerOne();
    this.turnTotalPlayerOne = 0;
  }

  endTurnPlayerTwo() {
    if (this.totalPlayerTwo - this.turnTotalPlayerTwo > 1) {
      this.totalPlayerTwo -= this.turnTotalPlayerTwo;
    }
    this.resetListboxPlayerTwo();
    this.turnTotalPlayerTwo = 0;
  }
}
