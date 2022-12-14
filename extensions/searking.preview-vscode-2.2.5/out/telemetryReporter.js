"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDefaultTelemetryReporter = void 0;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const vscode = require("vscode");
const nullReporter = new class NullTelemetryReporter {
    sendTelemetryEvent() { }
    dispose() { }
};
class ExtensionReporter {
    // private readonly _reporter: VSCodeTelemetryReporter;
    constructor(_packageInfo) {
        // this._reporter = new VSCodeTelemetryReporter(packageInfo.name, packageInfo.version, packageInfo.aiKey);
    }
    sendTelemetryEvent(_eventName, _properties) {
        // this._reporter.sendTelemetryEvent(eventName, properties);
    }
    dispose() {
        // this._reporter.dispose();
    }
}
function loadDefaultTelemetryReporter() {
    const packageInfo = getPackageInfo();
    return packageInfo ? new ExtensionReporter(packageInfo) : nullReporter;
}
exports.loadDefaultTelemetryReporter = loadDefaultTelemetryReporter;
function getPackageInfo() {
    const extension = vscode.extensions.getExtension('Microsoft.vscode-markdown');
    if (extension && extension.packageJSON) {
        return {
            name: extension.packageJSON.name,
            version: extension.packageJSON.version,
            aiKey: extension.packageJSON.aiKey
        };
    }
    return null;
}

//# sourceMappingURL=telemetryReporter.js.map
