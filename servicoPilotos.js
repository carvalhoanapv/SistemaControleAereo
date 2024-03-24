import { validate, typedef } from "bycontract";
import { Piloto } from "./piloto.js";

//Implementação da Classe ServicoPilotos:
export class ServicoPilotos{

    #pilotos;
    constructor(){
        this.#pilotos = new Array();
    }
    //Getters e Setters
    addPiloto(piloto){
        validate(arguments,[Piloto]);
        this.#pilotos.push(piloto);
    }
    getPilotos(){
        return this.#pilotos;
    }
    recupera(matricula){
        for (let i = 0; i < this.#pilotos.length; i++){
            if (this.#pilotos[i].matricula == matricula){
                return `Piloto: ${this.#pilotos[i].matricula} ${this.#pilotos[i].nome} ${this.#pilotos[i].habilitacaoAtiva}`;
            }
        }
        return null;
    }
    //Todos os pilotos no sistema
    todos(){
        for (let i = 0; i < this.#pilotos.length; i++){
            return `Pilotos: ${this.#pilotos[i].matricula} ${this.#pilotos[i].nome} ${this.#pilotos[i].habilitacaoAtiva}`;
        }
    }

    toString(){
        return `ServicoPilotos: ${this.#pilotos}`;
    }
}
