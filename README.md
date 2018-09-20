# vote_blockchain



- This project aims to vote using a smart contract on the blockchain.
- In vote_blockchain_registration/Docs (the other repo) folder there is a demo video of the project as well as a detailed pdf report(the projects work together).


### Part 1

1. `git clone https://github.com/MarouaneElkamel/vote_blockchain.git`
2. `cd angular-truffle-starter-dapp`
3. `npm install`

### Part 2
For the second part, you're going to need a working copy of [angular-cli](https://github.com/angular/angular-cli) (aka. `ng`) installed in your environment (`npm install -g @angular/cli`). And if you're new, install [ganache-cli](https://github.com/trufflesuite/ganache-cli) to run a local blockchain RPC server(`npm install -g ganache-cli`). After that, simply run `ganache-cli` in a new tab. 

Both of these cli-tools are required before moving forward, and be sure you're connected to an Ethereum client before running the commands below. A great browser based tool is [MetaMask.io](https://metamask.io) and will suit your needs for getting this demo and working quickly.  Be sure to SWITCH the Metamask network (in the upper left hand corner of the pop-up) to Localhost 8545. Otherwise you'll log an web-browser error when you navigate to app in a web browser.

And then in the original tab, run:

4. `truffle compile` to compile your contracts
5. `truffle migrate` to deploy those contracts to the network
6. `ng serve`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
7. Make sure there are no errors in browser console

You can also run `npm run compile-start` to automatically run all 3 steps

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

1. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
2. Run `truffle test` to run tests associated with your solidity smart contracts. The test folder for this can be found in the `test` directory at the root level of this project

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technologies & Languages Used
1. Angular4 (Typescript/Javascript)
2. Truffle (Solidity)
