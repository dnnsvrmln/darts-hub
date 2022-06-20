import {Apollo, gql} from "apollo-angular";
import {Leg} from "../model/Leg";

export class LegFunctions {

  constructor(private apollo: Apollo) { }

  createLeg(leg: Leg) {
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

}
