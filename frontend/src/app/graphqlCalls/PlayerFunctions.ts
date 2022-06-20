import {Apollo, gql} from "apollo-angular";
import {UserModel} from "../auth/user.model";

export class PlayerFunctions {

  constructor(private apollo: Apollo) { }

  createPlayer(player: UserModel) {
    this.apollo
      .mutate({
        mutation: gql`
        mutation CreateNewPlayer($playerName: String, $email: String, $localId: String){
          createNewPlayer(playerName:$playerName, email:$email, localId: $localId){
            playerName
          }
        }
      `,
        variables: {
          playerName: player.playerName,
          email: player.email,
          localId: player.localId
        },
      })
      .subscribe();
  }

}
