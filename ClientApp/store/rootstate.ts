import { CounterState } from "./counter";
import { OrderState } from "./order";
import { Product } from "./product";

export interface RootState {
    counter: CounterState,
    order: OrderState
}