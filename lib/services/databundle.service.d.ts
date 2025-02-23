import Kadick from "..";
import { OrderRequest } from "../models/types/OrderRequest.t";
import { OrderResponse } from "../models/types/OrderResponse.t";
export default class DataBundleService {
    #private;
    constructor(kadick: Kadick, username: string, password: string);
    buy(request: Omit<OrderRequest, 'key1' | 'signature'>): Promise<OrderResponse | null>;
    getDataPlans(request: Pick<OrderRequest, 'operatorId'>): Promise<OrderResponse | null>;
}
