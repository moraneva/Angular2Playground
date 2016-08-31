import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {DocumentEditorComponent} from "./components/documentEditor/documentEditor.component";
import {DocumentViewerComponent} from "./components/documentViewer/documentViewer.component";

const routes:Routes = [
    {path: '', redirectTo: 'editor', terminal: true},
    {path: 'editor', component: DocumentEditorComponent},
    {path: 'viewer', component: DocumentViewerComponent}
];

export const appRouterProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
