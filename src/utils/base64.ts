const base64 = (password: string, username: string): string => {
    const date = String(Date.now());
    // return btoa(`Trqw568xD12eby@X|rzaraugoc816|${date}`)
    return btoa(`${password}|${username}|${date}`);
}

export default base64;