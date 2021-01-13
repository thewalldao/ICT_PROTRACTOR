"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_wrapper_1 = require("@Utilities/protractor-wrappers/error-wrapper");
class StopWatch {
    startClock() {
        try {
            if (this._startTime == null) {
                this._startTime = new Date().getTime();
            }
            else {
                throw Error("Clock has already started");
            }
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.startClock, err.message);
        }
    }
    getElapsedTime() {
        try {
            let endTime = new Date().getTime();
            return endTime - this._startTime;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getElapsedTime, err.message);
        }
    }
    getElapsedTimeInSecond() {
        try {
            let endTime = new Date().getTime();
            return (endTime - this._startTime) / 1000;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getElapsedTimeInSecond, err.message);
        }
    }
    getTimeLeftInSecond(maxTimeoutInSecond) {
        try {
            return maxTimeoutInSecond - this.getElapsedTimeInSecond();
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getTimeLeftInSecond, err.message);
        }
    }
}
exports.default = StopWatch;
//# sourceMappingURL=stop-watch.js.map