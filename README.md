# Joc de daus amb persistència MySql

## Requisits
S'haurà de tenir node i npm instal·lat a la màquina, així com una base de dades de Mongo executant-se al port per defecte.   


## Application setup
Per poder executar l'aplicació (després d'enllestir la base de dades), haurem d'instal·lar el projecte amb el commandament: 
```bash
npm install
```


## Execució de la API 
Per tenir el servidor en marxa i poder fer-lo servir, haurem d'haver completat els dos punts anterior amb èxit. S'haurà de llançar el següent comandament per activar el servidor: 
```bash
npm start
```

## Provant els endpoints
Hi ha a l'arrel del directori un fitxer anomenat "postman_collection.json" que es pot importar amb el programa Postman i conté una petició d'exemple per a cada endpoint.    
La primera tasca serà crear un usuari, que es podrà fer a través de la petició Create player o Create anon player de la carpeta Players. Amb l'ID que retorni aquesta petició haurem de fixar una variable de l'entorn de la col·lecció amb nom "playerId" i com a valor l'ID que s'ha retornat. Aquesta variable servirà per altres peticions com la de crear partides, modificar l'usuari o esborrar totes les partides de l'usuari.
