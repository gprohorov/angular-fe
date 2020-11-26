import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './component/item/items-list/items-list.component';
import { ItemAddComponent } from './component/item/item-add/item-add.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full' },
  {path: 'items', component: ItemsListComponent },
  {path: 'add', component: ItemAddComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
