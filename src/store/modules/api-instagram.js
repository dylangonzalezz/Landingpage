/**
 * Created by dylangonzalez on 22.09.17.
 */
import instafeed from 'instafeed.js';

const state = {
    instagramLoading: false,
    instafeedid1: 'image1',
    instafeedid2: 'image2',
    instafeedid3: 'image3',
    lastimage2: null,
    lastimage3: null,
}

const methods = {
    createTemplate() {

        return  '<div class="content__imagelayout">' +
                    '<img src="{{image}}" class="content__image">' +
                '</div>';
    },
}

const getters = {
    getInstagram(state) {
        return state.instagram;
    },
}

const mutations = {
}

const actions = {
    asyncChangeInstagram({ commit }) {
        var feed1 = new instafeed({
            get:"user",
            limit:1,
            resolution:"standard_resolution",
            userId:231412545,
            accessToken:"231412545.177843c.436e3207739d4e2781f5d663578cae31",
            template: methods.createTemplate(),
            target: state.instafeedid1,
        });
        var feed2 = new instafeed({
            get:"user",
            limit:2,
            sortBy: 'least-recent',
            resolution:"standard_resolution",
            userId:231412545,
            accessToken:"231412545.177843c.436e3207739d4e2781f5d663578cae31",
            template: methods.createTemplate(),
            target: state.instafeedid2,
        });
        var feed3 = new instafeed({
            get:"user",
            limit:3,
            sortBy: 'least-recent',
            resolution:"standard_resolution",
            userId:231412545,
            accessToken:"231412545.177843c.436e3207739d4e2781f5d663578cae31",
            template: methods.createTemplate(),
            target: state.instafeedid3,
        });
        var feeds = [feed1, feed2, feed3];
        for (var i = 0; i < feeds.length; i++) {
            feeds[i].run();
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}