import Kadick from "..";

export default class DataBundleService {
    #kadick: Kadick;
    #key: string;
    
    constructor(kadick: Kadick, key: string) {
        this.#kadick = kadick;
        this.#key = key;
    }
}