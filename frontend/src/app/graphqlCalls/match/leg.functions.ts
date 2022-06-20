import {Apollo, gql} from "apollo-angular";
import {LegModel} from "../../model/match/leg.model";

export class LegFunctions {

  constructor(private apollo: Apollo) { }

  createLeg(leg: LegModel) {
    this.apollo
      .mutate({
        mutation: gql`
        mutation CreateNewLeg($legId: String, $scoreType: String){
          createNewLeg(legId: $legId, scoreType:$scoreType){
            legId
          }
        }
      `,
        variables: {
          legId: leg.legId,
          scoreType: leg.scoreType
        },
      })
      .subscribe();
  }

  addLegToMatch(legId:String, matchId: String){
    this.apollo
      .mutate({
        mutation: gql`
        mutation AddLegToMatch($matchId: String, $legId: String){
          addLegToMatch(matchId: $matchId, legId: $legId){
            matchId
          }
        }
      `,
        variables: {
          matchId: matchId,
          legId: legId
        },
      })
      .subscribe();
  }

  finishLeg(legId:String, winner: String){
    console.log(winner)
    this.apollo
      .mutate({
        mutation: gql`
        mutation FinishLeg($legId: String, $winner: String){
          finishLeg(legId: $legId, winner: $winner){
            legId
          }
        }
      `,
        variables: {
          legId: legId,
          winner: winner
        },
      })
      .subscribe();
  }

}
