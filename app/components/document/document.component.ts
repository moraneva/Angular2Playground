import { Component, OnInit, ElementRef, AfterViewChecked, Input} from '@angular/core';
import {Question} from '../question/question';
import {Answer} from '../answer/answer';
import {QuestionComponent} from '../question/question.component';
import {QuestionService} from '../../services/question.service';
import {Document} from '../document/document';
import * as html2canvas from 'html2canvas';

@Component({
    selector: 'document',
    templateUrl: 'app/components/document/document.component.html',
    directives: [QuestionComponent],
    providers: [QuestionService]
})
export class DocumentComponent implements AfterViewChecked {

    @Input() document: Document;
    questions: Question[];

    /**
     *
     */
    constructor(public element: ElementRef, private questionService: QuestionService) {
        this.questions = questionService.getQuestions(document);

    }

    ngAfterViewChecked() {
        var documentElement: HTMLElement = document.getElementById('input');
        var questionContainer: HTMLElement = document.getElementById('questionContainer');
        if (documentElement.offsetHeight < questionContainer.offsetHeight ||
            documentElement.offsetWidth < questionContainer.offsetWidth) {
            //Create new page here.
            var question = this.questions.pop();
        }
    }

    addQuestion() {

        var nextId = this.questions[this.questions.length - 1].id + 1;
        var newQuestion = this.questionService.newTestQuestion(nextId, this.document);

        this.questions.push(newQuestion);
    }

}