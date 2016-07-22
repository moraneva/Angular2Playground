"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var question_component_1 = require('../question/question.component');
var html2canvas = require('html2canvas');
var DocumentEditorComponent = (function () {
    /**
     *
     */
    function DocumentEditorComponent(element) {
        this.element = element;
        this.questions = [{
                id: 1,
                questionNumber: "1)",
                questionText: "If A and B are disjoint sets, and A contains 5 elements and B contains 7, how many elements are in the union of A and B?",
                answers: new Array()
            }];
        this.questions[0].answers.push({
            question: this.questions[0],
            enumerationType: 'a',
            answerText: 'AAA'
        }, {
            question: this.questions[0],
            enumerationType: 'a',
            answerText: 'AAA'
        }, {
            question: this.questions[0],
            enumerationType: 'a',
            answerText: 'AAA'
        }, {
            question: this.questions[0],
            enumerationType: 'a',
            answerText: 'AAA'
        });
    }
    DocumentEditorComponent.prototype.ngOnInit = function () {
    };
    DocumentEditorComponent.prototype.ngAfterViewInit = function () {
        html2canvas(document.getElementById('input'), {}).then(function (canvas) {
            // canvas.width = 300;
            // canvas.height = 300;
            document.body.appendChild(canvas);
        });
    };
    DocumentEditorComponent.prototype.clicked = function (event) {
        var contentEditable = document.createAttribute("contenteditable");
        event.toElement.attributes.setNamedItem(contentEditable);
    };
    DocumentEditorComponent.prototype.addQuestion = function () {
        var nextId = this.questions[this.questions.length - 1].id + 1;
        this.questions.push({
            id: nextId,
            questionNumber: nextId + ")",
            questionText: "NEW Question",
            answers: new Array({
                question: this.questions[0],
                enumerationType: 'a',
                answerText: 'AAA'
            }, {
                question: this.questions[0],
                enumerationType: 'a',
                answerText: 'AAA'
            }, {
                question: this.questions[0],
                enumerationType: 'a',
                answerText: 'AAA'
            }, {
                question: this.questions[0],
                enumerationType: 'a',
                answerText: 'AAA'
            })
        });
    };
    DocumentEditorComponent = __decorate([
        core_1.Component({
            selector: 'document-editor',
            templateUrl: 'app/components/documentEditor/documentEditor.component.html',
            directives: [question_component_1.QuestionComponent]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DocumentEditorComponent);
    return DocumentEditorComponent;
}());
exports.DocumentEditorComponent = DocumentEditorComponent;
//# sourceMappingURL=documentEditor.component.js.map