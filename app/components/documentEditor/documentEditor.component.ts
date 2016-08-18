import { Component, AfterViewChecked, AfterViewInit } from '@angular/core';
import {Document} from '../document/document';
import {DocumentComponent} from '../document/document.component';
import {DocumentService} from '../../services/document.service';
@Component({
    selector: 'document-editor',
    templateUrl: 'app/components/documentEditor/documentEditor.component.html',
    directives: [DocumentComponent],
    providers: [DocumentService]
})
export class DocumentEditorComponent {

    documents: Document[];
    selectedDocument: Document;
    constructor(private documentService: DocumentService) {
        this.documents = documentService.getDocuments();
        this.selectedDocument = this.documents[0];
    }

    ngAfterViewInit() {
        var documentElement: HTMLElement = document.getElementById('thumbnailContainer');

        for (var i = 0; i < documentElement.children.length; i++) {
            html2canvas(documentElement.children.item(i) as HTMLElement, {
                width:800,
                height:950
            }).then(canvas => {
                var extra_canvas = document.createElement('canvas');
                // extra_canvas.setAttribute('width', canvas.width/3+"");
                // extra_canvas.setAttribute('height',canvas.height/3+"");
                var context = extra_canvas.getContext("2d");
                documentElement.removeChild(documentElement.children.item(0));
                context.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 800,950);
                extra_canvas.classList.add("input");
                documentElement.appendChild(extra_canvas);
            });


        }
    }



}
