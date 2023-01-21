const dataMapper = require("../model/datamapper");

const oblogController = {
    async getPost(req,res){
   
        const allPost = await dataMapper.getAllPost();

        if (allPost) {
            // je passe les valeurs à ma vue vie les locals
            res.locals.brands = allPost;

            res.render("brands");
        }
        else {
            res.render("500");
        }
    },
    
    async getCategories(req,res){
   
        const allCategories = await dataMapper.getAllCategories();

        if (allCategories) {
            // je passe les valeurs à ma vue vie les locals
            res.locals.brands = allCategories;

            res.render("brands");
        }
        else {
            res.render("500");
        }
    }
};
module.exports = oblogController;