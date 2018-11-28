export interface ILogger {
  log(text: string);
}

export class Logger implements ILogger {
  log(text: string) {
    console.log(text);
  }
}

export class AnyRepository {
  private _logger: ILogger;

  constructor(logger: ILogger) {
    this._logger = logger;
  }

  doSometing() {
    this._logger.log('do something');
  }
}

export class exemple {
  go() {
    let repo = new AnyRepository(new Logger());
    repo.doSometing();
  }
}
