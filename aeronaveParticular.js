import { validate, typedef } from "bycontract";
import { Aeronave } from "./aeronave.js";

//Implementação da Classe AeronaveParticular:
export class AeronaveParticular extends Aeronave{
    #respmanutencao;
//Construtor e validação dos atributos
    constructor(prefixo, velocidadeCruzeiro, autonomia, respmanutencao){
        super(prefixo, velocidadeCruzeiro, autonomia);
        validate(arguments,["string","number","number","string"]);
        this.#respmanutencao = respmanutencao;
    }
    //Getters e Setters dos atributos
    get respmanutencao(){
        return this.#respmanutencao;
    }
    set respmanutencao(respmanutencao){
        validate(arguments,["string"]);
        this.#respmanutencao = respmanutencao;
    }

    toString(){
        return `AeronaveParticular: ${this.prefixo} ${this.velocidadeCruzeiro} ${this.autonomia} ${this.#respmanutencao}`;
    }

}