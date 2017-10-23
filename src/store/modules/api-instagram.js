/**
 * Created by dylangonzalez on 22.09.17.
 */
import axios from 'axios';
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
    // uselastimage2(image) {
    //     console.log(image.created_time);
    //     console.log(state.lastimage2)
    //     if(image.created_time > state.lastimage2) {
    //         console.log("true");
    //         state.lastimage2 = image.created_time;
    //         return "wewe";
    //     } else {
    //         console.log("false");
    //         state.lastimage2 = image.created_time;
    //         return image.id;
    //     }
    // },
    // uselastimage3(image) {
    //     if(image.created_time > state.lastimage3) {
    //         state.lastimage3 = image.created_time;
    //         return 'nothing';
    //     } else {
    //         state.lastimage3 = image.created_time;
    //         return image.id;
    //     }
    // }
}

const getters = {
    getInstagram(state) {
        return state.instagram;
    },
}

const mutations = {
    changeInstagram: (state, payload) => {
        // var load = new Promise (function(resolve, reject) {
        // Do async action, return " kek"
        // });
        //
        // for (i = 0; i < payload.length; i++) {
        //
        // }
    }
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
            // filter: function() {
            //     return "weww";
            // }
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
            // filter: function(image) {
            //     if(image.created_time > state.lastimage3) {
            //         console.log("true");
            //         state.lastimage3 = image.created_time;
            //         return "wew";
            //     } else {
            //         console.log("false");
            //         state.lastimage3 = image.created_time;
            //         return image.id;
            //     }
            // }
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
            // filter: function(image) {
            //     methods.uselastimage3(image);
            // }
        });
        var feeds = [feed1, feed2, feed3];
        // commit('changeInstagram', feeds);
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