"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btoa = (text) => {
    return Buffer.from(text, 'binary').toString('base64');
};
const base64 = (password, username) => {
    let addedTime = 0;
    const offset = (new Date()).getTimezoneOffset();
    if (offset === 0) {
        addedTime = 3600000;
    }
    const date = Math.round((Date.now() + addedTime) / 1000);
    return btoa(`${password}|${username}|${date.toString()}`);
};
exports.default = base64;
