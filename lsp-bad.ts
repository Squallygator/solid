export class Rectangle {
    private hauteur:number;
    private largeur:number;
    public setHauteur(value:number){this.hauteur=value;}
    public setLargeur(value:number){this.largeur=value;}
    public getHauteur(){return this.hauteur;}
    public getLargeur(){return this.largeur;}
    public getSurface(){return this.largeur * this.hauteur;}
}

export class Carre extends Rectangle{
    public setHauteur(value:number){super.setHauteur(value);super.setLargeur(value);}
    public setLargeur(value:number){super.setHauteur(value);super.setLargeur(value);}
}

export class SRPViolationExemple{
    launch(rect:Rectangle){
        rect.setHauteur(4);
        rect.setLargeur(5);
        if( rect.getSurface() != (4*5))
        throw new Error('surface incorrecte');
    }
}