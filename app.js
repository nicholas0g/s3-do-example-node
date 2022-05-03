const upload = require('./upload');

upload(
    './source_file/file.txt', //carico su s3 il file denominato file.txt nella cartella ./source_file
    function (posizione) { 
        console.log(posizione);
    })