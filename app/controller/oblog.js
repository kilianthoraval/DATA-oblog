const dataMapper = require("../model/datamapper");

const oblogController = {
    async getPosts(req,res){
   
        const allPost = await dataMapper.getAllPost();

        if (allPost) {
            res.json(allPost);
        }
        else {
            res.json("500");
        }
    },
    
    async getCategories(req,res){
   
        const allCategories = await dataMapper.getAllCategories();

        if (allCategories) {
            res.json(allCategories);
        }
        else {
            res.json("500");
        }
    },

    async getPost(req,res){
        const idRegex = new RegExp ('^[0-9]+$');
        const postID = req.params.id;
        console.log(postID);
        if (idRegex.test(postID)){
            console.log("id ok");
            const post = await dataMapper.getPostById(postID);
            if (post){
                res.json(post[0]);
            }
            else {
                console.log("post introuvable");
                res.json("500");
            }
        }
        else {
            console.log("invalide id");
            res.json("500");
        }               
    },

    async insertPost(req,res){
        const post = req.body;
        console.log(post);
        // const category = post ["category"];
        // const slug = post ["slug"];
        // const title = post ["title"];
        // const excerpt = post ["excerpt"];
        // const content = post ["content"];
        const isSuccess = await dataMapper.insertPost(post);
        if (isSuccess){
            res.status(200).json({})
        }
        else {
            res.status(500).json({})
        }
    }
};
module.exports = oblogController;