import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Main } from '../pages/main/main';
//import { MovieListPage } from '../pages/movie-list/movie-list';
import { MovieInfo } from '../pages/movie-info/movie-info';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Main,
    //MovieListPage,
    MovieInfo
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Main,
    //MovieListPage,
    MovieInfo
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
