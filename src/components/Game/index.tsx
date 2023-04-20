import cn from 'classnames';
import { observer } from 'mobx-react';
import { Button } from '../Button';
import { GameField } from '../GameField';
import { Icon } from '../Icon';
import { useStyles } from './styles';
import { Props } from './types';

export const Game = observer(function Game(props: Props) {
  const { className, model, ...otherProps } = props;
  const styles = useStyles();

  return (
    <div {...otherProps} className={cn(styles.main, className)}>
      {model.gameFields.map((gameField, i) => (
        <GameField {...gameField.props} key={i} model={gameField} />
      ))}
      <Button {...model.backButton.props} className="backButton" color="#293671" isHoverable>
        <Icon type="leftCaret" />
      </Button>
      <Button {...model.hintButton.props} className="hintButton" color="#293671" isHoverable>
        <Icon type="bulb" />
      </Button>
    </div>
  );
});
