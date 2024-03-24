import { validate, typedef } from "bycontract";
import { Aerovia } from "./aerovia.js";
import nReadlines from "n-readlines";

//Implementação da Classe OcupacaoAerovia:
export class OcupacaoAerovia {
    #aerovia

    constructor(arquivo){
        validate(arquivo, "string");
        this.#aerovia = [];
        this.carregaDados(arquivo);
    }
    //Carregamento dos dados: leitura de dados
    carregaDados(arquivo) {
        validate(arquivo, "string");
        let arq = new nReadlines(arquivo);
        let buf = "";
        let line = "";
        let dados = "";

        arq.next();
        while(buf = arq.next()) {
            line = buf.toString('utf8');
            dados = line.split(",");
            let id = Number(parseInt(dados[0]));
            console.log("ID: " + id);
            let origem = dados[1];
            let destino = dados[2];
            let tamanho = Number(parseInt(dados[3]));
            let aerovia = new Aerovia(id, origem, destino, tamanho);
            this.#aerovia.push(aerovia);
        }
    }
// Getters e Setters
    get aerovia(){
        return this.#aerovia.values();
    }

    // Refatorar
    altitudesOcupadas(idAerovia, data){

    }


    // Refatorar
    slotsOcupados(idAerovia){
        if (this.#aerovia == idAerovia){
        }
    }

    // Refatorar
    ocupa(idAerovia, data, altitude, slot){
        // se aerovia estiver livre
    }

    // Refatorar
    libera(idAerovia, data, altitude, slot){
        // se aerovia estiver ocupada, cancelar plano de voo e liberar
    }

    isOcupado(idAerovia, data, altitude, slot){
        // se aerovia estiver ocupada, retornar true
    }

    toString(){
        return `OcupacaoAerovia: ${this.#aerovia}`;
    }
}