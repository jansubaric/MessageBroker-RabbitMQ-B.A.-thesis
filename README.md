# Sustav za aktivaciju mobilne tarife

Kao praktični dio završnog rada izrađen je sustav za aktivaciju željene mobilne tarife koji koristi posrednik poruka RabbitMQ. 
Sustav se sastoji od tri zasebne usluge. 

## Pokretanje sustava
Za pokretanje sustava potrebno je instalirati node.js, express.js, MongoDB i RabbitMQ. 
Prije pokretanja sustava, potrebno je pokrenuti RabbitMQ server i pokrenuti MongoDB bazu podataka.

Potrebno je izraditi korisnički račun na Twilio usluzi za korištenje SMS usluge. Registraciju je potrebno obaviti na https://www.twilio.com. Registracijom korisnik dobiva ID računa i autorizacijski token koji se koristi unutar datoteke smsService.js. Također, potrebno je unijeti dodijeljeni telefonski broj unutar datoteke smsOptions kao vrijednost varijable "from". 

![alt text](https://i.postimg.cc/tCtjzL2c/Screenshot-42.png)

Prilikom prvog pokretanja usluga, potrebno je unutar direktorija svake usluge pokrenuti naredbu:
 ```bash
npm install
```
Nakon instalacije potrebnih paketa, usluge se mogu pokrenuti s naredbom:
 ```bash
npm start
```

## Funkcije sustava
Unutar dokumentacije završnog rada detaljno su objašnjene pojedine funkcije sustava i način rukovanja sa sustavom.


## Autor

- [@jansubaric](https://www.github.com/jansubaric)

