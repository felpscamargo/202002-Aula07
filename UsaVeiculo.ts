import {Veiculo} from "./Veiculo"
import {Aviao} from "./Aviao"
import {Carro} from "./Carro"

/*let marca: string = "Citroen";
let modelo: string = "C4";
let placa: string = "ABC-1234";
let velocidade: number = 100;
let velocidadeMax: number = 180;

let Carro11 = new Carro(marca, modelo, placa, velocidade, velocidadeMax, 4)

Carro11.Acelerar(10);
Carro11.Frear();
Carro11.ImprimirDados();*/

let Carro1 = new Carro("Citroen", "C4", "ABC-1234", 100, 180, 4);
let Carro2 = new Carro("VolksWagen", "AMAROK", "FDS-3678", 90, 200, 4);
let Carro3 = new Carro("BMW", "320i", "YIG-9845", 50, 220, 2);
let Carro4 = new Carro("Audi", "A3", "AFE-6558", 120, 230, 4);
let Carro5 = new Carro("Citroen", "C4 LOUNGE", "JHI-6546", 142, 220, 4);
let Carro6 = new Carro("Fiat", "Fiorino", "OWD-9873", 20, 120, 2);
let Carro7 = new Carro("Ferrari", "348 GTS", "OWM-5742", 200, 280, 2);
let Carro8 = new Carro("Honda", "Civic ", "PQN-6572", 110, 230, 4);
let Carro9 = new Carro("Jaguar", "XF", "KAS-9541", 190, 300, 2);
let Carro10 = new Carro("Mercedes-Benz", "GLS", "PQS-8574", 230, 320, 2);

let Aviao1 = new Aviao("Russo-Báltica Wagon Company", "Sikorsky Ilya Muromets", "DF-NKS", 100, 110, 16);
let Aviao2 = new Aviao("Junkers", "Junkers F13", "JF-IBH", 150, 200, 4);
let Aviao3 = new Aviao("Imperial Airways", "Handley Page Type W", "CS-ADN", 140, 167, 15);
let Aviao4 = new Aviao("Boeing", "Boeing 274", "SA-PQJ", 280, 320, 350);
let Aviao5 = new Aviao("C-47 Skytrain", "Douglas DC-3", "US-JBI", 333, 370, 28);

Carro1.ImprimirDados();
Carro2.ImprimirDados();
Carro3.ImprimirDados();
Carro4.ImprimirDados();
Carro5.ImprimirDados();
Carro6.ImprimirDados();
Carro7.ImprimirDados();
Carro8.ImprimirDados();
Carro9.ImprimirDados();
Carro10.ImprimirDados();

Aviao1.ImprimirDados();
Aviao2.ImprimirDados();
Aviao3.ImprimirDados();
Aviao4.ImprimirDados();
Aviao5.ImprimirDados();

console.log("\n==========================================");
Carro1.ImprimirNumVeiculos();
console.log("==========================================");