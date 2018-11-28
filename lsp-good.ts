export abstract class Lexique {
    public abstract hello();
}

export class LexiqueFrancais extends Lexique {
    public hello(){return "Salut !";}
}

export class LexiqueEuskara extends Lexique{
    public hello(){return "Adio !";}
}

export class LexiqueMultilingue {
    exemple(){
        console.log('Hello : ');
        this.printHello(new LexiqueFrancais());
        this.printHello(new LexiqueEuskara());
    }

    printHello(lexique: Lexique){
        console.log(lexique.hello());
    }
}