import { validate, typedef } from "bycontract";

//Implementação da Classe Aerovia:
export class Aerovia{
    #id;
    #origem;
    #destino;
    #tamanho;
//Construtor e validação dos atributos
    constructor(id, origem, destino, tamanho){
        validate(arguments,["number","string","string","number"]);
        this.#id = id;
        this.#origem = origem;
        this.#destino = destino;
        this.#tamanho = tamanho;
    }
//Getters e Setters dos atributos
    get id(){
        return this.#id;
    }
    get origem(){
        return this.#origem;
    }
    get destino(){
        return this.#destino;
    }
    get tamanho(){
        return this.#tamanho;
    }
    set id(id){
        validate(arguments,["number"]);
        this.#id = id;
    }
    set origem(origem){
        validate(arguments,["string"]);
        this.#origem = origem;
    }
    set destino(destino){
        validate(arguments,["string"]);
        this.#destino = destino;
    }
    set tamanho(tamanho){
        validate(arguments,["number"]);
        this.#tamanho = tamanho;
    }

    toString(){
        return `Aerovia: ${this.#id} ${this.#origem} ${this.#destino} ${this.#tamanho}`;
    }
}
