import Kadick from "..";
import { OrderRequest } from "../models/types/OrderRequest.t";
import { OrderResponse } from "../models/types/OrderResponse.t";
import getSignature from "../utils/getSignature";

export default class AirtimeService {
    #kadick: Kadick;
    #key: string;
    
    constructor(kadick: Kadick, key: string) {
        this.#kadick = kadick;
        this.#key = key;
    }

    async buy(request: Omit<OrderRequest, 'key1' | 'signature'>): Promise<OrderResponse | null> {
        const url = 'flexisale'

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    ...request,
                    key1: this.#key,
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