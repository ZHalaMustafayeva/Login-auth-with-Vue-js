import Vue from 'vue';
import Vuex from 'vuex';
import router from './router'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict:true,
    state:{
        arr:[],
        email:"a@gmail.com",
        pass:"123456",
        logOut:true
    },
    getters:{
        getEmail(state){
            return state.email;
        },
        getPass(state){
            return state.pass;
        }
        
    },
    actions:{
        updateUser(state, updateUser) {
            state.commit('updateUser', updateUser);
          }
    },
    mutations:{
        updateUser(state, payload){
            if(state.email == payload.email2 && state.pass == payload.pass2){
                state.arr.push(state.email);
                state.arr.push(state.pass);
                localStorage.setItem('state', JSON.stringify(state.arr));
                router.push('/home');
            }
        },      
    }
});

export default store;