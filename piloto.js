import { validate, typedef } from "bycontract";

//Implementação da Classe Piloto:
export class Piloto{
    #matricula;
    #nome;
    #habilitacaoAtiva;

    //Construtor e validação dos atributos
    constructor(matricula, nome, habilitacaoAtiva){
        validate(arguments,["string","string","boolean"]);
        if (!this.verificaMatricula(matricula) || !this.verificaNome(nome)){
            this.#matricula = "Invalido";
            this.#nome = "Invalido";
            return;
        }
        this.#matricula = matricula;
        this.#nome = nome;
        this.#habilitacaoAtiva = habilitacaoAtiva;
    }
    // Verificação dos atributos
    verificaMatricula(matricula){
        validate(arguments,["string"]);
        matricula = matricula.toLowerCase();
        return  matricula;
    }
    verificaNome(nome){
        validate(arguments,["string"]);
        nome = nome.toLowerCase();
        return nome;
    }
    verificaHabilitacao(habilitacaoAtiva){
        validate(arguments,["boolean"]);
        return habilitacaoAtiva;
    }
    //Getters e Setters dos atributos
    get matricula(){
        return this.#matricula;
    }
    get nome(){
        return this.#nome;
    }
    get habilitacaoAtiva(){
        return this.#habilitacaoAtiva;
    }
    set habilitacaoAtiva(habilitacaoAtiva){
        validate(arguments,["boolean"]);
        this.#habilitacaoAtiva = habilitacaoAtiva;
    }
    set matricula(matricula){
        validate(arguments,["string"]);
        this.#matricula = matricula;
    }
    set nome(nome){
        validate(arguments,["string"]);
        this.#nome = nome;
    }
}
