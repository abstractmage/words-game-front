import { action, makeObservable } from 'mobx';
import { Nullable } from 'src/types';
import { BaseModel } from '../BaseModel';
import { Options } from './types';

export class ElementModel<
  E extends Element = Element,
  P extends React.HTMLAttributes<E> = React.HTMLAttributes<E>,
> extends BaseModel<P> {
  protected _refElement: Nullable<E> = null;

  public constructor(options?: Options<P>) {
    super(options);
    makeObservable(this);
  }

  public get refElement() {
    return this._refElement;
  }

  @action.bound
  public setRefElement(ref: Nullable<E>) {
    this._refElement = ref;
  }

  @action.bound
  public setStyle(style: React.CSSProperties) {
    this.setProp('style', style);
  }

  @action.bound
  public updateStyle(style: React.CSSProperties) {
    this.setProp('style', { ...this.props.style, ...style });
  }
}
