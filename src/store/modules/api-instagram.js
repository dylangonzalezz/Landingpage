/**
 * Created by dylangonzalez on 22.09.17.
 */
import instafeed from 'instafeed.js';

const state = {
    instagramLoading: false,
    instafeedid1: 'image1',
    instafeedid2: 'image2',
    instafeedid3: 'image3',
    instafeedid4: 'image4',
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
            accessToken:"231412545.177843c.819e5e902fd34a92adc08c22668a8f47",
            template: methods.createTemplate(),
            target: state.instafeedid1,
        });
        var feed2 = new instafeed({
            get:"user",
            limit:2,
            sortBy: 'least-recent',
            resolution:"standard_resolution",
            userId:231412545,
            accessToken:"231412545.177843c.819e5e902fd34a92adc08c22668a8f47",
            template: methods.createTemplate(),
            target: state.instafeedid2,
        });
        var feed3 = new instafeed({
            get:"user",
            limit:3,
            sortBy: 'least-recent',
            resolution:"standard_resolution",
            userId:231412545,
            accessToken:"231412545.177843c.819e5e902fd34a92adc08c22668a8f47",
            template: methods.createTemplate(),
            target: state.instafeedid3,
        });
        var feed4 = new instafeed({
            get:"user",
            limit:4,
            sortBy: 'least-recent',
            resolution:"standard_resolution",
            userId:231412545,
            accessToken:"231412545.177843c.819e5e902fd34a92adc08c22668a8f47",
            template: methods.createTemplate(),
            target: state.instafeedid4,
        });
        var feeds = [feed1, feed2, feed3, feed4];
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