class Veiculo {
    marca;
    forca_motor;
    cor;
    eletrico_manual;

    constructor(marca, forca_motor, cor, eletrico_manual) { 
        this.marca = marca;
        this.forca_motor = forca_motor;
        this.cor = cor;
        this.eletrico_manual = eletrico_manual;
    }

    tabela_fip() { 
        console.log(`Descrição do carro: Marca: ${this.marca}, Cor: ${this.cor}, Torke: ${this.forca_motor}, Câmbio ${this.eletrico_manual}.`);
    }

}

class VeiculoUsado extends Veiculo{ 
    constructor(marca, forca_motor, cor, eletrico_manual, estado) {
        super(marca, forca_motor, cor, eletrico_manual, estado);
        this.estado = estado;
    }
    tabela_fip_usados() {
        console.log(
          `Descrição do carro: Marca: ${this.marca}, Cor: ${this.cor}, Torke: ${this.forca_motor}, Câmbio${this.eletrico_manual}. Carro é ${this.estado}`);
     }
}

class OrganizarExibicao {
    static mostraSeparador(){
        console.log('\n\n');
     }

}

const uno = new Veiculo('Fiat', '1.0', "cinza", 'manual');//Veiculo
const unoUsado = new VeiculoUsado('Fiat', '1.0', "cinza", 'manual', 'usado'); //VeiculoUsado

const fiatUsado = new VeiculoUsado('Siena', '1.9', "Branca", 'manual', 'usado');
const LamborguiniUsado = new VeiculoUsado('Lambo', '4.0', 'Verder', 'Manual', 'usada');

console.log(uno);
console.log(fiatUsado);
console.log(LamborguiniUsado);

uno.tabela_fip();
OrganizarExibicao.mostraSeparador();
unoUsado.tabela_fip_usados();