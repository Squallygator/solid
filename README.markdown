# Principes SOLID
- <span style="color:navy;font-size:+2em">**S**</span>ingle **R**esponsability **P**rinciple (**SRP**)
- <span style="color:navy;font-size:+2em">**O**</span>pen/**C**lose **P**rinciple  (**OCP**)
- <span style="color:navy;font-size:+2em">**L**</span>iskov's **S**ubstitution **P**rinciple (**LSP**)
- <span style="color:navy;font-size:+2em">**I**</span>nterface **S**egregation **P**rinciple (**ISP**)
- <span style="color:navy;font-size:+2em">**D**</span>ependency **I**nversion **P**rinciple (**DIP**)

Les exemples utilisés pour illustrer les 5 principes sont 
- écrit en TypeScript.
- Extrait ou legerement adapté d'exemple existants (CF REF)
- Sont juste là pour illustrer un principe

## **S**ingle **R**esponsability **P**rinciple (**SRP**)
    A CLASS SHOULD HAVE ONLY ONE REASON TO CHANGE.

### Exemple
Ici on manipule une classe Personne 
- pour acceder à ses caracteristiques (Nom, Prenom, Age, ...), 
- pour calculer d'autres informations, pas forcement en rapport avec les caracteristiques de base de la classe
- et pour faire persister ces infos en base de donnée (par exemple).

[**_Red_** Code](srp-bad.ts)

Voici à quoi cela peut ressembler si on "sépare les responsabilités"

[**_Green_** code](srp-good.ts)

## **O**pen/**C**lose **P**rinciple  (**OCP**)
    SOFTWARE ENTITIES (CLASSES, MODULES, FUNCTIONS, ETC.) 
    - SHOULD BE OPEN FOR EXTENSION 
    - BUT CLOSED FOR MODIFICATION.

### Exemple
Ici on considère une classe PersonneFilter qui permet à partir d'une liste de personnes de les filter
- par leur age minimum
- ou par leur nom

[**_Red_** Code](ocp-bad.ts)

Le problème qu'on a ici, c'est que 
- pour "etendre" les fonctionnalités de la classe, on doit la modifier (nouveau filtre) 
- pour modifier un filtre (filtrer par nom et prenom), on remets potentiellement en cause l'integrité de la classe entière.

Voici comment on peut s'en _dépatouiller_

[**_Green_** code](ocp-good.ts)

## **L**iskov's **S**ubstitution **P**rinciple (**LSP**)
    FUNCTIONS THAT USE POINTERS OR REFERENCES TO BASE CLASSES
    MUST BE ABLE TO USE OBJECTS OF DERIVED CLASSES
    WITHOUT KNOWING IT.

![lsp](lsp.jpg)
### Exemple

[**_Red_** Code](lsp-bad.ts)

[**_Green_** code](lsp-good.ts)

## **I**nterface **S**egregation **P**rinciple (**ISP**)
    CLIENTS SHOULD NOT BE FORCED TO DEPEND UPON INTERFACES
    THAT THEY DO NOT USE.
### Exemple
Ici on aborde le sujet classique du CRUD pour les accès aux données

[**_Red_** Code](isp-bad.ts)

Avoir à implementer les methodes CRUD alors qu'on ne fait de la lecture pourrait paraitre absurde, mais bien souvent on se retrouve à les coder sans les utiliser.

_c'est pas très écolo_ 

![troll](troll.jpg)


[**_Green_** code](isp-good.ts)

## **D**ependency **I**nversion **P**rinciple (**DIP**)

    A. HIGH LEVEL MODULES SHOULD NOT DEPEND UPON LOW LEVEL MODULES. 
    BOTH SHOULD DEPEND UPON ABSTRACTIONS.

    B. ABSTRACTIONS SHOULD NOT DEPEND UPON DETAILS. DETAILS SHOULD DEPEND UPON ABSTRACTIONS.

**Principe d'Hollywood**

    "Ne nous appelez pas, nous vous appellerons"
### Exemple
[**_Red_** Code](dip-bad.ts)

[**_Green_** code](dip-good.ts)

## Quelques References
[**Robert C. Martin (Uncle Bob)**](https://fr.wikipedia.org/wiki/Robert_C._Martin)
- [Clean Code](https://www.amazon.fr/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/)
- [Agile Principles, Patterns, and Practices in C#](https://www.amazon.fr/Agile-Principles-Patterns-Practices-C/dp/0131857258)
- [The Principles of OOD](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod) 

[**Christophe Héral**](https://fr.linkedin.com/in/christopheheral) :   [Comment rendre testable du code qui ne l'est pas ?](https://fr.slideshare.net/christopheheral/code-testable-42068077)

[**Olivier AZEAU**](https://agilitateur.azeau.com/) Le script de l'atelier  [Si t'es pas SOLID, t'es pas AGILE](https://agilitateur.azeau.com/public/agilitateur/doc/Si%20t%27es%20pas%20SOLID%2C%20t%27es%20pas%20agile.pdf)

[**Wikipedia**](https://en.wikipedia.org/wiki/SOLID) notamment pour les [References](https://en.wikipedia.org/wiki/SOLID#References)