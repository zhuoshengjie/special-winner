export default{
    state:{
        num:0
    },
    getters:{
        getNum(state){
            return state.num;
        }
    },
    mutations:{
        addNum(state,num){
            state.num+=num;
        },
        changeNum(state,num){
            state.num=num;
        }
    },
    //可能有异步行为，异步行为不能在mutations中，所以还要有action
    actions:{
        addNumByAct({commit},num){
            commit('addNum',num)
        },
        changeNumByAct({commit},num){
            commit('changeNum',num)
        }
    }
}