class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }
  getProprietati() {
    return `Masina[marca=${this.marca},model=${this.model},culoare${this.culoare},kilometraj=${this.kilometraj}]`;
  }
}
function main() {
  let volvo = new Masina("Volvo", "XC90", "negru", "100000");
  let mazda = new Masina("Mazda", "CX-3", "rosu", "102000");
  let dacia = new Masina("Dacia", "DUster", "Alb", "80000");

  let masini = [volvo, mazda, dacia];
  masini.forEach((car) => {
    console.log(car.getProprietati());
  });
}
main();

// Exercitiul 2

class masinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj) {
    super(marca, model, culoare, kilometraj);
  }
  participaLaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat > 0) console.log("Am castigat locul 2");
    else console.log("Nu am castigat niciun premiu");
  }
}

function user() {
  let masinaDeCurse1 = new masinaDeCurse("Toyota", "Turbo", "rosu", "100000");
  let masinaDeCurse2 = new masinaDeCurse("Toyota", "RAV4", "gri", "120000");
  masinaDeCurse1.participaLaCampionat(2);
  masinaDeCurse2.participaLaCampionat(-1);

  console.log(masinaDeCurse1.getProprietati());
  console.log(masinaDeCurse2.getProprietati());
}

user();
