/**
 * Created by dylangonzalez on 20.09.17.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import apiInstagram from './modules/api-instagram';
import apiGithub from './modules/api-github';
import apiContentful from './modules/api-contentful';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
    } ,
    getters: {
    },
    mutations: {
    },
    modules: {
        apiInstagram,
        apiGithub,
        apiContentful
    }
});