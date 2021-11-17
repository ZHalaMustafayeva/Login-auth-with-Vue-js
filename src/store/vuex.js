import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        arr: [],
        email: "a@gmail.com",
        pass: "123456",
        post: []
    },
    getters: {
        allPost: (state) => state.post
    },
    actions: {
        updateUser(state, updateUser) {
            state.commit('UPDATE_USER', updateUser);
        },
        getPost({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    commit('SET_POST', response.data)

                })
        },
        async addPost({ commit }, title) {
            await axios.post("https://reqres.in/api/users",
              { title, complete: false })
              .then(response => {
                commit('NEW_POST', response.data.data)
              })
          },
    },

    mutations: {
        SET_POST(state, post) {
            state.post = post
        },
        NEW_POST(state, post) {
            state.post.unshift(post)
          },
        UPDATE_USER(state, payload) {
            if (state.email == payload.email2 && state.pass == payload.pass2) {
                state.arr.push(state.email);
                state.arr.push(state.pass);
                localStorage.setItem('state', JSON.stringify(state.arr));
                router.push('/home');
            }
        }
}
});

export default store;