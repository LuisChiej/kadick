import Kadick from "..";
import { OrderRequest } from "../models/types/OrderRequest.t";
import { OrderResponse } from "../models/types/OrderResponse.t";
export default class AirtimeService {
    #private;
    constructor(kadick: Kadick, key: string);
    buy(request: Omit<OrderRequest, 'key1' | 'signature'>): Promise<OrderResponse | null>;
}
