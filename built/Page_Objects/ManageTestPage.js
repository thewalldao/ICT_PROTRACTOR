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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageTestPage = void 0;
const protractor_1 = require("protractor");
class ManageTestPage {
    constructor() {
        this._title = "//div[@class='ng-tns-c8-23']/span[@class='ng-tns-c8-23']";
        this._helloUser = "//li[@class='nav-item dropdown nav-item-highlight'] //a[@id='navbardrop']";
    }
    titleElement() {
        return protractor_1.element(protractor_1.by.xpath(this._title));
    }
    helloUserElememt() {
        return protractor_1.element(protractor_1.by.xpath(this._helloUser));
    }
    isDisplay(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield expect(this.titleElement().getText()).toEqual("Manage Tests");
                yield expect(this.helloUserElememt().getText()).toEqual("Hi, ${user.getUsername}");
                console.log("User login successfull");
            }
            catch (Error) {
                console.log("User login not successfull");
            }
        });
    }
}
exports.ManageTestPage = ManageTestPage;
//# sourceMappingURL=ManageTestPage.js.map