import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {Web3Service} from './web3.service'

const ballotArtifacts = require('../../build/contracts/Ballot.json');
const contract = require('truffle-contract');

@Injectable()
export class BallotService {

  Ballot = contract(ballotArtifacts);

  constructor(
    private web3Ser: Web3Service,
  ) {
    // Bootstrap the Ballot abstraction for Use
    this.Ballot.setProvider(web3Ser.web3.currentProvider);
  }


  setProposalNames(from, proposals): Observable<any> {
    let meta;
    return Observable.create(observer => {
      this.Ballot
        .deployed()
        .then(instance => {
          meta = instance;
          return meta.setProposalNames(
            proposals, {
              from: from
            }
          );
        })
        .then(() => {
          observer.next()
          observer.next()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })

  }

  getProposalNames(account): Observable<number> {
    let meta;

    return Observable.create(observer => {
      this.Ballot
        .deployed()
        .then(instance => {
          meta = instance;
          return meta.getProposalNames.call({
            from: account
          });
        })
        .then(value => {
          observer.next(value)
          observer.complete()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })
  }

  setHaveRightToVote(from, haveRightToVote): Observable<any> {
    let meta;
    return Observable.create(observer => {
      this.Ballot
        .deployed()
        .then(instance => {
          meta = instance;
          return meta.setHaveRightToVote(
            haveRightToVote, {
              from: from
            }
          );
        })
        .then(() => {
          observer.next()
          observer.next()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })

  }

  RevokeRightToVote(from, haveRightToVote): Observable<any> {
    let meta;
    return Observable.create(observer => {
      this.Ballot
        .deployed()
        .then(instance => {
          meta = instance;
          return meta.RevokeRightToVote(
            haveRightToVote, {
              from: from
            }
          );
        })
        .then(() => {
          observer.next()
          observer.next()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })

  }

  vote(from, vote): Observable<any> {
    let meta;
    return Observable.create(observer => {
      this.Ballot
        .deployed()
        .then(instance => {
          meta = instance;
          return meta.vote(
            vote, {
              from: from
            }
          );
        })
        .then(() => {
          observer.next()
          observer.next()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })

  }

  winnerName(from): Observable<any> {
    let meta;

    return Observable.create(observer => {
      this.Ballot
        .deployed()
        .then(instance => {
          meta = instance;
          return meta.winnerName.call({
            from: from
          });
        })
        .then(value => {
          observer.next(value)
          observer.complete()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })

  }

  startVote(from): Observable<any> {
    let meta;
    return Observable.create(observer => {
      this.Ballot
        .deployed()
        .then(instance => {
          meta = instance;
          return meta.startVote(
            {
              from: from
            }
          );
        })
        .then(() => {
          observer.next()
          observer.next()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })

  }

  endVote(from): Observable<any> {
    let meta;
    return Observable.create(observer => {
      this.Ballot
        .deployed()
        .then(instance => {
          meta = instance;
          return meta.EndVote(
            {
              from: from
            }
          );
        })
        .then(() => {
          observer.next()
          observer.next()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })

  }


}
