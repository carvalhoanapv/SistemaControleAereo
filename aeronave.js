import { validate, typedef } from "bycontract";

//Implementação da Classe Aeronave:
export class Aeronave{
    #prefixo;
    #velocidadeCruzeiro;
    #autonomia;
//Construtor e validação dos atributos
    constructor(prefixo, velocidadeCruzeiro, autonomia){
        validate(arguments,["string","number","number"]);
        if (!this.verificaPrefixo(prefixo) || !this.verificaVelocidadeCruzeiro(velocidadeCruzeiro) || !this.verificaAutonomia(autonomia)){
            this.#prefixo = "Invalido";
            this.#velocidadeCruzeiro = 0;
            this.#autonomia = 0;
            return;
        }
        this.#prefixo = prefixo;
        this.#velocidadeCruzeiro = velocidadeCruzeiro;
        this.#autonomia = autonomia;
    }
    //Verificação dos atributos
    verificaPrefixo(prefixo){
        validate(arguments,["string"]);
        prefixo = prefixo.toLowerCase();
        return prefixo;
    }
    verificaVelocidadeCruzeiro(velocidadeCruzeiro){
        validate(arguments,["number"]);
        return velocidadeCruzeiro;
    }
    verificaAutonomia(autonomia){
        validate(arguments,["number"]);
        return autonomia;
    }
    //Getters e Setters dos atributos
    get prefixo(){
        return this.#prefixo;
    }
    get velocidadeCruzeiro(){
        return this.#velocidadeCruzeiro;
    }
    get autonomia(){
        return this.#autonomia;
    }
    set prefixo(prefixo){
        validate(arguments,["string"]);
        this.#prefixo = prefixo;
    }
    set velocidadeCruzeiro(velocidadeCruzeiro){
        validate(arguments,["number"]);
        this.#velocidadeCruzeiro = velocidadeCruzeiro;
    }
    set autonomia(autonomia){
        validate(arguments,["number"]);
        this.#autonomia = autonomia;
    }

    toString(){
        return `Aeronave: ${this.#prefixo} ${this.#velocidadeCruzeiro} ${this.#autonomia}`;
    }
}
