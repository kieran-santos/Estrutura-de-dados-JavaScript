class Fila {
    constructor() {
        this.pacientes = [];
    }

    adicionarPaciente(nome, gravidade) {
        let paciente = {
            nome: nome,
            gravidade: gravidade
        };

        // Adiciona o paciente na fila
        this.pacientes[this.pacientes.length] = paciente;

        // Ordena a fila com base na gravidade
        this.ordenarFila();

        console.log(`${nome} adicionado à fila.`);
    }

    ordenarFila() {
        // Algoritmo de ordenação simples (bubble sort) para ordenar os pacientes por gravidade
        for (let i = 0; i < this.pacientes.length - 1; i++) {
            for (let j = 0; j < this.pacientes.length - 1 - i; j++) {
                if (this.pacientes[j].gravidade < this.pacientes[j + 1].gravidade) {
                    // Troca
                    let temp = this.pacientes[j];
                    this.pacientes[j] = this.pacientes[j + 1];
                    this.pacientes[j + 1] = temp;
                }
            }
        }
    }

    atenderPaciente() {
        if (this.pacientes.length === 0) {
            console.log("Fila vazia.");
            return;
        }

        const pacienteAtendido = this.pacientes[0]; // Primeiro paciente
        // Realoca os pacientes para remover o primeiro
        for (let i = 0; i < this.pacientes.length - 1; i++) {
            this.pacientes[i] = this.pacientes[i + 1];
        }
        this.pacientes.length--; // Reduz o tamanho do array

        console.log(`O paciente ${pacienteAtendido.nome} foi atendido.`);
    }

    listarPacientes() {
        if (this.pacientes.length === 0) {
            console.log("Nenhum paciente na fila.");
            return;
        }
        for (let i = 0; i < this.pacientes.length; i++) {
            console.log(`Paciente: ${this.pacientes[i].nome}, Gravidade: ${this.pacientes[i].gravidade}`);
        }
    }

    estaVazia() {
        const vazia = this.pacientes.length === 0;
        console.log(vazia);
        return vazia;
    }
}

let fila = new Fila();

fila.adicionarPaciente("Joaquim", 3);
fila.adicionarPaciente("Marquinhos", 1);
fila.adicionarPaciente("Leandrinho", 2);
fila.adicionarPaciente("Felisbela", 3);

fila.estaVazia();
fila.listarPacientes();
fila.atenderPaciente();
