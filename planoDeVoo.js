import { validate, typedef } from "bycontract";

//Implementação da Classe PlanoDeVoo:
export class PlanoDeVoo {
    #id;
    #matricPiloto;
    #idAerovia;
    #data;
    #horario;
    #altitude;
    #slots;
    #cancelado;
    constructor(id, matricPiloto, idAerovia, data, horario, altitude, slots, cancelado){
        this.#id = id;
        this.#matricPiloto = matricPiloto;
        this.#idAerovia = idAerovia;
        this.#data = data;
        this.#horario = horario;
        this.#altitude = altitude;
        this.#slots = slots;
        this.#cancelado = cancelado;
    }

    //Getters e Setters dos atributos
    get id(){
        return this.#id;
    }
    get matricPiloto(){
        return this.#matricPiloto;
    }
    get idAerovia(){
        return this.#idAerovia;
    }
    get data(){
        return this.#data;
    }
    get horario(){
        return this.#horario;
    }
    get altitude(){
        return this.#altitude;
    }
    get slots(){
        return this.#slots;
    }
    get cancelado(){
        return this.#cancelado;
    }

    set id(id){
        this.#id = id;
    }
    set matricPiloto(matricPiloto){
        this.#matricPiloto = matricPiloto;
    }
    set idAerovia(idAerovia){
        this.#idAerovia = idAerovia;
    }
    set data(data){
        this.#data = data;
    }
    set horario(horario){
        this.#horario = horario;
    }
    set altitude(altitude){
        this.#altitude = altitude;
    }
    set slots(slots){
        this.#slots = slots;
    }
    set cancelado(cancelado){
        this.#cancelado = cancelado;
    }

}