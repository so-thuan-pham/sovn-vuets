import * as ProductModule from "./index"
//export {insertOrder2} from "./mutations2"

export const insertProduct = function insertProduct(state: ProductModule.ProductState, payload: ProductModule.Product) {
    state.products.push(payload);
}