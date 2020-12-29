"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const filePath = __importStar(require("path"));
class ProjectPath {
    static getPath(filename) {
        try {
            let splitString = "built\\test-data\\general".length;
            let projectPath = __dirname.slice(0, __dirname.length - splitString);
            if (filename == null) {
                return projectPath;
            }
            else {
                return filePath.join(projectPath, filename);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.default = ProjectPath;
ProjectPath.conf = ProjectPath.getPath("built\\conf").replace(/\\/g, "/");
ProjectPath.testCases = ProjectPath.getPath("built\\TestCases").replace(/\\/g, "/");
ProjectPath.testData = ProjectPath.getPath("built\\test-data").replace(/\\/g, "/");
ProjectPath.pageObjects = ProjectPath.getPath("built\\Page_Objects").replace(/\\/g, "/");
ProjectPath.utilities = ProjectPath.getPath("built\\Utilities").replace(/\\/g, "/");
ProjectPath.project = ProjectPath.getPath().replace(/\\/g, "/");
ProjectPath.nodeModules = ProjectPath.getPath("/node_modules").replace(/\\/g, "/");
//# sourceMappingURL=project-path.js.map