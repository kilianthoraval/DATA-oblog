const client = require("./dbClient");

const dataMapper = {
    async getAllCategories() {
        const sqlQuery = "SELECT * FROM label;";

        try {
            const response = await client.query(sqlQuery);

            return response.rows;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    },
    async getAllPost() {
        const sqlQuery = "SELECT * FROM article;";

        try {
            const response = await client.query(sqlQuery);

            return response.rows;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    },
    async getPostById(postID) {
        const sqlQuery = `SELECT * FROM article WHERE article_id = ${postID};`;

        try {
            const response = await client.query(sqlQuery);

            return response.rows;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    },
    async insertPost(post){
        const sqlQuery = "INSERT INTO article(category,slug,title,excerpt,content) VALUES ($1,$2,$3,$4,$5)";

        try {
            const values = [];
            for (let i in post){
                values.push(post[i])
            }
            // const values = [category,slug,title,excerpt,content];
            console.log(values);
            await client.query(sqlQuery,values);

            return true
        }
        catch (error) {
            // console.error(error);
            return false;
        }
    }

};


module.exports = dataMapper;