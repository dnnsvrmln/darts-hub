import {Apollo, gql} from "apollo-angular";
import {NgForm} from "@angular/forms";
import {Match} from "../model/Match";

export class MatchFunctions {

  constructor(private apollo: Apollo) { }

  createMatch(match: Match) {
    console.log("test")
    this.apollo
      .mutate({
        mutation: gql`
        mutation CreateNewMatch($matchId: String, $date: Date, $totalAmount: Int, $matchType: String, $isSet: Boolean){
          createNewMatch(matchId:$matchId, date:$date, totalAmount: $totalAmount, matchType: $matchType, isSet: $isSet){
            matchId
          }
        }
      `,
        variables: {
          matchId: match.matchId,
          date: match.date,
          totalAmount: match.totalAmount,
          matchType: match.matchType,
          isSet: match.isSet,
        },
      })
      .subscribe();
  }

}
