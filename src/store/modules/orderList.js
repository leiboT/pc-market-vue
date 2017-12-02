import Vue from 'vue'

const state = {
    orderList: [],
    params: {v: 'getOrderList'},
    currentOrder: 'asc'
};
const getters = {
    getOrderList (state){
        return state.orderList
    }
};
const actions = {
    fetchOrderList ({commit, state}){
        Vue.http.post('//db.leibo.group', state.params).then(
            (res) =>{
                commit('updateOrderList', res.data.data.list)
            },(err) => {

            }
        )
    }
};
const mutations = {
    updateOrderList (state, payload){
        state.orderList = payload
    },
    updateParams (state, {key, val}){
        state.params[key] = val;
    },
    sortOrderList (state, headItem){
        if (state.currentOrder === 'asc') {
            state.currentOrder = 'desc'
        }
        else if (state.currentOrder === 'desc') {
            state.currentOrder = 'asc'
        }
        state.orderList = _.orderBy(state.orderList, headItem.key, state.currentOrder)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
