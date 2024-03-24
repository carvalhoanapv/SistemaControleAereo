import { validate, typedef } from "bycontract";
import { PlanoDeVoo } from "./planoDeVoo.js";

//Implementação da Classe ServicoPlanos:
export class ServicoPlanos {
    #planos;
    constructor() {
        this.#planos = new Array();
    }

    
    addPlano(plano) {
        validate(arguments, [PlanoDeVoo]);
        if (this.consiste(plano)) {
            this.#planos.push(plano);
            
        }
    }
    consiste(plano) {
        validate(arguments, [PlanoDeVoo]);
        for (let i = 0; i < this.#planos.length; i++) {
            if (this.#planos[i].id == plano.id) {
                return false;
            }
        }
        return true;
    }

    recupera(id) {
        for (let i = 0; i < this.#planos.length; i++) {
            if (this.#planos[i].id == id) {
                return `Plano: ${this.#planos[i].id} ${this.#planos[i].matricPiloto} ${this.#planos[i].idAerovia} ${this.#planos[i].data} ${this.#planos[i].horario} ${this.#planos[i].altitude} ${this.#planos[i].slots} ${this.#planos[i].cancelado}`;
            }

        }
    }

}
/Users/anapa/Documents/PUCRS/JavaScript_PUCRS_Trabalho_pt1/aeronaveParticular.js