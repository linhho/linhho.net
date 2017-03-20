import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input} from '@angular/core';

import {ModelService} from '../shared/model/model.service';
import { Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.Default, 
    encapsulation: ViewEncapsulation.Emulated, 
    selector: 'post', 
    styleUrls: ['./post.component.css'], 
    templateUrl: './post.component.html'
})
export class PostComponent {
    @Input()post : any;
    title : string = "title";
    slug: string = 'abc';
    constructor(
        public model : ModelService,
         private _router: Router
        ) {

        // we need the data synchronously for the client to set the server response we
        // create another method so we have more control for testing
        this.universalInit();
    }
    universalInit() {

    }
}