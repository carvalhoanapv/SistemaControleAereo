import { validate, typedef } from "bycontract";
import { Piloto } from "./piloto.js";
import nReadlines from "n-readlines";


//Implementação da Classe ServicoPilotos:
export class ServicoPilotos{

    #pilotos;
    constructor(arquivo){
        this.#pilotos = new Array();
        this.carregaDados(arquivo);
    }
    //Carregamento dos pilotos: leitura de dados
    carregaDados(arquivo){
        validate(arquivo, "string");
        this.#pilotos = [];
        let arq = new nReadlines(arquivo);
        let buf = "";
        let line = "";
        let dados = "";
        arq.next();
        while(buf = arq.next()) {
            line = buf.toString('utf8');
            dados = line.split(",");
            let matricula = dados[0];
            let nome = dados[1];
            let habilitacaoAtiva = false;
            if (Number(parseInt(dados[2]))==1){
                habilitacaoAtiva = true;
            }
            else {
                habilitacaoAtiva = false;
            }
            console.log(`Piloto: ${matricula} ${nome} ${habilitacaoAtiva}`);
            let piloto = new Piloto(matricula, nome, habilitacaoAtiva);
            this.#pilotos.push(piloto);
    } 
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
    //Exibe todos os pilotos no sistema
    todos(){
        for (let i = 0; i < this.#pilotos.length; i++){
            return `Pilotos: ${this.#pilotos[i].matricula} ${this.#pilotos[i].nome} ${this.#pilotos[i].habilitacaoAtiva}`;
        }
    }

    toString(){
        return `ServicoPilotos: ${this.#pilotos}`;
    }
}
