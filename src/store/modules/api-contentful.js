/**
 * Created by dylangonzalez on 22.09.17.
 */
import * as contentful from 'contentful';

const state = {
    folders: [],
};

const getters = {
    getFolders(state) {
        return state.folders;
    }
};

const mutations = {
    changeGithub: (state, getRequest) => {
        state.githubLoading = true;
        getRequest.then(function (response) {
            state.githubName = response["data"]["login"];
            state.githubAvatar = response["data"]["avatar_url"];
            state.githubCompany = response["data"]["company"];
            state.githubLocation = response["data"]["location"];
            state.githubLoading = false;
        }).catch(function (error) {
            state.githubName = "Error :(";
            state.githubAvatar = "Error ;C";
            state.githubCompany = "Error D:";
            state.githubLocation = "Error );";
            state.githubLoading = false;
        });
    },
    mutationContentfulAllImageFolders: (state, getRequest) => {
        getRequest.then(function (response) {
            // console.log(response);
            console.log(response.items[0].fields.imageFolders);
            // state.folderCount = response.items[0].fields.imageFolders.length;
            state.folders = response;
            // var i = 0;
            // response.items[0].fields.imageFolders.forEach(function(folder) {
            //     console.log(folder);
            //     state.folders[i] = folder;
            //     console.log(state.folders);
            //     i++;
            //     console.log(i);
            // });
        }).catch(function (error) {
            console.log(error)
        });
    }
};

const actions = {
    contentfulAllImageFolders({ commit }) {
        var client = contentful.createClient({
            space: 'ybwft7at3mdx',
            accessToken: 'c41759da14bff5d7e10a35e6ce0efef9059e28ce225da680ce3807302fc46e2f'
        });
        // var getRequest = client.getContentType("allImageFolders");
        var getRequest = client.getEntries({'content_type': 'allImageFolders'});
        // var getRequest = client.getContent();
        // commit('mutationContentfulAllImageFolders', getRequest);
        getRequest.then(function (response) {
            // console.log(response);
            // console.log(response.items[0].fields.imageFolders);
            // state.folderCount = response.items[0].fields.imageFolders.length;
            var i = 0;
            response.items[0].fields.imageFolders.forEach(function(folder) {
                state.folders[i] = folder;
                console.log(state.folders);
                i++;
            });
        }).catch(function (error) {
            console.log(error);
            state.folders = "error";
        });
    },
    allImageFolders({ commit }) {
        const client = contentful.createClient({
            space: 'ybwft7at3mdx',
            accessToken: 'c41759da14bff5d7e10a35e6ce0efef9059e28ce225da680ce3807302fc46e2f'
        });

        var getRequest = client.getEntries({'content_type': 'allImageFolders'});
        commit('mutationContentfulAllImageFolders', getRequest);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
