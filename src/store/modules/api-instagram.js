/**
 * Created by dylangonzalez on 22.09.17.
 */
import instafeed from 'instafeed.js';

const state = {
    instagramLoading1: false,
    instagramLoading2: false,
    instagramLoading3: false,
    instafeedid1: 'image1',
    instafeedid2: 'image2',
    instafeedid3: 'image3',
}

const methods = {
    createTemplate() {

        return  '<div class="content__imagelayout">' +
                    '<img src="{{image}}" class="content__image">' +
                '</div>';
    }
}

const getters = {
    getInstagramLoading1(state) {
        return state.instagramLoading1;
    },
    getInstagramLoading2(state) {
        return state.instagramLoading2;
    },
    getInstagramLoading3(state) {
        return state.instagramLoading3;
    }
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
            error: function(error){
                console.log(error);
                console.log("Kek");
            }
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