export class Personne {
  public id: number;
  public nom: string;
  public prenom: string;
  public age: number;
}

export class PersonneDataAccess {
  insert(personne: Personne) {
    /*...*/
  }

  delete(id: number) {
    /*...*/
  }

  update(personne: Personne) {
    /*...*/
  }
}

export class PersonneInfo {
  private personne: Personne;
  constructor(personne: Personne) {
    this.personne = personne;
  }

  isValid(): boolean {
    const isValid = true;
    return isValid;
  }

  getAge(): number {
    const age = 0;
    return age;
  }
}
