import { action, computed, makeObservable } from 'mobx';
import { Field } from '../Field';
import { Options } from './types';

export class BaseModel<P extends Record<string, any>> extends Field<P> {
  public constructor(options?: Options<P>) {
    super(options?.props ?? ({} as P));
    makeObservable(this);
  }

  @computed
  public get props() {
    return this.value;
  }

  @action.bound
  public setProps(props: P) {
    this.setValue(props);
  }

  @action.bound
  public setProp<N extends keyof P>(propName: N, propValue: P[N]) {
    this.updateProps({ ...this.props, [propName]: propValue });
  }

  @action.bound
  public updateProps(props: Partial<P>) {
    this.setProps({ ...this.props, ...props });
  }
}
