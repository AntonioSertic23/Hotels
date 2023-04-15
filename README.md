# Hoteli

## Web aplikacija za vođenje lanca hotela

Stranica Hoteli je nastala na faksu kao projekt za konstrukcijske vježbe za predmet **Osnove Web Programiranja**.

Tema projekta je izabrana zbog riješavanja potencijalne problematike vođenja lanca hotela.

Stranica prikazuje sva naučena znanja o osnovnim web tehnologijama **HTML**, **CSS** (uz **Bootstrap 3.3.7**) i **JavaScript** (uz **jQuery**). A za bazu se koristio **Firebase**.

[![My Skills](https://skills.thijs.gg/icons?i=html,css,bootstrap,js,jquery,firebase)](https://skills.thijs.gg)

Omogućeni su prijava i registracija putem firebase-a uz potpunu provjeru svih unesenih parametara kao što je na primjer provjera pravilnog formata email-a.

---

### Stranica sadrži 3 vrste pregleda:

1. Za običnog gosta stranice koji vidi samo popis hotela.
1. Za prijavljenog korisnika koji može rezervirati sobe u hotelima.
1. Za prijavljenog admina koji može upravljati samim hotelima. Uređivat, brisat i dodavat ih te uklanjati same rezervacije. Ima uvid u statistiku te može dodavati novog admina.

---

### Pokretanje projekta

Za pokretanje projekta potrebno je kreirati vlastitu Firebase bazu po primjeru koji možete naći u `assets/podaci.json`, te dobivene podatke za spajanje zalijepiti u `js/firebase_config.js`.
