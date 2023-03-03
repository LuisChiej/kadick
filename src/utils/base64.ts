const btoa = (text: string) => {
    return Buffer.from(text, 'binary').toString('base64');
};

const base64 = (password: string, username: string): string => {
    let addedTime = 0;
    const offset = (new Date()).getTimezoneOffset();
    if(offset === 0) {
        addedTime = 3600000
    }
    const date = Math.round((Date.now() + addedTime)/1000);
    return btoa(`${password}|${username}|${date.toString()}`);
}

export default base64;