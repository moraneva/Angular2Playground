import {Answer} from '../answer/answer';
import {Document} from '../document/document';
/**
 * Question
 */
export class Question {

    id: number;
    questionNumber: string;
    questionText: string;
    answers: Answer[];
    document: Document;
    constructor(parameters) {

    }
}
