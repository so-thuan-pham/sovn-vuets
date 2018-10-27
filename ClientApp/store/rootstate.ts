import { CounterState } from "./counter";
import { OrderState } from "./order";
import { ProductState } from "./product";

export interface RootState {
    counter: CounterState,
    order: OrderState
    product: ProductState
}