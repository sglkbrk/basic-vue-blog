import Provider from "../service/Provider.js"

var PostService =  {
    getMedhod(query,props,cache,skip) {
        var limit = ""
        if(skip){
            skip = (skip - 1) * 6
            limit = skip + 6
        }  
        return new Promise((resolve) => {
            Provider.get("https://api.cosmicjs.com/v2/buckets",query,props,cache,skip,limit).then(res=>{
                resolve(res)
            })
        });
    },
    postMedhod(json) {
        return new Promise((resolve) => {
            Provider.post("https://api.cosmicjs.com/v2/buckets",json).then(res=>{
                resolve(res)
            })
        });
    },
    getTrace(){
        return new Promise((resolve) => {
            fetch("https://www.cloudflare.com/cdn-cgi/trace" , {
                method: 'GET'
            })
            .then(json =>{
                resolve(json);
            })
        });
    }
}
export default PostService;