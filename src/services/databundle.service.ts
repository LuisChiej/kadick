import Kadick from "..";

export default class DataBundleService {
    #kadick: Kadick;
    #username: string;
    #password: string;
    
    constructor(kadick: Kadick, username: string, password: string) {
        this.#kadick = kadick;
        this.#username = username;
        this.#password = password;
    }
}