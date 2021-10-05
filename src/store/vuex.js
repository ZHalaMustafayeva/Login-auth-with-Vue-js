import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        arr: [],
        email: "a@gmail.com",
        pass: "123456",
    },
    actions: {
        updateUser(state, updateUser) {
            state.commit('UPDATE_USER', updateUser);
        }
    },
    mutations: {
       UPDATE_USER(state, payload) {
            if (state.email == payload.email2 && state.pass == payload.pass2) {
                state.arr.push(state.email);
                state.arr.push(state.pass);
                localStorage.setItem('state', JSON.stringify(state.arr));
                router.push('/home');
            }
        },
    }
});

export default store;