///funzioni upload s3
const aws = require('aws-sdk');
const fs = require('fs');
const spacesEndpoint = new aws.Endpoint(process.env.SPACEENDPOINT);
const s3 = new aws.S3({
  endpoint: spacesEndpoint
});

//filelocation=posizione del file da caricare
module.exports=(filelocation,callback) => {
    // Leggo il contenuto del file dal disco
    const fileContent = fs.readFileSync(filelocation);

    // Setting up S3 upload parameters
    const params = {
        Bucket: process.env.SPACENAME,
        ACL:'public-read',
        Key: String(Date.now()) + '.' + filelocation.split('.').slice(-1)[0], //rinomino casualmente il file e aggiungo la sua estenzione
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {

        if (err) {
            throw err;
        }

        //cancello dal disco il file caricato
        fs.unlinkSync(filelocation); 

        //funzione terminata, restituisco posizione file
        callback(data.Location);
    });
};