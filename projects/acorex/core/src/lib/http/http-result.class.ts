import { AXHttpError } from './http-error.class';

export class AXHttpResult<T> {
    private _executor: (result: (e?: T) => void, error: (e?: AXHttpError) => void, complete: () => void) => void;
    constructor(
        executor: (
            result: (e?: T) => void,
            error: (e?: AXHttpError) => void,
            complete: () => void
        ) => void
    ) {
        this._executor = executor;
        setTimeout(() => {
            this._executor(this.resultAction, this.errorAction, this.completeAction);
        }, 50);
    }

    private resultAction: (e?: T) => void;
    private errorAction: (e?: AXHttpError) => void;
    private completeAction: () => void;

    result(action: (e?: T) => void): AXHttpResult<T> {
        this.resultAction = action;
        return this;
    }
    error(action: (e?: AXHttpError) => void): AXHttpResult<T> {
        this.errorAction = action;
        return this;
    }
    complete(action: () => void): AXHttpResult<T> {
        this.completeAction = action;
        return this;
    }
}
