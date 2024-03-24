import { validate, typedef } from "bycontract";
import { Aerovia } from "./aerovia.js";

//Implementação da Classe ServicoAerovias:
export class ServicoAerovias {
    #aerovias;
    //Construtor
    constructor() {
        this.#aerovias = new Array();
    }
    //Getters e Setters
    addAerovias(aerovia) {
        validate(arguments, [Aerovia]);
        this.#aerovias.push(aerovia);
    }

    //Recupera uma determinada aerovia
    recupera(origem, destino) {
        for (let i = 0; i < this.#aerovias.length; i++) {
            if (this.#aerovias[i].origem == origem && this.#aerovias[i].destino == destino) {
                console.log(`Aerovia: ${this.#aerovias[i].id} ${this.#aerovias[i].origem} ${this.#aerovias[i].destino} ${this.#aerovias[i].tamanho}`);
            }
        }
        return null;
    }
}
