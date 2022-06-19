import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-leg',
  templateUrl: './leg.component.html',
  styleUrls: ['./leg.component.css']
})
export class LegComponent implements OnInit {
  public totalPlayerOne = 501;
  public totalPlayerTwo = 501;
  public dartOnePlayerOne : string | undefined;
  public dartTwoPlayerOne : string | undefined;
  public dartThreePlayerOne : string | undefined;
  public dartOnePlayerTwo : string | undefined;
  public dartTwoPlayerTwo : string | undefined;
  public dartThreePlayerTwo : string | undefined;
  public turnTotalPlayerOne = 0;
  public turnTotalPlayerTwo = 0;
  public scorePlayerOne = 0;
  public scorePlayerTwo = 0;

  constructor() { }

  ngOnInit(): void {
  }

  //TODO move logic to backend

  isValidScore(score: number) {
    if( score !=undefined && (score<=20 && score>=0) || score==25)
    {
      return true;
    }
    return false;
  }

  scoreSinglePlayerOne() {
    this.scorePlayerOne = Number((<HTMLInputElement>document.getElementById("score-p1")).value);
    if(this.isValidScore(this.scorePlayerOne))
    {
      console.error(String(<HTMLInputElement>document.getElementById("score-p1")));
      if(this.dartOnePlayerOne==undefined) {
        this.turnTotalPlayerOne += this.scorePlayerOne;
        this.dartOnePlayerOne = "S" + this.scorePlayerOne;
      } else if (this.dartTwoPlayerOne==undefined) {
        this.turnTotalPlayerOne += this.scorePlayerOne;
        this.dartTwoPlayerOne = "S" + this.scorePlayerOne;
      } else if (this.dartThreePlayerOne==undefined) {
        this.turnTotalPlayerOne += this.scorePlayerOne;
        this.dartThreePlayerOne = "S" + this.scorePlayerOne;
      } else {
        alert("Your turn is over");
      }
    } else
    {
      alert("Please enter a valid score");
    }
  }

  scoreDoublePlayerOne() {
    this.scorePlayerOne = Number((<HTMLInputElement>document.getElementById("score-p1")).value);
    if(this.isValidScore(this.scorePlayerOne))
    {
      if(this.dartOnePlayerOne==undefined) {
        this.turnTotalPlayerOne += (2 * this.scorePlayerOne);
        this.dartOnePlayerOne = "D" + this.scorePlayerOne;
      } else if (this.dartTwoPlayerOne==undefined) {
        this.turnTotalPlayerOne += (2 * this.scorePlayerOne);
        this.dartTwoPlayerOne = "D" + this.scorePlayerOne;
      } else if (this.dartThreePlayerOne==undefined) {
        this.turnTotalPlayerOne += (2 * this.scorePlayerOne);
        this.dartThreePlayerOne = "D" + this.scorePlayerOne;
      } else {
        alert("Your turn is over");
      }
      if (this.totalPlayerOne-this.turnTotalPlayerOne==0)
      {
        this.totalPlayerOne -= this.turnTotalPlayerOne;
        alert("Player one has won!")
      }
    } else
    {
      alert("Please enter a valid score");
    }
  }

  scoreTriplePlayerOne() {
    this.scorePlayerOne = Number((<HTMLInputElement>document.getElementById("score-p1")).value);
    if(this.isValidScore(this.scorePlayerOne)&&this.scorePlayerTwo!=25)
    {
      if(this.dartOnePlayerOne==undefined) {
        this.turnTotalPlayerOne += (3 * this.scorePlayerOne);
        this.dartOnePlayerOne = "T" + this.scorePlayerOne;
      } else if (this.dartTwoPlayerOne==undefined) {
        this.turnTotalPlayerOne += (3 * this.scorePlayerOne);
        this.dartTwoPlayerOne = "T" + this.scorePlayerOne;
      } else if (this.dartThreePlayerOne==undefined) {
        this.turnTotalPlayerOne += (3 * this.scorePlayerOne);
        this.dartThreePlayerOne = "T" + this.scorePlayerOne;
      } else {
        alert("Your turn is over");
      }
    } else
    {
      alert("Please enter a valid score");
    }
  }

  scoreSinglePlayerTwo() {
    this.scorePlayerTwo = Number((<HTMLInputElement>document.getElementById("score-p2")).value);
    if(this.isValidScore(this.scorePlayerTwo))
    {
      if(this.dartOnePlayerTwo==undefined) {
        this.turnTotalPlayerOne += this.scorePlayerTwo;
        this.dartOnePlayerTwo = "S" + this.scorePlayerTwo;
      } else if (this.dartTwoPlayerTwo==undefined) {
        this.turnTotalPlayerOne += this.scorePlayerTwo;
        this.dartTwoPlayerTwo = "S" + this.scorePlayerTwo;
      } else if (this.dartThreePlayerTwo==undefined) {
        this.turnTotalPlayerOne += this.scorePlayerTwo;
        this.dartThreePlayerTwo = "S" + this.scorePlayerTwo;
      } else {
        alert("Your turn is over");
      }
    } else
    {
      alert("Please enter a valid score");
    }
  }

  scoreDoublePlayerTwo() {
    this.scorePlayerTwo = Number((<HTMLInputElement>document.getElementById("score-p2")).value);
    if(this.isValidScore(this.scorePlayerTwo))
    {
      if(this.dartOnePlayerTwo==undefined) {
        this.turnTotalPlayerTwo += (2 * this.scorePlayerTwo);
        this.dartOnePlayerTwo = "D" + this.scorePlayerTwo;
      } else if (this.dartTwoPlayerTwo==undefined) {
        this.turnTotalPlayerTwo += (2 * this.scorePlayerTwo);
        this.dartTwoPlayerTwo = "D" + this.scorePlayerTwo;
      } else if (this.dartThreePlayerTwo==undefined) {
        this.turnTotalPlayerTwo += (2 * this.scorePlayerTwo);
        this.dartThreePlayerTwo = "D" + this.scorePlayerTwo;
      } else {
        alert("Your turn is over");
      }
      if (this.totalPlayerTwo-this.turnTotalPlayerTwo==0)
      {
        this.totalPlayerTwo -= this.turnTotalPlayerTwo;
        alert("Player two has won!")
      }
    } else
    {
      alert("Please enter a valid score");
    }
  }

  scoreTriplePlayerTwo() {
    this.scorePlayerTwo = Number((<HTMLInputElement>document.getElementById("score-p2")).value);
    if(this.isValidScore(this.scorePlayerTwo)&&this.scorePlayerTwo!=25)
    {
      if(this.dartOnePlayerTwo==undefined) {
        this.turnTotalPlayerTwo += (3 * this.scorePlayerTwo);
        this.dartOnePlayerTwo = "T" + this.scorePlayerTwo;
      } else if (this.dartTwoPlayerTwo==undefined) {
        this.turnTotalPlayerTwo += (3 * this.scorePlayerTwo);
        this.dartTwoPlayerTwo = "T" + this.scorePlayerTwo;
      } else if (this.dartThreePlayerTwo==undefined) {
        this.turnTotalPlayerTwo += (3 * this.scorePlayerTwo);
        this.dartThreePlayerTwo = "T" + this.scorePlayerTwo;
      } else {
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
