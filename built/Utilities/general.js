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
exports.General = void 0;
const protractor_1 = require("protractor");
class General {
    static makeRandomChar(up, low, num, spe) {
        let result = '';
        let upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
        let numberCharacters = '0123456789';
        let specialCharacters = '!@#$%^&*()-_=+';
        let upperCharacterLength = upperCharacters.length;
        let lowerCharactersLength = lowerCharacters.length;
        let numberCharacterLength = numberCharacters.length;
        let specialCharactersLength = specialCharacters.length;
        if (up === true) {
            result += upperCharacters.charAt(Math.floor(Math.random() * upperCharacterLength));
        }
        if (low === true) {
            result += lowerCharacters.charAt(Math.floor(Math.random() * lowerCharactersLength));
        }
        if (num === true) {
            result += numberCharacters.charAt(Math.floor(Math.random() * numberCharacterLength));
        }
        if (spe === true) {
            result += specialCharacters.charAt(Math.floor(Math.random() * specialCharactersLength));
        }
        return result;
    }
    static makeUserName(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    static randomSpecialString(length) {
        let result = '';
        let lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
        let lowerCharactersLength = lowerCharacters.length;
        for (let i = 0; i < length; i++) {
            result += lowerCharacters.charAt(Math.floor(Math.random() * lowerCharactersLength));
        }
        return result;
    }
    static randomNumberCharString(length) {
        let result = '';
        let numberCharacters = '0123456789';
        let numberCharacterLength = numberCharacters.length;
        for (let i = 0; i < length; i++) {
            result += numberCharacters.charAt(Math.floor(Math.random() * numberCharacterLength));
        }
        return result;
    }
    static randomLowerCharString(length) {
        let result = '';
        let specialCharacters = '!@#$%^&*()-_=+';
        let specialCharactersLength = specialCharacters.length;
        for (let i = 0; i < length; i++) {
            result += specialCharacters.charAt(Math.floor(Math.random() * specialCharactersLength));
        }
        return result;
    }
    static randomEmail(length) {
        let email = this.makeUserName(length) + "@gmail.com";
        return email;
    }
    static printBox(str) {
        let strLength = str.length;
        console.log("=".repeat(strLength + 4));
        console.log("+ " + str + " +");
        console.log("=".repeat(strLength + 4));
        return str;
    }
    static printDescribe(str) {
        let date = new Date();
        let strTime;
        let hoursTime;
        let minuteTime;
        let secondTime;
        if (date.getHours() < 10) {
            hoursTime = `0${date.getHours()}`;
        }
        else if (date.getHours() >= 10) {
            hoursTime = `${date.getHours()}`;
        }
        if (date.getMinutes() < 10) {
            minuteTime = `0${date.getMinutes()}`;
        }
        else if (date.getMinutes() >= 10) {
            minuteTime = `${date.getMinutes()}`;
        }
        if (date.getSeconds() < 10) {
            secondTime = `0${date.getSeconds()}`;
        }
        else if (date.getSeconds() >= 10) {
            secondTime = `${date.getSeconds()}`;
        }
        strTime = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} - ${hoursTime}:${minuteTime}:${secondTime}`;
        console.log(`${strTime} - ${str}`);
    }
    static isElementVisibleOf(ele, time, reportErr) {
        return __awaiter(this, void 0, void 0, function* () {
            this.printDescribe("check Element Visibleof");
            try {
                if ((typeof (ele) === "string")) {
                    return yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(ele))), time, reportErr);
                }
                else {
                    return yield protractor_1.browser.wait(this.PE.visibilityOf(ele), time, reportErr);
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static isElementPrecenceOf(ele, time, reportErr) {
        return __awaiter(this, void 0, void 0, function* () {
            this.printDescribe("check Element PrecencOf");
            try {
                if ((typeof (ele) === "string")) {
                    return yield protractor_1.browser.wait(this.PE.presenceOf(protractor_1.element(protractor_1.by.xpath(ele))), time, reportErr);
                }
                else {
                    return yield protractor_1.browser.wait(this.PE.presenceOf(ele), time, reportErr);
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static isElementClickAble(ele, time, reportErr) {
        return __awaiter(this, void 0, void 0, function* () {
            this.printDescribe("check Element PrecencOf");
            try {
                if ((typeof (ele) === "string")) {
                    return yield protractor_1.browser.wait(this.PE.elementToBeClickable(protractor_1.element(protractor_1.by.xpath(ele))), time, reportErr);
                }
                else {
                    return yield protractor_1.browser.wait(this.PE.elementToBeClickable(ele), time, reportErr);
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.General = General;
General.PE = protractor_1.protractor.ExpectedConditions;
//# sourceMappingURL=General.js.map