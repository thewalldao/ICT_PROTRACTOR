"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testBase = void 0;
const Constant_1 = require("@Utilities/Constant");
const browser_wrapper_1 = __importDefault(require("@Utilities/protractor-wrappers/browser-wrapper"));
function testBase() {
    let originalTimeout;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        yield browser_wrapper_1.default.waitForAngularEnabled(false);
        yield browser_wrapper_1.default.get(Constant_1.InContactLink.LOCAL);
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
    }));
}
exports.testBase = testBase;
;
//# sourceMappingURL=testbase.js.map