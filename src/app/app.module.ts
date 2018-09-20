import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {Web3Service} from '../services/services'
import {BallotService} from '../services/ballot-service';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import {RouterModule} from '@angular/router';
import { UserBoardComponent } from './user-board/user-board.component';

const SERVICES = [
  BallotService,
  Web3Service,
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'admin', component: AdminBoardComponent},
      {path: 'user', component: UserBoardComponent}
    ])
  ],
  declarations: [
    AppComponent,
    AdminBoardComponent,
    UserBoardComponent
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
