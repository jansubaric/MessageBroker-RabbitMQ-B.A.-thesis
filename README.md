# Sustav za aktivaciju mobilne tarife

Kao praktični dio završnog rada izrađen je sustav za aktivaciju željene mobilne tarife koji koristi posrednik poruka RabbitMQ. 
Sustav se sastoji od tri zasebne usluge. 

![pic1](https://i.postimg.cc/441G6D8S/Screenshot-40.png) 

## Pokretanje sustava
Za pokretanje sustava potrebno je instalirati node.js, express.js, MongoDB i RabbitMQ. 
Prije pokretanja sustava, potrebno je pokrenuti RabbitMQ server i pokrenuti MongoDB bazu podataka.

Potrebno je izraditi korisnički račun na Twilio usluzi za korištenje SMS usluge. Registraciju je potrebno obaviti na https://www.twilio.com. Registracijom korisnik dobiva ID računa i autorizacijski token koji se koristi unutar datoteke smsService.js. Također, potrebno je unijeti dodijeljeni telefonski broj unutar datoteke smsOptions kao vrijednost varijable "from". 

![pic](https://i.postimg.cc/tCtjzL2c/Screenshot-42.png) <br />
![pic2](https://i.postimg.cc/J0b6cCc4/Screenshot-44.png)

Prilikom prvog pokretanja usluga, potrebno je unutar direktorija svake usluge pokrenuti naredbu:
 ```bash
npm install
```
Nakon instalacije potrebnih paketa, usluge se mogu pokrenuti s naredbom za pokretanje servera:
 ```bash
npm start
```

## Funkcije sustava
Unutar dokumentacije završnog rada detaljno su objašnjene pojedine funkcije sustava i način rukovanja sa sustavom.

## Dohvaćanje menu-a i dostupnih tarifa:

METODA: ```GET``` <br />
URL: localhost:3000/api/menu

## Aktivacija željene tarife:

METODA: ```POST``` <br />
URL: localhost:3000/api/aktiviraj <br />
BODY: 
``` 
{
    "items" : [
        {"nazivTarife" : "Mala_Tarifa",
         "opisTarife": "60kn, 5GB, 80 min prema svim mrežama"
        }
    ],
    "phone_number" : "telefonski_broj"
} 
```

## Dohvaćanje informacija o zahtjevu aktivacije:

METODA: ```GET``` <br />
URL: localhost:3000/api/aktiviraj/(ID ZAHTJEVA)

## Autor

- [@jansubaric](https://www.github.com/jansubaric)
- https://zir.nsk.hr/islandora/object/riteh:3352/datastream/PDF/view

