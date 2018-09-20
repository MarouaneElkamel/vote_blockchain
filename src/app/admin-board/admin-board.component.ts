import {Component, NgZone, OnInit} from '@angular/core';
import {BallotService} from '../../services/ballot-service';
import {Web3Service} from '../../services/services';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent {
  account: any;
  accounts: any;
  status: string;
  listOfProposals: string;
  listOfvoters: string;
  listOfrevoked: string;



  constructor(private _ngZone: NgZone,
              private web3Service: Web3Service,
              private ballotService: BallotService) {
    this.onReady();
  }

  formatInputString = (input) => {

    if (!input) {
      return '';
    }
    const hoaArray = [];
    const inputArray = input.split(',');
    for (let i = 0; i < inputArray.length; i++) {
      hoaArray.push(inputArray[i]);
    }
    return hoaArray;
  };

  onReady = () => {

    // Get the initial account balance so it can be displayed.
    this.web3Service.getAccounts().subscribe(accs => {
      this.accounts = accs;
      this.account = this.accounts[0];

      // This is run from window:load and ZoneJS is not aware of it we
      // need to use _ngZone.run() so that the UI updates on promise resolution
      this._ngZone.run(() => {
        }
      );
    }, err => alert(err))
  };

  setStatus = message => {
    this.status = message;
  };

  setProposals = () => {
    this.setStatus('Initiating proposal names... (please wait)');
    this.ballotService.setProposalNames(this.account, this.formatInputString(this.listOfProposals)).subscribe(() => {
      this.setStatus(' complete proposal names!');
    }, e => this.setStatus('Error proposal names; see log.'))
  }

  getProposals = () => {
    this.setStatus('Initiating proposal names... (please wait)');
    this.ballotService.getProposalNames(this.account).subscribe(value => {
      this.setStatus(' complete proposal names!' + value);
    }, e => this.setStatus('Error proposal names; see log.'))
  }

  setRightToVote = () => {
    this.setStatus('Initiating proposal names... (please wait)');
    this.ballotService.setHaveRightToVote(this.account, this.formatInputString(this.listOfvoters)).subscribe(() => {
      this.setStatus(' have right now');
    }, e => this.setStatus('Error proposal names; see log.'))
  }
  RevokeRightToVote = () => {
    this.setStatus('Initiating proposal names... (please wait)');
    this.ballotService.RevokeRightToVote(this.account, this.formatInputString(this.listOfrevoked)).subscribe(() => {
      this.setStatus(' have right now');
    }, e => this.setStatus('Error proposal names; see log.'))
  }

  startVote = () => {
    this.setStatus('Initiating proposal names... (please wait)');
    this.ballotService.startVote(this.account).subscribe(() => {
      this.setStatus('vote started');
    }, e => this.setStatus('Error proposal names; see log.'))
  }

  endVote = () => {
    this.setStatus('Initiating proposal names... (please wait)');
    this.ballotService.endVote(this.account).subscribe(() => {
      this.setStatus('ended vote');
    }, e => this.setStatus('Error proposal names; see log.'))
  }

  winnerName = () => {
    this.setStatus('Initiating proposal names... (please wait)');
    this.ballotService.winnerName(this.account).subscribe(value => {
      this.setStatus('winneer ' + this.web3Service.web3.toAscii(value));
    }, e => this.setStatus('Error proposal names; see log.'))
  }
}
