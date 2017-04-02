import { Observable } from 'rxjs/Observable';

// TODO: methods copied from Angular core/src/util/lang.ts; cannot reuse them because of 'ɵ' sign in export

/**
 * Determine if the argument is shaped like a Promise.
 */
export function isPromise(obj: any): obj is Promise<any> {
    return !!obj && typeof obj.then === 'function';
}

/**
 * Determine if the argument is an Observable.
 */
export function isObservable(obj: any | Observable<any>): obj is Observable<any> {
    return !!obj && typeof obj.subscribe === 'function';
}