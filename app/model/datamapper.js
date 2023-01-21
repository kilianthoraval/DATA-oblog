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
    }

};


module.exports = dataMapper;