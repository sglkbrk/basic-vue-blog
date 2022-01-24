var  Provider =   {
    get(url,query,props,cache,skip,limit) {
        return new Promise((resolve) => {
            query = encodeURIComponent(JSON.stringify(query));
            props = props ? props : "id,slug,title,content,metadata";
            cache = cache ? cache : true;
            var read_key = "yYSE7iOjsZUlAgvtuhAbUAPOFktp0oL8BTqBE1LSBPLkuwqd7k";
            var buckets = "aae94e00-7cee-11ec-beab-9dd501a9929f"
            skip = skip ? skip : 0;
            limit = limit ? limit : 0;
            fetch(url + "/" + buckets + "/objects?query="  + query + "&use_cache=" + cache + "&pretty=true&read_key=" + read_key + "&skip=" + skip + "&limit=" + limit +"&props=" + props , {
                method: 'GET'
            })
            .then(response => response.json())
            .then(json =>{
                resolve(json);
            })
        });
    },
    post(url,json) {
        return new Promise((resolve) => {
            var write_key = "nIpM8CL4DdoFqPweYQe8pQ7G7MVQA2faGLDGxjF5EKDbPwULVX";
            var buckets = "aae94e00-7cee-11ec-beab-9dd501a9929f"
            fetch(url + "/" + buckets + "/objects", {
                method: 'POST',
                headers: {
                    'Content-Type':  'application/json',
                    'Authorization': "Bearer " + write_key
                },
                body: JSON.stringify(json) 
            })
            .then(response => response.json())
            .then(json =>{
                resolve(json);
            })
        });
    }
}

export default  Provider