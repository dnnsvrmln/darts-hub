import {Apollo, gql} from "apollo-angular";
import {UserModel} from "../auth/user.model";
import {NgForm} from "@angular/forms";

export class TurnFunctions {

  constructor(private apollo: Apollo) { }

  addNewTurn(legId: String, points: number, multiplier: number, player: String) {

    let turnIdentifier: string = Math.random().toString(16).substr(2, 8).toString();
    console.log(legId)
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
          points: points,
          multiplier: multiplier,
          player: player,
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
          legId: legId
        },
      }).subscribe()
  }

}
