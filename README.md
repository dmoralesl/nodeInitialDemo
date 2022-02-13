# Joc de daus amb persistència MySql

## Requisits
S'haurà de tenir node i npm instal·lat a la màquina, així com un servidor de MySql executant-se al port per defecte.   
A més, caldrà tenir dues variables d'entorn definides anomenades MYSQL_USER i MYSQL_PASSWORD amb les credencials de la base de dades. Alternativament, es pot obviar aquest pas si tenim un usuari "root" amb contrasenya "root", ja que són els valors per defecte. 
Les variables d'entorn també poden estar definides a un fitxer .env a l'arrel del projecte.

## DB Setup
Per poder executar l'aplicació, s'haurà de crear en primer lloc la base de dades. 
Per aquest exercici la base de dades s'anomenarà dice_game.
La seqüència de comandaments per poder crear-la és la següent:

```bash
mysql -u <user> -p
```
S'haurà de substituir \<user> pel nom d'usuari amb el que tenim credencials per accedir a la consola de MySql. Al donar-li a ENTER ens preguntarà pel password de l'usuari i si s'introdueix correctament accedirem a la consola de MySql.   
Un cop dintre de la consola de MySql s'haurà d'executar la següent sentència SQL: 
```SQL 
CREATE DATABASE IF NOT EXISTS dice_game;
```
Per confirmar que els pasos s'han efectuat de forma correcta i que s'ha creat la base de dades, hauríem de veure el següent missatge a la consola.
```MYSQL
Query OK, 1 row affected (0.02 sec)
```

## Application setup
Per poder executar l'aplicació (després de enllestir la base de dades), haurem d'instal·lar el projecte amb el commandament: 
```bash
npm install
```


## Execució de la API 
Per tenir el servidor en marxa i poder fer-lo servir, haurem d'haver completat els dos punts anterior amb èxit. S'haurà de llançar el següent comandament per activar el servidor: 
```bash
npm start
```