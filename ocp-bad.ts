import { Personne } from './srp-bad';

export class PersonneFilter{
    byName(personnes:Personne[] , nom:string):Personne[]{
        return personnes.filter((personne)=>personne.nom==nom);
    }
    byAge(personnes:Personne[] , age:number):Personne[]{
        return personnes.filter((personne)=>personne.age>=age);
    }
}