import { validate, typedef } from "bycontract";
import { Aeronave } from "./aeronave.js";

//Implementação da Classe AeronaveComercial:
export class AeronaveComercial extends Aeronave{
    #nomeCIA;
//Construtor e validação dos atributos
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA){
        super(prefixo, velocidadeCruzeiro, autonomia);
        validate(arguments,["string","number","number","string"]);
        this.#nomeCIA = nomeCIA;
    }
    //Getters e Setters dos atributos
    get nomeCIA(){
        return this.#nomeCIA;
    }
    set nomeCIA(nomeCIA){
        validate(arguments,["string"]);
        this.#nomeCIA = nomeCIA;
    }

    toString(){
        return `AeronaveComercial: ${this.prefixo} ${this.velocidadeCruzeiro} ${this.autonomia} ${this.#nomeCIA}`;
    }
}