import cn from 'classnames';
import { observer } from 'mobx-react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { GameField } from './components/GameField';
import { useStyles } from './styles';
import { Props } from './types';

export const Game = observer(function Game(props: Props) {
  const { model, ...otherProps } = props;
  const styles = useStyles();

  return (
    <div
      {...{ ...otherProps, ...model.props }}
      style={{ ...otherProps.style, ...model.props.style }}
      className={cn(styles.main, otherProps.className)}
    >
      {model.gameFields.map((gameField, i) => (
        <GameField {...gameField.props} key={i} model={gameField} />
      ))}
      <div {...model.congrat.props} className="congrat">
        <div className="text">МОЛОДЕЦ!</div>
        <Button {...model.congrat.button.props} className="button" color="#293671" isHoverable>
          Начать сначала
        </Button>
      </div>
      <Button {...model.backButton.props} className="backButton" color="#293671" isHoverable>
        <Icon type="leftCaret" />
      </Button>
      <Button {...model.hintButton.props} className="hintButton" color="#293671" isHoverable>
        <Icon type="bulb" />
      </Button>
    </div>
  );
});
