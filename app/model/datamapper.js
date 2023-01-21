const client = require("./dbClient");

const dataMapper = {
    async getAllCategories() {
        const sqlQuery = "SELECT * FROM categories;";

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
        const sqlQuery = "SELECT * FROM post;";

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