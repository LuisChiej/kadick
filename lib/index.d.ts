import { AxiosInstance } from "axios";
import AirtimeService from "./services/airtime.service";
import DataBundleService from "./services/databundle.service";
export default class Kadick {
    private _username;
    private _password;
    private _axios;
    airtime: AirtimeService;
    dataBundle: DataBundleService;
    constructor(username: string, password: string);
    get axios(): AxiosInstance;
}
