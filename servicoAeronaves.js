import { validate, typedef } from "bycontract";
import { Aeronave } from "./aeronave.js";

//Implementação da Classe ServicoAeronaves:
export class ServicoAeronaves{
    //Construtor
        #aeronaves;
        constructor(){
            this.#aeronaves = new Array();
        }
        //Getters e Setters
        addAeronaves(aeronave){
            validate(arguments,[Aeronave]);
            this.#aeronaves.push(aeronave);
        }
        getAeronaves(){
            return this.#aeronaves;
        }
    
        //Todas os aeronaves no sistema
        todas(){
            for (let i = 0; i < this.#aeronaves.length; i++){
                console.log(`Aeronaves: ${this.#aeronaves[i].prefixo} ${this.#aeronaves[i].velocidadeCruzeiro} ${this.#aeronaves[i].autonomia} ${this.#aeronaves[i].nomeCIA} ${this.#aeronaves[i].maxPassageiros} ${this.#aeronaves[i].pesoMax}`);
            }
        }
    
        toString(){
            return `ServicoAeronaves: ${this.#aeronaves}`;
        }
    }
    