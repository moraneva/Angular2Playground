import { provideRouter, RouterConfig } from '@angular/router';
import {DocumentEditorComponent} from './components/documentEditor/documentEditor.component';
import {DocumentViewerComponent} from './components/documentViewer/documentViewer.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'editor', terminal: true},
    { path: 'editor', component: DocumentEditorComponent },
    { path: 'viewer', component: DocumentViewerComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
