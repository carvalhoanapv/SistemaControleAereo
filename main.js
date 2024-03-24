import { validate } from "bycontract";
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

import { Piloto } from "./piloto.js";
import { ServicoPilotos } from "./servicoPilotos.js";
import { ServicoAerovias } from "./servicoAerovias.js";
import { Aerovia } from "./aerovia.js";
import { Aeronave } from "./aeronave.js";
import { ServicoAeronaves } from "./servicoAeronaves.js";
import { PlanoDeVoo } from "./planoDeVoo.js";
import { ServicoPlanos } from "./servicoPlanos.js";
import { AeronaveParticular } from "./aeronaveParticular.js";
import { AeronaveComercial } from "./aeronaveComercial.js";
import { AeronavePassageiros } from "./aeronavePassageiros.js";
import { AeronaveCarga } from "./aeronaveCarga.js";



//Testes:
let sp = new ServicoPilotos("pilotos.csv");
console.log (sp.pilotos);

// console.log(sp.recupera("321"));
// console.log(sp.todos());

let a = new Aeronave("ABC", 100, 1000);
console.log(a.toString());

let ap = new AeronaveParticular("ABC", 100, 1000, "Pedro");
console.log(ap.toString());

let ac = new AeronaveComercial("ABC", 100, 1000, "CIA");
console.log(ac.toString());

let ap2 = new AeronavePassageiros("ABC", 100, 1000, "CIA", 100);
console.log(ap2.toString());

let ac2 = new AeronaveCarga("ABC", 100, 1000, "CIA", 100);
console.log(ac2.toString());

let sa = new ServicoAeronaves();
sa.addAeronaves(ap2);
sa.addAeronaves(ac2);
sa.todas();

let aerovia = new Aerovia(1, "Porto", "Lisboa", 1000);
let aerovia2 = new Aerovia(2, "Paris", "Gotemburgo", 1000);
console.log(aerovia.toString());


let sa2 = new ServicoAerovias();
sa2.addAerovias(aerovia);
sa2.addAerovias(aerovia2);
sa2.recupera("Porto", "Lisboa");
sa2.recupera("Paris", "Gotemburgo");

let pv = new PlanoDeVoo(1, "ABC123", 1, "2024-01-01", "10:00", 10000, ["R1", "R4", "R6"],false);

let splanos = new ServicoPlanos();
splanos.addPlano(pv);
console.log(splanos.recupera(1))