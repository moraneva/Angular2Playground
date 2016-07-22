import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {DocumentEditorComponent} from './components/documentEditor/documentEditor.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES]

})
export class AppComponent {

}