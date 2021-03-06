import {Component, HostListener, NgZone} from '@angular/core';

import {Web3Service} from '../services/services'

import {canBeNumber} from '../util/validation';
import {BallotService} from '../services/ballot-service';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  // TODO add proper types these variables
  account: any;
  accounts: any;


  sendingAmount: number;
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
    this.ballotService.vote(this.account, '0x03').subscribe(() => {
      this.setStatus('voted');
    }, e => this.setStatus('Error proposal names; see log.'))
  }


  winnerName = () => {
    this.setStatus('Initiating proposal names... (please wait)');
    this.ballotService.winnerName(this.account).subscribe(value => {
      this.setStatus('winneer ' + value);
    }, e => this.setStatus('Error proposal names; see log.'))
  }


}
