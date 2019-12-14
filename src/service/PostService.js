
import Provider from "../service/Provider.js"

export default class PostService extends Provider {

    getPost (id) {
        return new Promise(
            this.ajaxGet(this.postServicename, "getPost", id).then(res =>{
                Promise.
            })
        );
    }
    getCategoryPosts (id) {
        return new Promise(
            this.ajaxGet(this.postServicename, "getCategoryPosts", id).then(function (res) {
                 resolve(value);
            })
        );
    }
}

module.exports = {
    PostService: PostService
}