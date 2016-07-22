import { Component, Input } from '@angular/core';
import {Answer} from './answer';
@Component({
    selector: 'answer',
    templateUrl: 'app/components/answer/answer.component.html'
})
export class AnswerComponent {

    @Input() answer: Answer;

}