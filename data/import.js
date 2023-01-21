require("dotenv").config();

const categoriesData = require("./categories.json");
const postData = require("./posts.json");

const { Client } = require('pg');
const client = new Client();

async function insertCategories(){
    const tableName = "label";

    await client.query(`TRUNCATE ${tableName} CASCADE;`);

    for(const data of categoriesData){
        const sqlQuery = `INSERT INTO ${tableName} (route,name) VALUES ('${data.route}','${data.label}');`;
        await client.query(sqlQuery);
        console.log(sqlQuery);
    }

    
};

async function insertArticle(){
    const tableName = "article";

    await client.query(`TRUNCATE ${tableName} CASCADE;`);

    for(const data of postData){
        const sqlQuery = `INSERT INTO ${tableName} (category,slug,title,excerpt,content) VALUES ($1,$2,$3,$4,$5);`;
        const values = [data.category, data.slug, data.title, data.excerpt, data.content];
        await client.query(sqlQuery,values);
        console.log(sqlQuery);
    }

    
};


(async ()=>{
    await client.connect();
    await insertCategories();
    await insertArticle();
    await client.end();
})();

