
class CapoAbbigliamento {
    constructor(data) {
        this.id = data.id;
        this.codprod = data.codprod;
        this.collezione = data.collezione;
        this.capo = data.capo;
        this.modello = data.modello;
        this.quantita = data.quantita;
        this.colore = data.colore;
        this.prezzoIvaEsclusa = data.prezzoivaesclusa;
        this.prezzoIvaInclusa = data.prezzoivainclusa;
        this.disponibile = data.disponibile;
        this.saldo = data.saldo;
    }
    mostraPrezzo() {
        return `Prezzo ${this.capo}: €${this.prezzoIvaInclusa}`;
    }
}
// Fetch dei dati dal file JSON
fetch('Abbigliamento.json')
    .then(response => response.json())
    .then(data => {
    const capiAbbigliamento = [];
    // Creazione delle istanze dei capi d'abbigliamento
    for (const item of data) {
        const capo = new CapoAbbigliamento(item);
        capiAbbigliamento.push(capo);
    }
    console.log(capiAbbigliamento);
    // Mostra il prezzo di alcuni capi d'abbigliamento
    const capiDaMostrare = capiAbbigliamento.slice(0, 3); // faccio scegliere i primi 3 capi
    for (const capo of capiDaMostrare) {
        console.log(capo.mostraPrezzo());
    }
})
    .catch(error => {
    console.error('Si è verificato un errore durante la fetch:', error);
});
//# sourceMappingURL=script.js.map