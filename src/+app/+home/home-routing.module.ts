import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'blog', component: HomeComponent },
      { path: 'blog/:idCategory/:category', component: HomeComponent },
      { path: 'blog/:idCategory/:idPost/:post', component: HomeComponent }
    ])
  ]
})
export class HomeRoutingModule { }
