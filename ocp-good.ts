import { Personne } from './srp-good';

export interface IPersonneFilter{
    filter(personnes:Personne[] ) :Personne[]; 
}

export class PersonneFilter{
    By(personnes:Personne[], filterSpec:IPersonneFilter){
        return filterSpec.filter(personnes);
    }
}

export class PersonneFilterByNom implements IPersonneFilter{
    constructor(private nom:string){};

    filter(personnes: Personne[]): Personne[] {
        return personnes.filter((personne)=>personne.nom==this.nom);
    }
}

export class PersonneFilterByMinAge implements IPersonneFilter{
    constructor(private age:number){};
    
    filter(personnes: Personne[]): Personne[] {
        return personnes.filter((personne)=>personne.age>=this.age);
    }
}

export class Exemple{
    constructor(){
        let personnes:Personne[] = [
            { id:1, nom:"Michel", prenom:"Jackie", age:21 },
            { id:2, nom:"Martin", prenom:"Robert C.", age:66 },
            { id:3, nom:"Beck", prenom:"Kent", age:67 }, 
            { id:4, nom:"Fowler", prenom:"Martin", age:65 }
        ];
        let filter= new PersonneFilter();
        let soixanteEtplus = filter.By(personnes, new PersonneFilterByMinAge(60));
        let martins = filter.By(personnes, new PersonneFilterByNom('Martin'));
    };
}