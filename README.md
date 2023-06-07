<img src="https://i.imgur.com/kKxlvJ8.png" />

Benvenuto in Deliveboo! Questa è un'applicazione web che permette agli utenti di selezionare e ordinare cibo dai ristoranti disponibili. Gli utenti possono esplorare una vasta selezione di ristoranti, accedere ai loro menù, scegliere i piatti desiderati e effettuare ordini comodamente da casa. Il progetto comprende sia il front-end che il back-end per gestire le funzionalità principali dell'applicazione.

## Funzionalità principali

- **Selezione e Filtraggio dei Ristoranti**: Gli utenti possono navigare attraverso la lista dei ristoranti disponibili e filtrarli in base al tipo di cucina desiderata.

- **Esplorazione del Menù**: Gli utenti possono esplorare il menù del ristorante selezionato, visualizzando i piatti disponibili con i relativi prezzi, descrizioni e immagini.

- **Aggiunta al Carrello**: Gli utenti possono selezionare i piatti desiderati dal menù e aggiungerli al carrello. Possono specificare la quantità di ciascun piatto e visualizzare un riepilogo del carrello.

- **Checkout e Pagamento**: Una volta che gli utenti hanno aggiunto i piatti desiderati al carrello, possono procedere al checkout. Durante il processo di checkout, verrà richiesto loro di inserire i dati per la consegna e di pagare tramite carta di credito.

- **Notifica dell'Ordine al Ristorante**: Una volta effettuato l'ordine, i dettagli dell'ordine e l'indirizzo di consegna vengono inviati al ristorante. Il ristorante riceverà le informazioni tramite email o tramite il suo pannello di amministrazione.

## Tecnologie Utilizzate

- Vue.js come framework JavaScript per la creazione dell'interfaccia utente reattiva e la gestione dello stato dell'applicazione.
- Vue Router per la gestione delle rotte e la navigazione all'interno dell'applicazione.
- SCSS come preprocessore CSS per la definizione dello stile dell'applicazione.
- Axios per la gestione delle chiamate API per ottenere i dati dai ristoranti e inviare gli ordini.
- JavaScript per la logica e l'interattività dell'applicazione.

## Installazione

Per installare e avviare il progetto in locale, segui questi passaggi:

1. Clona questa repo o scarica il codice sorgente.
2. Assicurati di avere Node.js installato sul tuo sistema.
3. Apri il terminale nella cartella del progetto.
4. Esegui il comando `npm install` o `npm i` per installare le dipendenze.
5. Esegui il comando `npm run dev` per avviare l'applicazione in modalità di sviluppo.
6. Apri il tuo browser e visita l'URL fornito nel terminale per visualizzare Deliveboo.

Assicurati di avere un server back-end funzionante e configurato correttamente per gestire le chiamate API e il salvataggio dei dati degli ordini. Il codice sorgente del back-end è disponibile nella seguente repository: [LINK_BACK].

Modifica la configurazione di Axios per puntare al corretto endpoint API nel tuo server back-end.


