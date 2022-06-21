import {Apollo, gql} from "apollo-angular";
import {PlayerModel} from "../../model/player/player.model";

export class PlayerFunctions {

  constructor(private apollo: Apollo) { }

  createPlayer(player: PlayerModel) {
    this.apollo
      .mutate({
        mutation: gql`
        mutation CreateNewPlayer($playerUID: String, $playerName: String, $email: String){
          createNewPlayer(playerUID: $playerUID, playerName: $playerName, email: $email){
            playerUID
          }
        }
      `,
        variables: {
          playerUID: player.playerUID,
          playerName: player.playerName,
          email: player.email,
        },
      })
      .subscribe();
  }
}
