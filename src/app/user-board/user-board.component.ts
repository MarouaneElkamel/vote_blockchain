import {Component, NgZone, OnInit} from '@angular/core';
import {BallotService} from '../../services/ballot-service';
import {canBeNumber} from '../../util/validation';
import {Web3Service} from '../../services/services';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css']
})
export class UserBoardComponent {

  // TODO add proper types these variables
  account: any;
  accounts: any;


  recipientAddress: string;
  status: string;
  canBeNumber = canBeNumber;

  constructor(
    private _ngZone: NgZone,
    private web3Service: Web3Service,
    private ballotService: BallotService
  ) {
    this.onReady();
  }

  onReady = () => {

    // Get the initial account balance so it can be displayed.
    this.web3Service.getAccounts().subscribe(accs => {
      this.accounts = accs;
      this.account = this.accounts[0];

      // This is run from window:load and ZoneJS is not aware of it we
      // need to use _ngZone.run() so that the UI updates on promise resolution
      this._ngZone.run(() =>
        this.refreshBalance()
      );
    }, err => alert(err))
  };

  refreshBalance = () => {

  };

  setStatus = message => {
    this.status = message;
  };


  vote = () => {
    this.setStatus('Initiating blockchain call... (please wait)');
    this.ballotService.vote(this.account, this.recipientAddress).subscribe(() => {
      this.setStatus('voted');
    }, e => this.setStatus('Error proposal names; see log.'))
  }


  winnerName = () => {
    this.setStatus('Initiating blockchain call... (please wait)');
    this.ballotService.winnerName(this.account).subscribe(value => {
      this.setStatus('The winner is ' + this.web3Service.web3.toAscii(value));
    }, e => this.setStatus('Error in finding winner name'))
  }
}
