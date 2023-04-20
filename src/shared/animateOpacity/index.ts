import anime from 'animejs';
import { ElementModel } from '../ElementModel';

export const animateOpacity = async (params: {
  element: ElementModel;
  fromOpacity: number;
  toOpacity: number;
}) => {
  const current = { opacity: params.fromOpacity };

  await anime({
    targets: current,
    opacity: params.toOpacity,
    duration: 500,
    easing: 'easeInOutQuad',
    update: () => params.element.updateStyle({ ...current }),
  }).finished;
};
