Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

COME SVOLGO QUESTO ESERCIZIO:

- nell'index html creo un container che conterrà un altro div contenitore di immagini che scorrono
- aggiungo dei div che saranno le frecce su e giù le quali applicherò degli eventi quando le si cliccheranno e su css gli darò position absolute
- aggiungo un div che contiene le immagini per rendermi conto di come verranno visualizzate
- ricreo quei div contenitori di immagini in javascript 
- con il ciclo for faccio si che le immagini cambino ogni volta per tutte le immagini che ho precedentemente messo in un array
- creo delle variabili e le associo ai div di index.html contenitori delle frecce su e giù
- grazie ad addEventListener(click) creo la funzione la quale al click del mouse sull'elemento, si scatenano degli eventi
- per gli eventi di cambio delle immagini uso delle condizioni


