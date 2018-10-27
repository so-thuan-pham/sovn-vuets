import { ProductState, Product } from ".";
import { storeBuilder } from "../store";
import { OrderState } from "../order";
import * as ProductActions from './actions';
import * as ProductMutations from './mutations';

//State
const state: ProductState = {
    products: [] as Product[]
}

export const b = storeBuilder.module<ProductState>("product", state);
const stateGetter = b.state();

//Actions
export const actions = { 
    newProduct: b.dispatch(ProductActions.newProduct),
    fetchProducts: b.dispatch(ProductActions.fetchProducts),
}

//Mutations
export const mutations = {
    insertProduct: b.commit(ProductMutations.insertProduct)
}

// exported "counter" module interface
const productStore = {
    get state() { return stateGetter() },
    mutations: mutations,
    actions: actions
}

export default productStore