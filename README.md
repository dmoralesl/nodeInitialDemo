# Joc de daus amb persistència MySql

## Requisits
S'haurà de tenir node i npm instal·lat a la màquina, així com una base de dades de Mongo executant-se al port per defecte.   
També hi ha una part de variables d'entorn a configurar. Per a injectar les varibles d'entorn es poden definir directament a la màquina des de la que llancem (amb SET o EXPORT, segons SO). Però també es pot deixar un fitxer .env a l'arrel del projecte amb les variables necessàries. I aquestes variables es poden consultar al fitxer example.env que hi ha a l'arrel del projecte.   
Els valors de les variables poden ser al gust. Però s'ha de tenir en compte que si es canvia el valor de ADMIN_USERNAME o ADMIN_USERNAME s'haurà de modificar també el body de la petició a /login que hi ha guardada a la col·lecció de Postman adjunta a aquest projecte.

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
La primera tasca serà aconseguir un token d'accés fent ús de la petició Login que es troba a l'arrel de la col·lecció, no està a cap carpeta. Els valors de l'usuari i contrasenya seran els que s'hagin fixat a les variables d'entorn. Si no s'han canviat, funcionarà amb els valors ja guardats a la petició.  
La resposta d'aquesta petició serà un string llarg que haurem de guardar a una variable de l'entorn de la col·lecció amb el nom de "token". Aquest valor serà injectat als headers de cada petició amb el format "Bearer {{token}}".

Després haurem de crear un usuari, que es podrà fer a través de la petició Create player o Create anon player de la carpeta Players. Amb l'ID que retorni aquesta petició haurem de fixar una variable de l'entorn de la col·lecció amb nom "playerId" i com a valor l'ID que s'ha retornat. Aquesta variable servirà per altres peticions com la de crear partides, modificar l'usuari o esborrar totes les partides de l'usuari.
