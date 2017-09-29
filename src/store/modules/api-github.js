/**
 * Created by dylangonzalez on 22.09.17.
 */
import axios from 'axios'
import { getGithubdata } from '../../helpers/api-helper'

const state = {
    githubName: '',
    githubAvatar: '',
    githubCompany: '',
    githubLocation: '',
    githubLoading: false
};

const getters = {
    getGithubName(state) {
        return state.githubName;
    },
    getGithubAvatar(state) {
        return state.githubAvatar;
    },
    getGithubCompany(state) {
        return state.githubCompany;
    },
    getGithubLocation(state) {
        return state.githubLocation;
    },
    getGithubLoading(state) {
        return state.githubLoading;
    }
};

const mutations = {
    changeGithub: (state, getRequest) => {
        state.githubLoading = true;
        getRequest.then(function (response) {
            console.log(response["data"]);
            state.githubName = response["data"]["login"];
            state.githubAvatar = response["data"]["avatar_url"];
            state.githubCompany = response["data"]["company"];
            state.githubLocation = response["data"]["location"];
            state.githubLoading = false;
        }).catch(function (error) {
            console.log(error);
            state.githubName = "Error :(";
            state.githubAvatar = "Error ;C";
            state.githubCompany = "Error D:";
            state.githubLocation = "Error );";
            state.githubLoading = false;
        });
    }
};

const actions = {
    asyncChangeGithub({ commit }) {
        var changeGithub = new Promise(function(resolve, reject) {
            var getRequest = axios.get('https://api.github.com/users/dylangonzalezz');
            commit('changeGithub', getRequest);
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
