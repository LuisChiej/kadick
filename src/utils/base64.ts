const base64 = (password: string, username: string): string => {
    const date = Math.round(Date.now()/1000);
    return btoa(`${password}|${username}|${date.toString()}`);
}

export default base64;