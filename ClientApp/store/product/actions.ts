import * as ProductModule from "./index"
import { BareActionContext } from "vuex-typex";
import { RootState } from "../rootstate";
import { mutations } from "./product";
import productStore from "./product";

export const newProduct = function newProduct(context: BareActionContext<ProductModule.ProductState, RootState>, payload: ProductModule.Product) {
    mutations.insertProduct(payload);
}

export const fetchProducts = function fetchProducts(context: BareActionContext<ProductModule.ProductState, RootState>) : ProductModule.Product[] {
    return productStore.state.products;
}