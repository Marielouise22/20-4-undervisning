"use strict";

// Her opretter jeg et array med objekter.
// Hvert objekt repræsenterer en udstilling med information om navn, datoer, placering og beskrivelse.
const exhibitions = [
  {
    id: 1,
    udstillingsnavn: "Farao tilbage",
    startdato: "2026-05-15",
    slutdato: "2026-05-31",
    placering: "Sal 1",
    beskrivelse: "Efter 20 års restaurering er farao Amenhotep III's grav blevet åbnet for publikum.Det skete i går, hvor den egyptiske turistminister, Sherif Fathy, afslørede den mere end 3000 år gamle grav.Graven er hugget ind i bjergsiden i Kongernes Dal ved Nilens vestbred overfor byen Luxor."
  },
  {
    id: 2,
    udstillingsnavn: "Farao tilbage",
    startdato: "2026-05-15",
    slutdato: "2026-05-31",
    placering: "Sal 1",
    beskrivelse: "Efter 20 års restaurering er farao Amenhotep III's grav blevet åbnet for publikum. Det skete i går, hvor den egyptiske turistminister, Sherif Fathy, afslørede den mere end 3000 år gamle grav. Graven er hugget ind i bjergsiden i Kongernes Dal ved Nilens vestbred overfor byen Luxor."
  },
  {
    id: 3,
    udstillingsnavn: "Vikingernes skatte",
    startdato: "2026-06-01",
    slutdato: "2026-06-20",
    placering: "Sal 2",
    beskrivelse: "Denne udstilling viser en samling af smykker, våben, mønter og redskaber fra vikingetiden. Genstandene stammer fra arkæologiske fund i Skandinavien og giver et spændende indblik i vikingerne som både krigere, handelsfolk og håndværkere."
  },
  {
    id: 4,
    udstillingsnavn: "Romerrigets hverdag",
    startdato: "2026-06-10",
    slutdato: "2026-06-30",
    placering: "Sal 3",
    beskrivelse: "Udstillingen fokuserer på livet i Romerriget og viser alt fra lerkrukker og lamper til mønter og beklædning. Besøgende kan opleve, hvordan både rige borgere og almindelige familier levede i en af verdenshistoriens mest indflydelsesrige civilisationer."
  }
]; 

/*
Her opretter jeg en variabel, som peger på HTML-elementet
med id'et "exhibition-container".
Det er inde i denne container, at udstillingerne skal vises.
*/
const exhibitionContainer = document.querySelector("#exhibition-container");

/*
Her opretter jeg en funktion, som skal vise udstillingerne i browseren.
Funktionen modtager en liste med udstillinger som parameter.
*/
function displayExhibitions(exhibitionList) {
  // Her tømmer jeg containeren først, så gammelt indhold fjernes.
  exhibitionContainer.innerHTML = "";

  // Her gennemløber jeg alle udstillingerne én efter én med forEach().
  exhibitionList.forEach((item) => {
    
    // Her indsætter jeg HTML-kode i containeren med data fra hvert objekt.
    exhibitionContainer.innerHTML += `
      <!-- Her opbygger jeg en HTML-struktur med data fra mit JavaScript-array -->
      <article>
        <h2>${item.udstillingsnavn}</h2>
        <h3>${item.placering}</h3>
        <p>${item.beskrivelse}</p>
        <p>Exhibition Start date <time datetime="${item.startdato}">${item.startdato}</time></p>
        <p>Exhibition End date <time datetime="${item.slutdato}">${item.slutdato}</time></p>
      </article>
    `;
  });
}

// Her kalder jeg funktionen og sender hele exhibitions-arrayet med ind som argument.
displayExhibitions(exhibitions);






// Eksempel på en anden funktion:
// Denne funktion lægger to tal sammen og viser resultatet i konsollen.

// function addTwoNumbers(a, b)
// {
//     let result = a + b;
//     console.log(result);
// }

// Her kaldes funktionen med tallene 100 og 200.
// addTwoNumbers(100, 200);