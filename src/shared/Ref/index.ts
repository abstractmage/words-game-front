import { action, makeObservable, observable } from 'mobx';
import { Nullable } from '../../types';
import { EventEmitter } from '../EventEmitter';
import { Events } from '../Events';
import { EventTypeMap } from './types';

export class Ref<T> {
  protected readonly _eventEmitter = new EventEmitter<EventTypeMap>();

  @observable
  protected _current: Nullable<T> = null;

  public constructor() {
    makeObservable(this);
  }

  public get events() {
    return new Events({ eventEmitter: this._eventEmitter });
  }

  public get current() {
    return this._current;
  }

  public get isSet() {
    return !!this.current;
  }

  @action.bound
  public setCurrent(current: Nullable<T>) {
    this._current = current;

    if (current) {
      this._eventEmitter.emit('set');
    } else {
      this._eventEmitter.emit('unset');
    }
  }

  @action.bound
  public updateCurrentIfNeed(current: Nullable<T>) {
    if (current === this._current) return;
    this.setCurrent(current);
  }

  @action.bound
  public setIfNeed(current: Nullable<T>) {
    this.updateCurrentIfNeed(current);
  }
}
