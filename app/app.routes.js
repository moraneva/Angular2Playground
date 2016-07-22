"use strict";
var router_1 = require('@angular/router');
var documentEditor_component_1 = require('./components/documentEditor/documentEditor.component');
var documentViewer_component_1 = require('./components/documentViewer/documentViewer.component');
var routes = [
    { path: '', redirectTo: 'editor', terminal: true },
    { path: 'editor', component: documentEditor_component_1.DocumentEditorComponent },
    { path: 'viewer', component: documentViewer_component_1.DocumentViewerComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map