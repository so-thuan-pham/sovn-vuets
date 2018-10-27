import * as OrderModule from "./index"

export const insertOrder2 = function insertOrder2(state: OrderModule.OrderState, payload: OrderModule.Order) {
    state.orders.push(payload);
}