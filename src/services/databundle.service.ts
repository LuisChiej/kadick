import Kadick from "..";
import { OrderRequest } from "../models/types/OrderRequest.t";
import { OrderResponse } from "../models/types/OrderResponse.t";
import base64 from "../utils/base64";
import getSignature from "../utils/getSignature";

export default class DataBundleService {
    #kadick: Kadick;
    #username: string;
    #password: string;
    
    constructor(kadick: Kadick, username: string, password: string) {
        this.#kadick = kadick;
        this.#username = username;
        this.#password = password;
    }

    async buy(request: Omit<OrderRequest, 'key1' | 'signature'>): Promise<OrderResponse | null> {
        const key = base64(this.#password, this.#username)
        const url = request.operatorCode === '9M' ? '9mflexisale' : 'flexisale'

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    ...request,
                    key1: key,
                    signature: getSignature()
                }
            )
    
            if(response.status === 200) return response.data;
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async getDataPlans(request: Pick<OrderRequest, 'operatorId'>): Promise<OrderResponse | null> {
        const key = base64(this.#password, this.#username)
        const url = 'oprdataplans'

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    ...request,
                    key1: key,
                    signature: getSignature()
                }
            )

            if(response.status === 200) return response.data;
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}