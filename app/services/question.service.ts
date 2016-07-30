import { Injectable } from '@angular/core';
import {Question} from '../components/question/question';
import { Answer } from '../components/answer/answer';

@Injectable()
export class QuestionService {

	getQuestions(): Question[] {
		var testQuestion: Question = {
			id: 1,
			questionNumber: "1)",
			questionText: "If A and B are disjoint sets, and A contains 5 elements and B contains 7, how many elements are in the union of A and B?",
			answers: new Array<Answer>()
		};

		testQuestion.answers.push({
				question: testQuestion,
				enumerationType: 'a',
				answerText: 'AAA'
			},
			{
				question: testQuestion,
				enumerationType: 'a',
				answerText: 'AAA'
			},
			{
				question: testQuestion,
				enumerationType: 'a',
				answerText: 'AAA'
			},
			{
				question: testQuestion,
				enumerationType: 'a',
				answerText: 'AAA'
			});

		return [ testQuestion ];
	};

	newTestQuestion(nextId): Question {

		var question: Question = {
			id: nextId,
			questionNumber: nextId + ")",
			questionText: "NEW Question",
			answers: new Array<Answer>()

		};

		question.answers.push({
				question: question,
				enumerationType: 'a',
				answerText: 'AAA'
			},
			{
				question: question,
				enumerationType: 'a',
				answerText: 'AAA'
			},
			{
				question: question,
				enumerationType: 'a',
				answerText: 'AAA'
			},
			{
				question: question,
				enumerationType: 'a',
				answerText: 'AAA'
			});

		return question;
	}

}