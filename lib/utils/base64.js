"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base64 = (password, username) => {
    const date = Math.round(Date.now() / 1000);
    return btoa(`${password}|${username}|${date}`);
};
exports.default = base64;
