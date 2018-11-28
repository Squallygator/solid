export class Logger{
    log(text:string){
        console.log(text);
    }
}

export class Exemple{
    private _logger:Logger;
    constructor(){
        this._logger = new Logger();
    }
    doSometing(){
        this._logger.log('do something');
    }
}