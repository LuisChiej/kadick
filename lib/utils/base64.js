"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base64 = (password, username) => {
    const date = String(Date.now());
    // return btoa(`Trqw568xD12eby@X|rzaraugoc816|${date}`)
    return btoa(`${password}|${username}|${date}`);
};
exports.default = base64;
