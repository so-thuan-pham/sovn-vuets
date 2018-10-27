import * as OrderModule from "./index"
import { BareActionContext } from "vuex-typex";
import { RootState } from "../rootstate";
import { mutations } from "./order";

export const newOrder = function newOrder(context: BareActionContext<OrderModule.OrderState, RootState>, payload: OrderModule.Order) {
    mutations.insertOrder(payload);
}


export const deleteOrder = function deleteOrder(context: BareActionContext<OrderModule.OrderState, RootState>, payload: OrderModule.Order) {
    mutations.deleteOrder(payload);
}