import axios, { AxiosInstance } from "axios";
import AirtimeService from "./services/airtime.service";
import DataBundleService from "./services/databundle.service";
import base64 from "./utils/base64";

export default class Kadick {
    private _username: string;
    private _password: string;
    private _axios: AxiosInstance;

    public airtime: AirtimeService;
    public dataBundle: DataBundleService;

    constructor(username: string, password: string) {
        this._username = username;
        this._password = password;
        const instance = axios.create({
            baseURL: 'https://b2b.kadickeplus.com'
        });
        instance.defaults.headers.post['Content-Type'] = 'application/json';
        instance.defaults.headers.common['Accept'] = 'application/json';
        this._axios = instance;

        this.airtime = new AirtimeService(this, base64(this._password, this._username))
        this.dataBundle = new DataBundleService(this, base64(this._password, this._username))
    }

    get axios(): AxiosInstance {
        return this._axios;
    }
}