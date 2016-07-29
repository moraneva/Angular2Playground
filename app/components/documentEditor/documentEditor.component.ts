import { Component} from '@angular/core';
import {DocumentComponent} from '../document/document.component';

@Component({
    selector: 'document-editor',
    templateUrl: 'app/components/documentEditor/documentEditor.component.html',
    directives: [DocumentComponent]
})
export class DocumentEditorComponent {


}
