import { Component, Input } from '@angular/core';
import {Question} from './question';
import {AnswerComponent} from '../answer/answer.component';

@Component({
    selector: 'question',
    templateUrl: 'app/components/question/question.component.html',
    directives: [AnswerComponent]
})
export class QuestionComponent {
    @Input() question:Question;

}