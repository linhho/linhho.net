import { NgModule } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PostModule } from '../+post/post.module';
import { PostDetailModule } from '../+postDetail/postDetail.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    PostModule,
    PostDetailModule,
    BrowserModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    Title
  ]
})
export class HomeModule { }
