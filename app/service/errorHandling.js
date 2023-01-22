const debug = require("debug")("ErrorHandling");
const {appendFile} = require('fs/promises');
const path = require('path');

const errorService = {
    /**
     * Méthode de gestion globale des erreurs
     * @param {*} err 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    manage(err,req,res,next){
        // je loggue l'erreur pour moi
        errorService.writeLog(req.url,err);

        switch(err.code){
            default:
                // j'informe l'utilisateur
                res.status(500).json(err.message);
            break;
        }
    },
    writeLog(url,err){
        // le debug n'est appelé qu'en environnement de développement
        debug(err);

        const date = new Date();

        const year = date.getUTCFullYear();
        let month = date.getUTCMonth()+1;
        if(month<10){
            month = "0"+month;
        }
        let day = date.getUTCDate();
        if(day<10){
            day = "0"+day;
        }

        // je crèe une variable qui va contenir le nom de mon fichier
        const fileName = `${year}-${month}-${day}.log`;

        const dirPath = path.resolve(__dirname,'../../logs/',fileName);
        //debug(dirPath);

        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();

        // je crèe une variable qui va contenir le message d'erreur
        const content = `${hours}:${minutes}:${seconds};${url};${err.message}\n`;

        /*
        appendFile regarde si le fichier existe
            s'il existe, il rajoute le contenu au contenu existant
            s'il n'existe pas, il le crèe et ajoute le contenu
        */
        appendFile(dirPath, content, function (err) {
            if (err) throw err;
                console.log('Saved!');
        });
    },
    _404(req,res,next){
        const error = new Error("Page non trouvée");
        error.code = 404;
        next(error);
    }
};

module.exports = errorService;