import EventEmitterBase from 'events';
import { EventTypeMap } from './types';

export class EventEmitter<T extends EventTypeMap> {
  protected _events: EventEmitterBase;

  public constructor() {
    this._events = new EventEmitterBase();
  }

  public on<E extends keyof T>(eventType: E, handler: T[E]) {
    this._events.on(eventType as string | symbol, handler);
  }

  public once<E extends keyof T>(eventType: E, handler: T[E]) {
    this._events.once(eventType as string | symbol, handler);
  }

  public off<E extends keyof T>(eventType: E, handler: T[E]) {
    this._events.off(eventType as string | symbol, handler);
  }

  public removeAllListeners<E extends keyof T>(eventType?: E) {
    this._events.removeAllListeners(eventType as string | symbol | undefined);
  }

  public emit<E extends keyof T>(eventType: E, ...args: Parameters<T[E]>) {
    this._events.emit(eventType as string | symbol, ...args);
  }

  public setMaxListeners(numberOfListeners: number) {
    this._events.setMaxListeners(numberOfListeners);
  }
}
