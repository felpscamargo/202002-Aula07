import {Veiculo} from "./Veiculo"

class Aviao extends Veiculo{
    private NumPassageiros: number;

    constructor(marca: string, modelo: string, placa: string, velocidade: number, velocidadeMax: number, NumPassageiros: number){
        super(marca, modelo, placa, velocidade, velocidadeMax);
        this.NumPassageiros = NumPassageiros;
    }

    ImprimirDados(){
        console.log("\nInformações do avião:");
        super.ImprimirDados();
        console.log(`Número de passageiros: ${this.NumPassageiros}`);
    }
}

export {Aviao};