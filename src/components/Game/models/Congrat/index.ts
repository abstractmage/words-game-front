import { merge } from 'lodash';
import { Props as ButtonProps } from 'src/components/Button/types';
import { ElementModel } from 'src/shared/ElementModel';
import { Options } from './types';

export class Congrat extends ElementModel<HTMLDivElement> {
  public readonly button = new ElementModel<HTMLDivElement, ButtonProps>();

  public constructor(options?: Options<React.HTMLAttributes<HTMLDivElement>>) {
    super(merge(options, { props: { style: { display: 'none', opacity: 0 } } }));
  }
}
