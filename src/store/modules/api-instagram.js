/**
 * Created by dylangonzalez on 22.09.17.
 */

const state = {
    instagram: 'wot',
}

const getters = {
    getInstagram(state) {
        return state.instagram;
    }
}

const mutations = {
    changeInstagram: (state, payload) => {
        state.instagram = state.instagram + payload;
    }
}

const actions = {
    asyncChangeInstagram({ commit }) {
        //var x = new Promise (function(resolve, reject) {
        //Do async action, return " kek"
        commit('changeInstagram', "");
        //});
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}