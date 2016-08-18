import { Injectable } from '@angular/core';
import {Document} from '../components/document/document';

@Injectable()
export class DocumentService {

    getDocuments(): Document[] {
        var testDoc: Document = {
            id: 1
        };

        return [testDoc];
    };

}