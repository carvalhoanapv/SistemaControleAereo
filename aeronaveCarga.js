import { validate, typedef } from "bycontract";
import { AeronaveComercial } from "./aeronaveComercial.js";

//Implementação da Classe AeronaveCarga:
export class AeronaveCarga extends AeronaveComercial{
    #pesoMax;
//Construtor e validação dos atributos
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA, pesoMax){
        super(prefixo, velocidadeCruzeiro, autonomia, nomeCIA);
        validate(arguments,["string","number","number","string","number"]);
        this.#pesoMax = pesoMax;
    }
    //Getters e Setters dos atributos
    get pesoMax(){
        return this.#pesoMax;
    }
    set pesoMax(pesoMax){
        validate(arguments,["number"]);
        this.#pesoMax = pesoMax;
    }

    toString(){
        return `AeronaveCarga: ${this.prefixo} ${this.velocidadeCruzeiro} ${this.autonomia} ${this.nomeCIA} ${this.#pesoMax}`;
    }
}