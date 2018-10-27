export interface Order {
    id: number,
    items: Item[]
}

export interface Item {
    id: number,
    qty: number,
    productName: string
}

export interface OrderState {
    orders: Order[]
}

export const newDummyOrder = function newDummyOrder() : Order {
    return {} as Order;
}