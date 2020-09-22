class Veiculo{
    public marca: string;
    public modelo: string;
    private placa: string;
    private velocidade: number;
    protected velocidadeMax: number;
    static numVeiculos: number = 0;

    constructor(marca: string, modelo: string, placa: string, velocidade: number, velocidadeMax: number){
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.velocidade = velocidade;
        this.velocidadeMax = velocidadeMax;
        Veiculo.numVeiculos += 1;
    }

    Acelerar(quantia:number): boolean{
        if(quantia > 10){
            console.log("Não pode aumentar a velocidade mais do que 10km/h");
            return false;
        }
        else if((this.velocidade + quantia) > this.velocidadeMax){
            console.log("Não pode ultrapassar a velocidade máxima do carro");
            return false
        }
        else{
          this.velocidade += quantia;
          return true;
        }
    }

    Frear(){
        console.log(`Começou a frear em ${this.velocidade} km/h`);
        let cont: number = 0;
        for(let i = this.velocidade; i > 0; i = i - 10){      
            cont += 1;
        }
        console.log("Tempo para frear totalmente o carro: " + cont)
        this.velocidade = 0;
    }

    ImprimirDados(){
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Placa: " + this.placa);
        console.log("Velocidade atual: " + this.velocidade);
        console.log("Velocidade máxima: " + this.velocidadeMax);
    }

    ImprimirNumVeiculos(){
        console.log(`Número de veiculos instanciados: ${Veiculo.numVeiculos}`);
    }
}

export {Veiculo};