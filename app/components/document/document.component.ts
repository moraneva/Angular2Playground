import { Component, OnInit, ElementRef, AfterViewChecked} from '@angular/core';
import {Question} from '../question/question';
import {Answer} from '../answer/answer';
import {QuestionComponent} from '../question/question.component';
import {QuestionService} from '../../services/question.service';
import * as html2canvas from 'html2canvas';

@Component({
    selector: 'document',
    templateUrl: 'app/components/document/document.component.html',
    directives: [QuestionComponent],
    providers: [QuestionService]
})
export class DocumentComponent implements AfterViewChecked {

    questions: Question[];

    /**
     *
     */
    constructor(public element: ElementRef, private questionService: QuestionService) {
        this.questions = questionService.getQuestions();

    }

    ngAfterViewChecked() {
        var documentElement: HTMLElement = document.getElementById('input');
        var questionContainer: HTMLElement = document.getElementById('questionContainer');
        if (documentElement.offsetHeight < questionContainer.offsetHeight ||
            documentElement.offsetWidth < questionContainer.offsetWidth) {
            var question = this.questions.pop();
        }
    }

    addQuestion() {

        var nextId = this.questions[this.questions.length - 1].id + 1;
        var newQuestion = this.questionService.newTestQuestion(nextId);

        this.questions.push(newQuestion);
    }

}