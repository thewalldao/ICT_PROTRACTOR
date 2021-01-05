"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZone = void 0;
class TimeZone {
    init(timeStandard, timeZone, timeZoneName) {
        this.timeStandard = timeStandard;
        this.timeZone = timeZone;
        if (timeZoneName == '') {
            this.timeZoneName = timeZoneName;
        }
        return this;
    }
}
exports.TimeZone = TimeZone;
//# sourceMappingURL=time-zone.js.map