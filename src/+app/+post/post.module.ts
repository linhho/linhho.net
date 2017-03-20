import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PostComponent } from './post.component';

@NgModule({
    declarations: [ PostComponent ],
    imports: [ 
        SharedModule,
        CommonModule ],
    exports: [
        CommonModule,
        FormsModule,
        PostComponent
    ]
})
export class PostModule { }
