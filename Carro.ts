import {Veiculo} from "./Veiculo"

class Carro extends Veiculo{
    private portas: number;

    constructor(marca: string, modelo: string, placa: string, velocidade: number, velocidadeMax: number, portas: number){
        super(marca, modelo, placa, velocidade, velocidadeMax);
        this.portas = portas;
    }

    ImprimirDados(){
        console.log("\nInformações do carro:");
        super.ImprimirDados();
        console.log(`Portas: ${this.portas}`);
    }
}

export {Carro};