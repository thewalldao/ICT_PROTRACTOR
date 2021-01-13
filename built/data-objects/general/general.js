"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentTransferTabItem = exports.MainTransferTabItem = exports.EditMode = exports.Button = exports.State = exports.CoordinateType = void 0;
var CoordinateType;
(function (CoordinateType) {
    CoordinateType["LEFT"] = "left";
    CoordinateType["RIGHT"] = "right";
    CoordinateType["TOP"] = "top";
    CoordinateType["BOTTOM"] = "bottom";
})(CoordinateType = exports.CoordinateType || (exports.CoordinateType = {}));
var State;
(function (State) {
    State["ON"] = "On";
    State["OFF"] = "Off";
})(State = exports.State || (exports.State = {}));
var Button;
(function (Button) {
    Button["F1"] = "f1";
    Button["F2"] = "f2";
    Button["F3"] = "f3";
    Button["F4"] = "f4";
    Button["F5"] = "f5";
    Button["F6"] = "f6";
    Button["F7"] = "f7";
    Button["F8"] = "f8";
    Button["F9"] = "f9";
    Button["F10"] = "f10";
    Button["F11"] = "f11";
    Button["F12"] = "f12";
    Button["ENTER"] = "enter";
    Button["ESCAPE"] = "escape";
    Button["CTRL_A"] = "ctrl+a";
    Button["CTRL_C"] = "ctrl+c";
    Button["CTRL_V"] = "ctrl+v";
    Button["BACKSPACE"] = "backspace";
    Button["TAB"] = "tab";
})(Button = exports.Button || (exports.Button = {}));
var EditMode;
(function (EditMode) {
    EditMode[EditMode["READ"] = 0] = "READ";
    EditMode[EditMode["EDIT"] = 1] = "EDIT";
})(EditMode = exports.EditMode || (exports.EditMode = {}));
var MainTransferTabItem;
(function (MainTransferTabItem) {
    MainTransferTabItem["SKILLS"] = "Skills";
    MainTransferTabItem["AGENTS"] = "Agents";
    MainTransferTabItem["DYNAMIC_ADDRESS_BOOK"] = "Dynamic Address Book";
})(MainTransferTabItem = exports.MainTransferTabItem || (exports.MainTransferTabItem = {}));
var AgentTransferTabItem;
(function (AgentTransferTabItem) {
    AgentTransferTabItem["ALL_AGENTS"] = "All Agents";
    AgentTransferTabItem["ADMIN"] = "Admin";
    AgentTransferTabItem["BULK_UPLOADER"] = "Bulk Uploader";
    AgentTransferTabItem["MAX_AUTOMATION"] = "MAX Automation";
})(AgentTransferTabItem = exports.AgentTransferTabItem || (exports.AgentTransferTabItem = {}));
//# sourceMappingURL=general.js.map