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
class User {
    constructor(username, password, comfirmpas, email) {
        this.userName = username;
        this.email = email;
        this.passWord = password;
        this.comfirmPassword = comfirmpas;
    }
    getUsername() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userName;
        });
    }
    getPassWord() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.passWord;
        });
    }
    getEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.email;
        });
    }
    getPassWordComfirm() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.comfirmPassword;
        });
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map