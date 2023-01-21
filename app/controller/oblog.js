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
    }
};
module.exports = oblogController;