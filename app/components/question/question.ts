import {Answer} from '../answer/answer';
/**
 * Question
 */
export class Question {

    id: number;
    questionNumber: string;
    questionText: string;
    answers: Answer[];

    constructor(parameters) {

    }
}
