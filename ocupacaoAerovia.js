import { validate, typedef } from "bycontract";
import { ServicoAerovias } from "./servicoAerovias.js";
import { ServicoPlanos } from "./servicoPlanos.js";

//Implementação da Classe OcupacaoAerovia:
export class OcupacaoAerovia{
    #idAerovia;
    #data;

    constructor(idAerovia){
        validate(arguments,["number"]);
        this.#idAerovia = idAerovia;
    }

    altitudesOcupadas(idAerovia, data){
        let altitudes = new Array();
        for (let i = 0; i < ServicoPlanos.id.length; i++){
            if (ServicoAerovias.aerovias[i].id == idAerovia && ServicoAerovias.aerovias[i].data == data){
                altitudes.push(ServicoAerovias.aerovias[i].altitude);
            }
        }
        return altitudes;

    }
}