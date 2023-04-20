import cn from 'classnames';
import { observer } from 'mobx-react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Plate } from './components/Plate';
import { ReactComponent as CheckMarkSprite } from './images/checkMark.svg';
import { useStyles } from './styles';
import { Props } from './types';

export const GameField = observer(function GameField(props: Props) {
  const { className, model, ...otherProps } = props;
  const styles = useStyles();

  return (
    <div {...otherProps} className={cn(styles.main, className)}>
      <div className="header">
        <div {...model.headerTitle.props} className="title" />
      </div>
      <div className="tasksBlock">
        {model.taskBlocks.map((taskBlock, i) => (
          <div key={i} className="taskBlock">
            <div {...taskBlock.image.props} className="image" />
            <div className="wordBlock">
              <div {...taskBlock.cells.props} ref={taskBlock.cells.setRefElement} className="cells">
                {model.data[i].word.split('').map((_, i) => (
                  <div key={i} className="cell" />
                ))}
              </div>
              <div {...taskBlock.word.props} className="word" />
            </div>
          </div>
        ))}
      </div>
      <div {...model.taskText.props} className="taskText" />
      {model.selectedWord.props.word && (
        <div
          ref={model.selectedWord.setRefElement}
          style={model.selectedWord.props.style}
          className="selectedWord"
        >
          <div className="word">{model.selectedWord.props.word}</div>
          {model.selectedWord.props.isCloseButtonMounted && (
            <Button
              className="button"
              isActive={model.selectedWord.props.isCloseButtonActive}
              onClick={model.selectedWord.props.onCloseButtonClick}
            >
              ✖
            </Button>
          )}
        </div>
      )}
      <div {...model.field.props} className="field">
        {model.options.plates.map((row, i) =>
          row.map((_, j) => {
            const plate = model.plates.find((plate) => plate.x === j && plate.y === i);

            return (
              <div key={`${i}${j}`} className="cell">
                {plate && <Plate {...plate?.props} />}
              </div>
            );
          }),
        )}
      </div>
      <CheckMarkSprite {...model.successCheckMark.props} className="successCheckMark" />
      <Button {...model.nextButton.props} className="nextButton" color="#293671" isHoverable>
        <Icon type="rightCaret" />
      </Button>
    </div>
  );
});
