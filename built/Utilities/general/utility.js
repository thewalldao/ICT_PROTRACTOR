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
exports.Gmail = exports.JsonUtility = exports.Utility = void 0;
const config_1 = require("@data-objects/general/config");
const test_run_info_1 = __importDefault(require("@data-objects/general/test-run-info"));
const time_zone_1 = require("@data-objects/general/time-zone");
const workforce_rule_info_1 = require("@data-objects/inContact/central/admin/workforce-intelligence/rules/workforce-rule-info");
const project_path_1 = __importDefault(require("@test-data/general/project-path"));
const logger_1 = require("@Utilities/general/logger");
const stop_watch_1 = __importDefault(require("@Utilities/general/stop-watch"));
const browser_wrapper_1 = __importDefault(require("@Utilities/protractor-wrappers/browser-wrapper"));
const error_wrapper_1 = require("@Utilities/protractor-wrappers/error-wrapper");
const config_report_1 = require("@Utilities/report-email/config-report");
const fileSystem = __importStar(require("fs"));
const fs = __importStar(require("fs-extra"));
const googleapis_1 = require("googleapis");
const imap_1 = __importDefault(require("imap"));
const json2typescript_1 = require("json2typescript");
const moment_1 = __importDefault(require("moment"));
const filePath = __importStar(require("path"));
const readline_1 = __importDefault(require("readline"));
const v4_1 = __importDefault(require("uuid/v4"));
let path = require('path');
class Utility {
    static sortStrings(...restArgs) {
        try {
            return restArgs.sort().toString().replace(",", ", ");
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.sortStrings, err.message);
        }
    }
    static splitString(text, separator) {
        try {
            let splitter = text.split(separator);
            return splitter.map(str => str.trim());
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.splitString, err.message);
        }
    }
    static getCurrentUser() {
        try {
            var path = require('path');
            var userName = process.env['USERPROFILE'].split(path.sep)[2];
            return userName;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getCurrentUser, err.message);
        }
    }
    static getRandomNumber(length, min = -1, max = -1) {
        try {
            let randomNumber;
            if (min == -1 && max == -1) {
                let firstNumber = Math.floor((Math.random() * 9) + 1);
                let result = "";
                for (let i = 1; i < length; i++) {
                    result += Math.floor(Math.random() * 10).toString();
                }
                randomNumber = parseInt(firstNumber + result);
            }
            else {
                randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            }
            return randomNumber;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getRandomNumber, err.message);
        }
    }
    static createRandomString(length, prefix = "") {
        try {
            if (length < 1 || isNaN(length)) {
                throw 'Invalid input. Should be a number greater than 0';
            }
            let uuid = v4_1.default().replace(/-/g, '');
            let uuidLength = uuid.length;
            let prefixLength = prefix.length;
            if (length > uuidLength) {
                let repetition = Math.ceil(length / uuidLength);
                uuid = uuid.repeat(repetition);
            }
            let randomString = prefix + uuid.substring(0, length - prefixLength);
            return randomString;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.createRandomString, err.message);
        }
    }
    static createConfigJSONFile(filePath) {
        try {
            let isFileExist = fs.existsSync(filePath);
            if (isFileExist == false) {
                let fileData = `{"clusterId":"","environment":"","tenantName":"","browser":"","elementTimeout":60,"pageTimeout":60,"testTimeout":180000}`;
                fs.writeFileSync(filePath, fileData);
            }
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.createConfigJSONFile, err.message);
        }
    }
    static getPath(filename) {
        try {
            let splitString = "built\\utilities\\general".length;
            let projectPath = __dirname.slice(0, __dirname.length - splitString);
            if (filename == null) {
                return projectPath;
            }
            else {
                return filePath.join(projectPath, filename);
            }
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getPath, err.message);
        }
    }
    static setTestEnvironment(type, value, filePath = "src/test-data/config-info.json") {
        try {
            let configFile = filePath;
            let jsonPath = this.getPath(configFile);
            Utility.createConfigJSONFile(jsonPath);
            let jsonString = fs.readFileSync(jsonPath, 'utf8');
            let configData = JsonUtility.deserialize(JSON.parse(jsonString), config_1.ConfigInfo);
            if (type.match("cluster")) {
                configData.clusterId = value;
            }
            if (type.match("browser")) {
                configData.browser = value;
            }
            if (type.match("environment")) {
                configData.environment = value;
            }
            if (type.match("tenantName")) {
                configData.tenantName = value;
            }
            if (type.match("gbu")) {
                configData.gbu = value;
            }
            fs.writeFileSync(jsonPath, JSON.stringify(configData));
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.setTestEnvironment, err.message);
        }
    }
    static setBrowser(browser) {
        try {
            this.setTestEnvironment("browser", browser);
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.setBrowser, err.message);
        }
    }
    static setTenant(tenantName = "") {
        try {
            this.setTestEnvironment("tenantName", tenantName);
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.setTenant, err.message);
        }
    }
    static addDateToCurrentDate(day = 0, month = 0, year = 0, dayFormat = "", monthFormat = "", yearFormat = "") {
        try {
            let tmpdate = new Date(Date.now());
            if (day != null) {
                var date = new Date(tmpdate.setDate(tmpdate.getDate() + day));
            }
            if (month != null) {
                var date = new Date(tmpdate.setMonth(tmpdate.getMonth() + month));
            }
            if (year != null) {
                var date = new Date(tmpdate.setFullYear(tmpdate.getFullYear() + year));
            }
            if (dayFormat == "") {
                dayFormat = "numeric";
            }
            if (monthFormat == "") {
                monthFormat = "2-digit";
            }
            if (yearFormat == "") {
                yearFormat = "numeric";
            }
            var options = { year: `${yearFormat}`, month: `${monthFormat}`, day: `${dayFormat}` };
            return date.toLocaleString('en-US', options);
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.addDateToCurrentDate, err.message);
        }
    }
    static getNowDate(delimeters, addDate) {
        try {
            let returnDate = "";
            let today = new Date();
            today.setDate(today.getDate() + addDate);
            let dd = today.getDate();
            let mm = today.getMonth() + 1;
            let yyyy = today.getFullYear();
            if (mm < 10) {
                returnDate += `0${mm}${delimeters}`;
            }
            else {
                returnDate += `${mm}${delimeters}`;
            }
            if (dd < 10) {
                returnDate += `0${dd}${delimeters}`;
            }
            else {
                returnDate += `${dd}${delimeters}`;
            }
            return returnDate += yyyy;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getNowDate, err.message);
        }
    }
    static formatDateTime(dateTime, oldFormat, newFormat) {
        try {
            let dateStr = moment_1.default(dateTime, oldFormat).format(newFormat);
            return dateStr;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.formatDateTime, err.message);
        }
    }
    static convertDateToTimestamp(dateTime, format) {
        try {
            let dateString = this.formatDateTime(dateTime, format, "YYYY-MMM-DD hh:mm:ss");
            let date = new Date(dateString);
            let timestamp = date.getTime() / 1000;
            return timestamp;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.convertDateToTimestamp, err.message);
        }
    }
    static isFileDownloaded(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, "Verifying " + fileName + " is downloaded");
                let currentUserName = yield Utility.getCurrentUser();
                let filePath = "C:\\Users\\" + currentUserName + "\\Downloads\\" + fileName;
                let fileExist = yield fileSystem.existsSync(filePath);
                let stopTime = 0;
                let stopWatch = new stop_watch_1.default();
                stopWatch.startClock();
                while (fileExist == false && stopTime <= 20) {
                    stopTime = stopWatch.getElapsedTimeInSecond();
                    fileExist = yield fileSystem.existsSync(filePath);
                }
                return fileExist;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.isFileDownloaded, err.message);
            }
        });
    }
    static cleanUpDownloadFile(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let currentUserName = yield Utility.getCurrentUser();
                let filePath = (yield "C:\\Users\\") + currentUserName + "\\Downloads\\" + fileName;
                yield logger_1.Logger.write(logger_1.FunctionType.UI, "Deleting " + filePath);
                if (yield fileSystem.existsSync(filePath)) {
                    yield fileSystem.unlinkSync(filePath);
                }
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.cleanUpDownloadFile, err.message);
            }
        });
    }
    static cleanUpDownloadFileWithExtension(fileType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let listfile = yield this.getListOfFilesInFolder();
                for (let i = 0; i < listfile.length; i++) {
                    let fileName = listfile[i];
                    if (fileName.endsWith(fileType)) {
                        let filePath = "C:\\Users\\" + Utility.getCurrentUser() + "\\Downloads\\" + fileName;
                        yield logger_1.Logger.write(logger_1.FunctionType.UI, "Deleting " + filePath);
                        if (yield fileSystem.existsSync(filePath)) {
                            yield fileSystem.unlinkSync(filePath);
                        }
                    }
                }
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.cleanUpDownloadFileWithExtension, err.message);
            }
        });
    }
    static waitForFileDownloaded(fileType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let listfile = yield this.getListOfFilesInFolder();
                let counter = 1;
                while (listfile.toString().indexOf(fileType) < 0 && counter < 5) {
                    yield browser_wrapper_1.default.sleepInSecond(2);
                    counter++;
                }
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.cleanUpDownloadFileWithExtension, err.message);
            }
        });
    }
    static getListOfFilesInFolder() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let currentUserName = Utility.getCurrentUser();
                let fPath = "C:\\Users\\" + currentUserName + "\\Downloads\\";
                let listfile = fileSystem.readdirSync(fPath);
                return listfile;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.cleanUpDownloadFileWithExtension, err.message);
            }
        });
    }
    static getSystemTimeZone(isDayLightSaving) {
        try {
            let currentDate = new Date();
            let timeZone;
            let offSet = currentDate.getTimezoneOffset();
            let timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
            let timeStandard = currentDate.toUTCString().slice(currentDate.toUTCString().length - 3, currentDate.toUTCString().length);
            let round = Math.abs(offSet);
            if (isDayLightSaving) {
                let date = new Date();
                let jan = new Date(date.getFullYear(), 0, 1);
                let jul = new Date(date.getFullYear(), 6, 1);
                let dayLightSaving = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
                if (offSet < dayLightSaving) {
                    timeZone = (offSet < 0 ? "+" : "-") + ("00" + (Math.floor(round / 60) + 1)).slice(-2) + ":" + ("00" + (round % 60)).slice(-2);
                    return new time_zone_1.TimeZone().init(timeStandard, timeZone, timeZoneName);
                }
            }
            timeZone = (offSet < 0 ? "+" : "-") + ("00" + Math.floor(round / 60)).slice(-2) + ":" + ("00" + (round % 60)).slice(-2);
            return new time_zone_1.TimeZone().init(timeStandard, timeZone, timeZoneName);
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getSystemTimeZone, err.message);
        }
    }
    static getSystemTimeZoneNumber() {
        try {
            let toDay = new Date();
            let offset = -toDay.getTimezoneOffset();
            toDay.setHours(toDay.getHours() - offset / 60);
            let tzo = -toDay.getTimezoneOffset(), dif = tzo >= 0 ? '+' : '-', pad = function (num) {
                var norm = Math.floor(Math.abs(num));
                return (norm < 10 ? '0' : '') + norm;
            };
            let time = toDay.getFullYear() +
                '-' + pad(toDay.getMonth() + 1) +
                '-' + pad(toDay.getDate()) +
                'T' + pad(toDay.getHours()) +
                ':' + pad(toDay.getMinutes()) +
                ':' + pad(toDay.getSeconds()) +
                dif + pad(tzo / 60) +
                ':' + pad(tzo % 60);
            return time.substring(time.lastIndexOf("+") > 0 ? time.lastIndexOf("+") : time.lastIndexOf("-"));
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getSystemTimeZoneNumber, err.message);
        }
    }
    static getColorNameByCode(rgbaCode) {
        try {
            rgbaCode = rgbaCode.replace(/rgba\(|\)| /gi, "");
            let rgbaArray = rgbaCode.split(",");
            let red = parseInt(rgbaArray[0]);
            let green = parseInt(rgbaArray[1]);
            let blue = parseInt(rgbaArray[2]);
            red = red / 255;
            green = green / 255;
            blue = blue / 255;
            let max = Math.max(red, green, blue);
            let min = Math.min(red, green, blue);
            let hue;
            let saturation;
            let bright = max;
            let d = max - min;
            if (max == 0) {
                saturation = 0;
            }
            else {
                saturation = d / max;
            }
            if (max == min) {
                hue = 0;
            }
            else {
                switch (max) {
                    case red:
                        hue = (green - blue) / d + (green < blue ? 6 : 0);
                        break;
                    case green:
                        hue = (blue - red) / d + 2;
                        break;
                    case blue:
                        hue = (red - green) / d + 4;
                        break;
                }
                hue /= 6;
            }
            let color = "false";
            if (saturation[1] < 0.1 && bright[2] > 0.9) {
                color = 'nearlyWhite';
            }
            else if (bright[2] < 0.1) {
                color = 'nearlyBlack';
            }
            else {
                let deg = hue[0] * 360;
                if (deg >= 0 && deg < 30) {
                    color = 'red';
                }
                else if (deg >= 30 && deg < 90) {
                    color = 'yellow';
                }
                else if (deg >= 90 && deg < 150) {
                    color = 'green';
                }
                else if (deg >= 150 && deg < 210) {
                    color = 'cyan';
                }
                else if (deg >= 210 && deg < 270) {
                    color = 'blue';
                }
                else if (deg >= 270 && deg < 330) {
                    color = 'magenta';
                }
                else {
                    color = 'red';
                }
            }
            return color;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getColorNameByCode, err.message);
        }
    }
    static compareStrings(str1, str2) {
        try {
            if (str1 == str2) {
                return true;
            }
            return false;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.compareStrings, err.message);
        }
    }
    static convertRgbToHex(colorCode) {
        try {
            let hexCode = "#";
            let colorType = colorCode.match(/\w*/i)[0];
            colorCode = colorCode.replace(/\w*\(|\)| /gi, "");
            let arrayCode = colorCode.split(",");
            for (let i = 0; i < arrayCode.length; i++) {
                let unitHex = ("0" + parseInt(arrayCode[i]).toString(16)).slice(-2);
                hexCode += (colorType == "rgba" && i != arrayCode.length - 1) ? unitHex : "";
                hexCode += (colorType == "rgb") ? unitHex : "";
            }
            return hexCode;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.convertRgbToHex, err.message);
        }
    }
    static compareTwoValues(value1, operation, value2) {
        try {
            switch (operation) {
                case workforce_rule_info_1.ConditionsOperator.EQUAL:
                    if (value1 == value2) {
                        return true;
                    }
                    break;
                case workforce_rule_info_1.ConditionsOperator.BIGGER:
                    if (value1 > value2) {
                        return true;
                    }
                    break;
                case workforce_rule_info_1.ConditionsOperator.EQUAL_BIGGER:
                    if (value1 >= value2) {
                        return true;
                    }
                    break;
                case workforce_rule_info_1.ConditionsOperator.SMALLER:
                    if (value1 < value2) {
                        return true;
                    }
                    break;
                case workforce_rule_info_1.ConditionsOperator.EQUAL_SMALLER:
                    if (value1 <= value2) {
                        return true;
                    }
                    break;
            }
            return false;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.compareTwoValues, err.message);
        }
    }
    static compareTwoValuesTolerance(value1, operation, value2, tolerance = 0) {
        try {
            let result = value1 - value2;
            switch (operation) {
                case workforce_rule_info_1.ConditionsOperator.EQUAL:
                    if (Math.abs(result) < tolerance) {
                        return true;
                    }
                    break;
                case workforce_rule_info_1.ConditionsOperator.BIGGER:
                    if (value1 > value2 && Math.abs(result) < tolerance) {
                        return true;
                    }
                    break;
                case workforce_rule_info_1.ConditionsOperator.EQUAL_BIGGER:
                    if (value1 >= value2 && Math.abs(result) < tolerance) {
                        return true;
                    }
                    break;
                case workforce_rule_info_1.ConditionsOperator.SMALLER:
                    if (value1 < value2 && Math.abs(result) < tolerance) {
                        return true;
                    }
                    break;
                case workforce_rule_info_1.ConditionsOperator.EQUAL_SMALLER:
                    if (value1 <= value2 && Math.abs(result) < tolerance) {
                        return true;
                    }
                    break;
            }
            return false;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.compareTwoValuesTolerance, err.message);
        }
    }
    static getUniqueValueInTwoArrays(array1, array2) {
        try {
            let value;
            let tempArray = [];
            array1.sort();
            array2.sort();
            if (array1.length > array2.length) {
                tempArray = array1;
                array1 = array2;
                array2 = tempArray;
            }
            for (let i = 0; i < array1.length; i++) {
                for (let j = 0; j < array2.length; j++) {
                    if (array1[i] == array2[j]) {
                        i++;
                    }
                    else {
                        value = array2[j];
                    }
                }
            }
            return value;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getUniqueValueInTwoArrays, err.message);
        }
    }
    static convertStringMinutesToSeconds(minutes) {
        try {
            let timeString = minutes.split(":");
            return (parseInt(timeString[0]) * 60) + parseInt(timeString[1]);
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.convertStringMinutesToSeconds, err.message);
        }
    }
    static delay(second) {
        try {
            return new Promise(resolve => setTimeout(resolve, second * 1000));
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.delay, err.message);
        }
    }
    static readJsonAPI(path) {
        try {
            let configFile = `src/test-data/inContact/apis/${path}`;
            let jsonPath = Utility.getPath(configFile);
            let data = require(jsonPath);
            if (test_run_info_1.default.apiTestCasesID.length != 0) {
                let filterBy = { Id: test_run_info_1.default.apiTestCasesID }, result = data.filter(o => Object.keys(filterBy).every(k => filterBy[k].some(f => o[k] === f)));
                return result;
            }
            return data;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.readJsonAPI, err.message);
        }
    }
    static capitalizeFirstLetter(name) {
        try {
            return name = name.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ');
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.convertStringMinutesToSeconds, err.message);
        }
    }
    static injectTextWithSpecChars(text, filter = "") {
        try {
            let specialChars = "$-._!()'=^~`@|[]{}";
            for (let char of filter) {
                specialChars = specialChars.replace(char, "");
            }
            let newTextArr = new Array();
            for (let char of specialChars) {
                let randomIndex = this.getRandomNumber(0, 0, text.length);
                newTextArr.push(text.substr(0, randomIndex) + char + text.substr(randomIndex, text.length));
            }
            return newTextArr;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.injectTextWithSpecChars, err.message);
        }
    }
    static convertHexToRgb(colorCode) {
        try {
            let rgbCode = "rgb(";
            let colorString = colorCode.slice(1);
            let rValue = parseInt(colorString.slice(0, 2), 16);
            let gValue = parseInt(colorString.slice(2, 4), 16);
            let bValue = parseInt(colorString.slice(4, 6), 16);
            rgbCode += `${rValue}, ${gValue}, ${bValue})`;
            return rgbCode;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.convertHexToRgb, err.message);
        }
    }
    static convertDateToJulianNumber(date) {
        try {
            let x = Math.floor((14 - (date.getMonth() + 1)) / 12);
            let y = date.getFullYear() + 4800 - x;
            let z = (date.getMonth() + 1) - 3 + 12 * x;
            let julianNumber = date.getDate() + Math.floor(((153 * z) + 2) / 5) + (365 * y) + Math.floor(y / 4) + Math.floor(y / 400) - Math.floor(y / 100) - 32045;
            return julianNumber;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.convertDateToJulianNumber, err.message);
        }
    }
    static convertJulianNumberToDate(julianNumber) {
        try {
            let f = julianNumber + 1401 + Math.floor((Math.floor((4 * julianNumber + 274277) / 146097) * 3) / 4) - 38;
            let e = f * 4 + 3;
            let g = Math.floor((e % 1461) / 4);
            let h = g * 5 + 2;
            let D = Math.floor((h % 153) / 5) + 1;
            let M = ((Math.floor(h / 153) + 2) % 12) + 1;
            let Y = Math.floor(e / 1461) - 4716 + Math.floor((2 + 12 - M) / 12);
            let month = (M < 10) ? `0${M}` : M.toString();
            let date = (D < 10) ? `0${D}` : D.toString();
            let fullDateString = `${month}/${date}/${Y}`;
            return fullDateString;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.convertJulianNumberToDate, err.message);
        }
    }
    static addMinutesToCurrentTime(addMinute) {
        try {
            let currentTime = new Date();
            currentTime.setMinutes(currentTime.getMinutes() + addMinute);
            let meridiem = currentTime.getHours() >= 12 ? "pm" : "am";
            return currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + meridiem;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.addMinutesToCurrentTime, err.message);
        }
    }
    static generateTimeForWFMActivity(addHour, fullClock = false) {
        try {
            let scheduleTime = moment_1.default().add(addHour, 'hour').format("LLL");
            if (fullClock) {
                scheduleTime = Utility.formatDateTime(scheduleTime, 'LLL', 'MMM D, YYYY HH:mm');
            }
            return scheduleTime;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.generateTimeForWFMActivity, err.message);
        }
    }
    static isNumberInRange(input, expected, range) {
        try {
            let isInRange = false;
            let minSize = expected - range;
            let maxSize = expected + range;
            if (input >= minSize && input < maxSize) {
                isInRange = true;
            }
            return isInRange;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.isNumberInRange, err.message);
        }
    }
    static addHoursFromCurrent(addHour) {
        try {
            let currentHour = new Date().getHours();
            let extraHour = currentHour + addHour;
            let hourConverted = extraHour % 12;
            let hour;
            if (hourConverted >= 10) {
                hour = hourConverted.toString();
            }
            else {
                hour = "0" + hourConverted.toString();
            }
            return hour;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.addHoursFromCurrent, err.message);
        }
    }
    static executeShellCommand(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const { exec } = require("child_process");
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    logger_1.Logger.write(logger_1.FunctionType.NONE, `${error.message}`);
                    return;
                }
                if (stderr) {
                    logger_1.Logger.write(logger_1.FunctionType.NONE, `stderr: ${stderr}`);
                    return;
                }
                logger_1.Logger.write(logger_1.FunctionType.NONE, `${stdout}`);
            });
        });
    }
}
exports.Utility = Utility;
class JsonUtility {
    static deserialize(json, classReference) {
        try {
            let jsonConvert = new json2typescript_1.JsonConvert();
            jsonConvert.ignorePrimitiveChecks = false;
            jsonConvert.valueCheckingMode = json2typescript_1.ValueCheckingMode.DISALLOW_NULL;
            try {
                return jsonConvert.deserialize(json, classReference);
            }
            catch (e) {
                console.log(e);
            }
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.deserialize, err.message);
        }
    }
    static deserializeArray(jsonArray, classReference) {
        try {
            let jsonConvert = new json2typescript_1.JsonConvert();
            jsonConvert.ignorePrimitiveChecks = false;
            jsonConvert.valueCheckingMode = json2typescript_1.ValueCheckingMode.DISALLOW_NULL;
            try {
                return jsonConvert.deserializeArray(jsonArray, classReference);
            }
            catch (e) {
                console.log(e);
            }
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.deserializeArray, err.message);
        }
    }
    static serialize(classReference) {
        try {
            let jsonConvert = new json2typescript_1.JsonConvert();
            jsonConvert.ignorePrimitiveChecks = false;
            jsonConvert.valueCheckingMode = json2typescript_1.ValueCheckingMode.DISALLOW_NULL;
            try {
                return jsonConvert.serialize(classReference);
            }
            catch (e) {
                console.log(e);
            }
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.serialize, err.message);
        }
    }
    static getFieldValue(jsonString, jsonPath) {
        try {
            let jsonObj = JSON.parse(jsonString);
            let returnValue = eval("jsonObj." + jsonPath);
            return JSON.stringify(returnValue);
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getFieldValue, err.message);
        }
    }
    static getFieldCount(jsonString, jsonPath) {
        try {
            let jsonFullString;
            let jsonObj = JSON.parse(jsonString);
            if (jsonPath != null) {
                jsonFullString = eval("jsonObj." + jsonPath);
            }
            else {
                jsonFullString = eval("jsonObj");
            }
            return Object.keys(jsonFullString).length;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getFieldCount, err.message);
        }
    }
    static isFieldExisted(jsonString, jsonPath) {
        try {
            let jsonObj = JSON.parse(jsonString);
            let jsonFullString = eval("jsonObj." + jsonPath);
            if (jsonFullString) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.isFieldExisted, err.message);
        }
    }
    static update(object, jsonString) {
        try {
            function getAllKeys(o) {
                Object.keys(o).forEach(function (k) {
                    if (typeof o[k] === 'object') {
                        return getAllKeys(o[k]);
                    }
                    keys[k] = o;
                });
            }
            let keys = Object.create(null);
            getAllKeys(object);
            Object.keys(jsonString).forEach(function (k) {
                if (keys[k] && k in keys[k]) {
                    keys[k][k] = jsonString[k];
                }
            });
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.update, err.message);
        }
    }
}
exports.JsonUtility = JsonUtility;
class Gmail {
    getGmailBodyContent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let imap = new imap_1.default({
                    user: 'testautomationincontact@gmail.com',
                    password: 'Logigear123!',
                    host: 'imap.gmail.com',
                    port: 993,
                    tls: true
                });
                yield imap.connect();
                let imapOnceReady = new Promise((resolve, reject) => {
                    imap.once('ready', () => {
                        let imapOpenBox = new Promise((resolve, reject) => {
                            imap.openBox('INBOX', true, function (err, box) {
                                return __awaiter(this, void 0, void 0, function* () {
                                    var f = yield imap.seq.fetch("1:1", {
                                        bodies: ['HEADER.FIELDS (FROM)', 'TEXT']
                                    });
                                    yield f.on('message', function (msg, seqno) {
                                        return __awaiter(this, void 0, void 0, function* () {
                                            yield msg.on('body', function (stream, info) {
                                                var buffer = '';
                                                stream.on('data', function (chunk) {
                                                    buffer += chunk.toString('utf8');
                                                });
                                                stream.once('end', function () {
                                                    console.log(buffer);
                                                    resolve(buffer);
                                                });
                                            });
                                            yield msg.once('end', function () { });
                                        });
                                    });
                                    yield f.once('error', function (err) {
                                        console.log('Fetch error: ' + err);
                                    });
                                    yield f.once('end', function () {
                                        imap.end();
                                    });
                                });
                            });
                        });
                        resolve(imapOpenBox);
                    });
                });
                return yield imapOnceReady;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getGmailBodyContent, err.message);
            }
        });
    }
    insert(str, index, value) {
        try {
            return str.substr(0, index) + value + str.substr(index);
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.insert, err.message);
        }
    }
    numberToBinary(numb) {
        try {
            numb = Math.round(numb);
            let binaryStr = "";
            while (numb > 0) {
                let remainder = numb % 2;
                if (remainder == 1) {
                    numb = numb - 1;
                }
                binaryStr = remainder + "" + binaryStr;
                numb = numb / 2;
            }
            return binaryStr;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.numberToBinary, err.message);
        }
    }
    getRandomGmailByIndex() {
        try {
            let today = (new Date().getTime());
            let dayRoot = (new Date(2019, 5, 25, 0, 0, 0).getTime());
            let index = Math.floor(Math.abs(today - dayRoot) / 1000);
            let email = "l.g.v.n.i.n.c.o.n.t.a.c.t.a.u.t.o.m.a.t.i.o.n.t.e.a.m";
            let hexIndex = this.numberToBinary(index);
            let hexIndexArray = hexIndex.split("");
            let emailTemp = email.substring(0, email.length - (hexIndexArray.length * 2 - 1));
            let emailTemp2 = email.substring(email.length - (hexIndexArray.length * 2 - 1), email.length);
            let emailTemp2Arr = emailTemp2.split("");
            let listPosSplice = [];
            for (let i = 0; i < hexIndexArray.length; i++) {
                let tempNum = (i * 2) + 1;
                if (hexIndexArray[i] == "0") {
                    listPosSplice.push(tempNum);
                }
            }
            for (let x = listPosSplice.length - 1; x >= 0; x--) {
                emailTemp2Arr.splice(listPosSplice[x], 1);
            }
            for (let c of emailTemp2Arr) {
                emailTemp += c;
            }
            return emailTemp + "@gmail.com";
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getRandomGmailByIndex, err.message);
        }
    }
    authorize(credentials, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            let TOKEN_PATH = `${project_path_1.default.project}/token.json`;
            console.log(credentials);
            const { client_secret, client_id, redirect_uris } = JSON.parse(credentials).installed;
            const oAuth2Client = new googleapis_1.google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
            yield fs.readFile(TOKEN_PATH, (err, token) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    return yield this.getNewToken(oAuth2Client, callback);
                yield oAuth2Client.setCredentials(JSON.parse(token));
            }));
        });
    }
    getNewToken(oAuth2Client, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            let SCOPES = ['https://mail.google.com/'];
            let TOKEN_PATH = `${project_path_1.default.project}/token.json`;
            const authUrl = yield oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPES,
            });
            console.log('Authorize this app by visiting this url:', authUrl);
            const rl = yield readline_1.default.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            yield rl.question('Enter the code from that page here: ', (code) => __awaiter(this, void 0, void 0, function* () {
                yield rl.close();
                yield oAuth2Client.getToken(code, (err, token) => __awaiter(this, void 0, void 0, function* () {
                    if (err)
                        return console.error('Error retrieving access token', err);
                    yield oAuth2Client.setCredentials(token);
                    yield fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => __awaiter(this, void 0, void 0, function* () {
                        if (err)
                            return console.error(err);
                        console.log('Token stored to', TOKEN_PATH);
                    }));
                    yield callback(oAuth2Client);
                }));
            }));
        });
    }
    static authorizeGmail() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let gmail = new Gmail();
                let credentialFile = fs.readFileSync(`${project_path_1.default.project}/credentials.json`, "utf-8");
                yield gmail.authorize(credentialFile);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.authorizeGmail, err.message);
            }
        });
    }
    static getDateISOString() {
        try {
            let toDay = new Date();
            let offset = -toDay.getTimezoneOffset();
            toDay.setHours(toDay.getHours() - offset / 60);
            let tzo = -toDay.getTimezoneOffset(), dif = tzo >= 0 ? '+' : '-', pad = function (num) {
                var norm = Math.floor(Math.abs(num));
                return (norm < 10 ? '0' : '') + norm;
            };
            let time = toDay.getFullYear() +
                '-' + pad(toDay.getMonth() + 1) +
                '-' + pad(toDay.getDate()) +
                'T' + pad(toDay.getHours()) +
                ':' + pad(toDay.getMinutes()) +
                ':' + pad(toDay.getSeconds()) +
                dif + pad(tzo / 60) +
                ':' + pad(tzo % 60);
            if (time.indexOf("+") > -1) {
                return time;
            }
            else {
                let timeArr = time.split("-");
                return time.substr(0, time.length - (timeArr[timeArr.length - 1].length + 1)) + "+00:00";
            }
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getDateISOString, err.message);
        }
    }
    static removeNotAssociatedXrayTestCase(arr) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allCaseInfo = [];
                config_report_1.ConfigReport.listAssociatedTestCase;
                for (let b = 0; b < arr.length; b++) {
                    if (arr[b].comment != "Not Associated") {
                        allCaseInfo.push(arr[b]);
                        config_report_1.ConfigReport.listAssociatedTestCase.push(arr[b]);
                    }
                    else {
                        config_report_1.ConfigReport.listNotAssociatedTestCase.push(arr[b]);
                    }
                }
                return yield allCaseInfo;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.removeNotAssociatedXrayTestCase, err.message);
            }
        });
    }
    static deduplicate(arr) {
        try {
            return arr.filter((value, index, arr) => arr.indexOf(value) === index);
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.deduplicate, err.message);
        }
    }
    static removeDuplicateTestCase(arr) {
        try {
            let tempCaseIDDup = [];
            let tempCaseID = [];
            let allCaseInfo = [];
            for (let a = 0; a < arr.length; a++) {
                tempCaseIDDup.push(arr[a].testKey);
            }
            tempCaseID = this.deduplicate(tempCaseIDDup);
            for (let b = 0; b < tempCaseID.length; b++) {
                for (let c = 0; c < arr.length; c++) {
                    if (tempCaseID[b] == arr[c].testKey) {
                        allCaseInfo.push(arr[c]);
                        break;
                    }
                }
            }
            return allCaseInfo;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.removeDuplicateTestCase, err.message);
        }
    }
    static removeDuplicateJenkinsTestCase(arr) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tempCaseIDDup = [];
                let tempCaseID = [];
                let allCaseInfo = [];
                for (let a = 0; a < arr.length; a++) {
                    tempCaseIDDup.push(arr[a].tfs_id);
                }
                tempCaseID = this.deduplicate(tempCaseIDDup);
                for (let b = 0; b < tempCaseID.length; b++) {
                    for (let c = 0; c < arr.length; c++) {
                        if (tempCaseID[b] == arr[c].tfs_id) {
                            allCaseInfo.push(arr[c]);
                            break;
                        }
                    }
                }
                return allCaseInfo;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.removeDuplicateJenkinsTestCase, err.message);
            }
        });
    }
    static removeDuplicateXrayTestCase(arr) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tempCaseIDDup = [];
                let tempCaseID = [];
                let allCaseInfo = [];
                for (let a = 0; a < arr.length; a++) {
                    tempCaseIDDup.push(arr[a].testKey);
                }
                tempCaseID = this.deduplicate(tempCaseIDDup);
                for (let b = 0; b < tempCaseID.length; b++) {
                    for (let c = 0; c < arr.length; c++) {
                        if (tempCaseID[b] == arr[c].testKey) {
                            allCaseInfo.push(arr[c]);
                            break;
                        }
                    }
                }
                return allCaseInfo;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.removeDuplicateXrayTestCase, err.message);
            }
        });
    }
    static getListSpec() {
        let configFile = `src/data-objects/XrayJira/xrayListSpec.json`;
        let dataJconfigFile = require(Utility.getPath(configFile));
        return dataJconfigFile;
    }
}
exports.Gmail = Gmail;
function walkSync(dir, filelist = []) {
    fileSystem.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            filelist = walkSync(dirFile, filelist);
        }
        catch (err) {
            if (err.code === 'ENOTDIR' || err.code === 'EBUSY') {
                if (file.indexOf(".map") < 0) {
                    filelist = [...filelist, dirFile];
                }
            }
            else
                throw err;
        }
    });
    return filelist;
}
//# sourceMappingURL=utility.js.map