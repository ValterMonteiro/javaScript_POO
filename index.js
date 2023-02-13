class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Valter";
cliente1.cpf = 11122233301;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11122233302;

const contaCorrenteValter = new ContaCorrente();
contaCorrenteValter.saldo = 0;
contaCorrenteValter.agencia = 1001;

console.log(contaCorrenteValter.saldo);
contaCorrenteValter.saldo = 100;
console.log(contaCorrenteValter.saldo);

contaCorrenteValter.sacar(200); //se o valor for maior, não executa
console.log(contaCorrenteValter.saldo);


console.log(cliente1);
console.log(cliente2);