"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btoa = (text) => {
    return Buffer.from(text, 'binary').toString('base64');
};
const base64 = (password, username) => {
    const date = Math.round(Date.now() / 1000);
    return btoa(`${password}|${username}|${date.toString()}`);
};
exports.default = base64;
