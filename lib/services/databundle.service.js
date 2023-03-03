"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataBundleService {
    #kadick;
    #username;
    #password;
    constructor(kadick, username, password) {
        this.#kadick = kadick;
        this.#username = username;
        this.#password = password;
    }
}
exports.default = DataBundleService;
