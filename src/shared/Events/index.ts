import { EventEmitter } from '../EventEmitter';
import { EventTypeMap } from '../EventEmitter/types';

export class Events<T extends EventTypeMap = EventTypeMap> {
  protected _eventEmitter: EventEmitter<T>;

  public constructor(options: { eventEmitter: EventEmitter<T> }) {
    this._eventEmitter = options.eventEmitter;
  }

  public on<E extends keyof T>(eventType: E, handler: T[E]) {
    this._eventEmitter.on(eventType, handler);
  }

  public once<E extends keyof T>(eventType: E, handler: T[E]) {
    this._eventEmitter.on(eventType, handler);
  }

  public off<E extends keyof T>(eventType: E, handler: T[E]) {
    this._eventEmitter.off(eventType, handler);
  }

  public removeAllListeners<E extends keyof T>(eventType?: E) {
    this._eventEmitter.removeAllListeners(eventType);
  }
}
