import { validate, typedef } from "bycontract";
import { AeronaveComercial } from "./aeronaveComercial.js";

//Implementação da Classe AeronavePassageiros:
export class AeronavePassageiros extends AeronaveComercial{
    #maxPassageiros;
//Construtor e validação dos atributos
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA, maxPassageiros){
        super(prefixo, velocidadeCruzeiro, autonomia, nomeCIA);
        validate(arguments,["string","number","number","string","number"]);
        this.#maxPassageiros = maxPassageiros;
    }
    //Getters e Setters dos atributos
    get maxPassageiros(){
        return this.#maxPassageiros;
    }
    set maxPassageiros(maxPassageiros){
        validate(arguments,["number"]);
        this.#maxPassageiros = maxPassageiros;
    }

    toString(){
        return `AeronavePassageiros: ${this.prefixo} ${this.velocidadeCruzeiro} ${this.autonomia} ${this.nomeCIA} ${this.#maxPassageiros}`;
    }
}
