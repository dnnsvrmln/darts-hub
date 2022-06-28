import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Apollo, gql} from "apollo-angular";

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {

  @Input() legId = '';

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    const userString: any = JSON.parse(sessionStorage.getItem("user")!);
    this.players.push(userString['playerName'])
    console.log(localStorage.getItem("playerTwo"))
    this.players.push(localStorage.getItem("playerTwo")!)
  }
  addNewTurn(form: NgForm) {
    console.log(this.legId)

    let turnIdentifier: string = Math.random().toString(16).substr(2, 8).toString();
    this.apollo
      .mutate({
        mutation: gql`
        mutation CreateNewTurn($turnId: String, $points: Int, $multiplier: Int, $player: String) {
          createNewTurn(turnId: $turnId, points:$points, multiplier: $multiplier, player:$player){
            turnId
          }
        }
      `,
        variables: {
          turnId: turnIdentifier,
          points: parseInt(form.value.points),
          multiplier: parseInt(form.value.multiplier),
          player: this.players[0],
        },
      }).subscribe()

    this.apollo
      .mutate({
        mutation: gql`
        mutation AddTurnToLeg($legId: String, $turnId: String){
          addTurnToLeg(legId: $legId, turnId: $turnId){
            legId
          }
        }
      `,
        variables: {
          turnId: turnIdentifier,
          legId: this.legId
        },
      }).subscribe()
  }
  turnsBeforeSwitch: number = 3;
  players: Array<String> =[]
  switchCurrentPlayer(){
    this.turnsBeforeSwitch--
    console.log(this.turnsBeforeSwitch)
    if(this.turnsBeforeSwitch == 0){
      this.arraymove(this.players, 0, 1)
      this.turnsBeforeSwitch = 3
    }
    console.log(this.players[0])
    return this.players[0]
  }

  arraymove(arr: Array<String>, fromIndex:number, toIndex:number) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }

}
