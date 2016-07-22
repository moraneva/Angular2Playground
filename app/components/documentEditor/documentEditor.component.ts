import { Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import {Question} from '../question/question';
import {Answer} from '../answer/answer';
import {QuestionComponent} from '../question/question.component';
import * as html2canvas from 'html2canvas';

@Component({
    selector: 'document-editor',
    templateUrl: 'app/components/documentEditor/documentEditor.component.html',
    directives: [QuestionComponent]
})
export class DocumentEditorComponent implements OnInit {

    questions: Question[] = [{
        id: 1,
        questionNumber: "1)",
        questionText: "If A and B are disjoint sets, and A contains 5 elements and B contains 7, how many elements are in the union of A and B?",
        answers: new Array<Answer>()
    }];

    /**
     *
     */
    constructor(public element: ElementRef) {
        this.questions[0].answers.push({
            question: this.questions[0],
            enumerationType: 'a',
            answerText: 'AAA'
        },
            {
                question: this.questions[0],
                enumerationType: 'a',
                answerText: 'AAA'
            },
            {
                question: this.questions[0],
                enumerationType: 'a',
                answerText: 'AAA'
            },
            {
                question: this.questions[0],
                enumerationType: 'a',
                answerText: 'AAA'
            });

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        html2canvas(document.getElementById('input'), {
        }).then((canvas: HTMLCanvasElement) => {
            // canvas.width = 300;
            // canvas.height = 300;
            document.body.appendChild(canvas);
        });
    }

    clicked(event) {
        var contentEditable = document.createAttribute("contenteditable");
        event.toElement.attributes.setNamedItem(contentEditable);
    }


    addQuestion() {
        var nextId = this.questions[this.questions.length - 1].id + 1;
        this.questions.push({
            id: nextId,
            questionNumber: nextId + ")",
            questionText: "NEW Question",
            answers: new Array<Answer>(
                {
                    question: this.questions[0],
                    enumerationType: 'a',
                    answerText: 'AAA'
                },
                {
                    question: this.questions[0],
                    enumerationType: 'a',
                    answerText: 'AAA'
                },
                {
                    question: this.questions[0],
                    enumerationType: 'a',
                    answerText: 'AAA'
                },
                {
                    question: this.questions[0],
                    enumerationType: 'a',
                    answerText: 'AAA'
                }
            )

        });
    }
}
