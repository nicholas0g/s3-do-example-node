# Dettagli di questa repository

Questa repo ha lo scopo di fornire un esempio di upload file in uno spazio s3 ospitato da digitalocean.

Il codice di esempio prende un file presente in `source_file` denominato `file.txt`, lo carica nel bucket specificato dalle variabili d'ambiente e poi lo rimuove dal disco.

La funzione di upload restituisce, ad upload completato l'url del file caricato sullo spazio s3.

ACL è di tipo public-read, per tutti i file caricati. E' possibile modificare questa cosa, a seconda delle esigenze, modificando la funzione di upload.

## Variabili d'ambiente da specificare:

```
AWS_ACCESS_KEY_ID="chiave accesso s3"
AWS_SECRET_ACCESS_KEY="chiave segreta s3"
SPACEENDPOINT="endpoint s3"
SPACENAME="nome bucket"
```
