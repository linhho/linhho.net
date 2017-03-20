import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PostDetailComponent, SafeHtmlPipe } from './postDetail.component';

@NgModule({
    declarations: [ PostDetailComponent, SafeHtmlPipe ],
    imports: [ 
        SharedModule,
        CommonModule ],
    exports: [
        CommonModule,
        FormsModule,
        PostDetailComponent
    ]
})
export class PostDetailModule { }
