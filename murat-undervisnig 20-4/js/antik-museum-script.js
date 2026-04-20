"use strict";

// Her opretter jeg et array med objekter.
// Hvert objekt repræsenterer en udstilling med information om navn, datoer, placering, periode og beskrivelse.
const exhibitions = [
  {
    id: 1,
    udstillingsnavn: "Farao tilbage",
    startdato: "2026-05-15",
    slutdato: "2026-05-31",
    placering: "Sal 1",
    periode: "Oldtid",
    beskrivelse: "Efter 20 års restaurering er farao Amenhotep III's grav blevet åbnet for publikum. Det skete i går, hvor den egyptiske turistminister, Sherif Fathy, afslørede den mere end 3000 år gamle grav. Graven er hugget ind i bjergsiden i Kongernes Dal ved Nilens vestbred overfor byen Luxor."
  },
  {
    id: 2,
    udstillingsnavn: "Tutankhamons skatte",
    startdato: "2026-05-20",
    slutdato: "2026-06-10",
    placering: "Sal 2",
    periode: "Oldtid",
    beskrivelse: "Denne udstilling præsenterer kopier og udvalgte genstande inspireret af fundene fra Tutankhamons grav. Besøgende kan opleve guldsmykker, ceremonielle masker og relikvier, som giver indblik i det egyptiske kongehus og dets begravelsesritualer."
  },
  {
    id: 3,
    udstillingsnavn: "Vikingernes skatte",
    startdato: "2026-06-01",
    slutdato: "2026-06-20",
    placering: "Sal 3",
    periode: "Vikingetid",
    beskrivelse: "Denne udstilling viser en samling af smykker, våben, mønter og redskaber fra vikingetiden. Genstandene stammer fra arkæologiske fund i Skandinavien og giver et spændende indblik i vikingerne som både krigere, handelsfolk og håndværkere."
  },
  {
    id: 4,
    udstillingsnavn: "Romerrigets hverdag",
    startdato: "2026-06-10",
    slutdato: "2026-06-30",
    placering: "Sal 1",
    periode: "Antikken",
    beskrivelse: "Udstillingen fokuserer på livet i Romerriget og viser alt fra lerkrukker og olielamper til mønter og beklædning. Besøgende kan opleve, hvordan både rige borgere og almindelige familier levede i en af verdenshistoriens mest indflydelsesrige civilisationer."
  },
  {
    id: 5,
    udstillingsnavn: "Græske guder og templer",
    startdato: "2026-07-01",
    slutdato: "2026-07-25",
    placering: "Sal 2",
    periode: "Antikken",
    beskrivelse: "Udstillingen sætter fokus på det antikke Grækenlands religion og arkitektur. Her kan man se statuer, tempelmodeller, keramik og inskriptioner, som fortæller om gudedyrkelse, ofringer og hverdagsliv i de græske bystater."
  },
  {
    id: 6,
    udstillingsnavn: "Pompejis sidste dag",
    startdato: "2026-07-10",
    slutdato: "2026-08-05",
    placering: "Sal 3",
    periode: "Antikken",
    beskrivelse: "Denne udstilling skildrer livet i Pompeji før Vesuvs ødelæggende udbrud i år 79. Genstande som mosaikker, køkkenredskaber, fresker og smykker viser, hvordan mennesker levede i byen, inden den blev dækket af aske."
  },
  {
    id: 7,
    udstillingsnavn: "Mumier og myter",
    startdato: "2026-08-01",
    slutdato: "2026-08-28",
    placering: "Sal 1",
    periode: "Oldtid",
    beskrivelse: "Her kan besøgende lære om egyptiske mumificeringsmetoder, troen på livet efter døden og de mange myter om faraoer og præster. Udstillingen rummer sarkofager, amuletter og tekstfragmenter med religiøse symboler."
  },
  {
    id: 8,
    udstillingsnavn: "Bronzealderens hemmeligheder",
    startdato: "2026-08-12",
    slutdato: "2026-09-02",
    placering: "Sal 2",
    periode: "Bronzealder",
    beskrivelse: "I denne udstilling vises våben, smykker, redskaber og offerfund fra bronzealderen. Genstandene fortæller om handel, håndværk og religiøse ritualer i en tid, hvor metalforarbejdning ændrede samfundet markant."
  },
  {
    id: 9,
    udstillingsnavn: "Etruskernes verden",
    startdato: "2026-09-05",
    slutdato: "2026-09-25",
    placering: "Sal 1",
    periode: "Antikken",
    beskrivelse: "Udstillingen præsenterer den gådefulde etruskiske kultur, som eksisterede i Italien før Romerrigets storhedstid. Besøgende kan opleve gravgaver, bronzefigurer, keramik og vægmalerier, der giver indblik i etruskernes tro og dagligliv."
  },
  {
    id: 10,
    udstillingsnavn: "Runer og nordiske symboler",
    startdato: "2026-09-15",
    slutdato: "2026-10-10",
    placering: "Sal 3",
    periode: "Jernalder",
    beskrivelse: "Denne udstilling udforsker runesten, indskrifter og symboler fra den nordiske oldtid. Her vises originale fund og rekonstruktioner, som hjælper besøgende med at forstå sproget, troen og kommunikationen i det tidlige Norden."
  },
  {
    id: 11,
    udstillingsnavn: "Mesopotamiens byer",
    startdato: "2026-10-01",
    slutdato: "2026-10-30",
    placering: "Sal 2",
    periode: "Oldtid",
    beskrivelse: "Udstillingen handler om nogle af verdens første bysamfund i Mesopotamien. Lertavler, segl, redskaber og modeller af templer viser udviklingen af skrift, handel og organiseret samfundsliv mellem Eufrat og Tigris."
  },
  {
    id: 12,
    udstillingsnavn: "Antikke smykker og skønhedsidealer",
    startdato: "2026-10-12",
    slutdato: "2026-11-05",
    placering: "Sal 1",
    periode: "Antikken",
    beskrivelse: "Her kan man opleve halskæder, armbånd, hårnåle og kosmetikbeholdere fra oldtiden. Udstillingen fortæller, hvordan skønhed, status og identitet blev udtrykt gennem smykker og kropsudsmykning i forskellige antikke kulturer."
  },
  {
    id: 13,
    udstillingsnavn: "Vikingernes langskibe",
    startdato: "2026-11-10",
    slutdato: "2026-11-30",
    placering: "Sal 2",
    periode: "Vikingetid",
    beskrivelse: "Denne udstilling handler om vikingernes imponerende langskibe, som blev brugt til handel, krig og opdagelsesrejser. Besøgende kan opleve modeller af skibe, navigationsredskaber og fund fra havne og kystområder, som viser vikingerne som dygtige søfarere."
  },
  {
    id: 14,
    udstillingsnavn: "Vikingernes guder og ritualer",
    startdato: "2026-12-01",
    slutdato: "2026-12-20",
    placering: "Sal 1",
    periode: "Vikingetid",
    beskrivelse: "Udstillingen sætter fokus på den nordiske mytologi og vikingernes religiøse forestillinger. Her kan man se offerfund, figurer, smykker og symboler, som knytter sig til guder som Odin, Thor og Freja samt ritualer i hverdagen og ved særlige begivenheder."
  },
  {
    id: 15,
    udstillingsnavn: "Jernalderens krigere",
    startdato: "2027-01-05",
    slutdato: "2027-01-25",
    placering: "Sal 1",
    periode: "Jernalder",
    beskrivelse: "Denne udstilling viser våben, skjolde, hjelme og gravfund fra jernalderen. Besøgende får indblik i krigskultur, forsvar og sociale hierarkier i en periode, hvor både kamp og status spillede en vigtig rolle i samfundet."
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

  const html= exhibitionList.map((item) => {
    // her opbygger vi er nyt array (liste) med map () basseret på vores exhibition-array - `opbygger vi vores HTML-Streng(HTML-struktur) 
    return `
    <article>
        <h2>${item.udstillingsnavn}</h2>
        <h3> ${item.periode}</h3>
        <h3>${item.placering}</h3>
        <p>${item.beskrivelse}</p>
        <p>Exhibition Start date <time datetime="${item.startdato}">${item.startdato}</time></p>
        <p>Exhibition End date <time datetime="${item.slutdato}">${item.slutdato}</time></p>
      </article>
    `;
  }).join(""); // her samler vi det hele med join ("") til én samlet HTML-streng

  exhibitionContainer.innerHTML= html;

}

// Her kalder jeg funktionen og sender hele exhibitions-arrayet med ind som argument.
displayExhibitions(exhibitions);





