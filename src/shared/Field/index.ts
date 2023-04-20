import { action, computed, makeObservable, observable } from 'mobx';

export class Field<T> {
  @observable.shallow
  protected _value: T;

  public constructor(value: T) {
    makeObservable(this);
    this._value = value;
  }

  @computed
  public get value() {
    return this._value;
  }

  @action.bound
  public setValue(value: T) {
    this._value = value;
    return value;
  }
}
