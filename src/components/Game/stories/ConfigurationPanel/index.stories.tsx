import { Meta, StoryFn } from '@storybook/react';
import { Observer } from 'mobx-react';
import { ConfigurationPanel as ConfigurationPanelModel } from './models/ConfigurationPanel';
import { useStyles } from './styles';

export const ConfigurationPanel: StoryFn = () => {
  const configurationPanel = new ConfigurationPanelModel();
  useStyles();

  return (
    <Observer>
      {() => (
        <div className="container">
          <div className="row">
            <div className="input-group">
              <span className="input-group-text">Цвет фона</span>
              <input
                {...configurationPanel.colorInput.props}
                ref={configurationPanel.colorInput.setRefElement}
                className="form-control form-control-color mr-1"
                type="color"
                defaultValue="#BCF7FF"
              />
              <button
                {...configurationPanel.addGameFieldInputButton.props}
                className="btn btn-primary"
                type="button"
              >
                Добавить уровень
              </button>
            </div>
          </div>
          {configurationPanel.gameFieldInputs.map((gameFieldInput) => (
            <div key={gameFieldInput.id} className="row mb-2">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <hr />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <button
                      {...gameFieldInput.removeButton.props}
                      className="btn btn-danger"
                      type="button"
                    >
                      Удалить уровень
                    </button>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col input-group">
                    <input
                      {...gameFieldInput.levelNameInput.props}
                      ref={gameFieldInput.levelNameInput.setRefElement}
                      className="form-control"
                      type="text"
                      placeholder="Название уровня"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <div
                      style={{
                        padding: '20px',
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                        borderRadius: '20px',
                      }}
                    >
                      <div className="container-fluid p-0">
                        <div className="row">
                          <div className="col">
                            <button
                              {...gameFieldInput.addTaskInputButton.props}
                              className="btn btn-primary"
                              type="button"
                            >
                              Добавить слово
                            </button>
                          </div>
                        </div>
                        {gameFieldInput.taskInputs.map((taskInput) => (
                          <div key={taskInput.id} className="row">
                            <div className="col">
                              <div className="row">
                                <div className="col">
                                  <hr />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col">
                                  <button
                                    {...taskInput.removeButton.props}
                                    className="btn btn-danger"
                                    type="button"
                                  >
                                    Удалить слово
                                  </button>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col input-group">
                                  <input
                                    {...taskInput.wordInput.props}
                                    ref={taskInput.wordInput.setRefElement}
                                    className="form-control"
                                    type="text"
                                    placeholder="Слово"
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col input-group">
                                  <input
                                    {...taskInput.imageInput.props}
                                    ref={taskInput.imageInput.setRefElement}
                                    className="form-control"
                                    type="file"
                                    accept="image/png, image/jpeg, image/svg+xml"
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col input-group">
                                  <input
                                    {...taskInput.expectedCellsInput.props}
                                    ref={taskInput.expectedCellsInput.setRefElement}
                                    className="form-control"
                                    type="text"
                                    placeholder="Клетки слова"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col input-group">
                    <input
                      {...gameFieldInput.taskTextInput.props}
                      ref={gameFieldInput.taskTextInput.setRefElement}
                      className="form-control"
                      type="text"
                      placeholder="Текст задания"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col input-group">
                    <textarea
                      {...gameFieldInput.fieldInput.props}
                      ref={gameFieldInput.fieldInput.setRefElement}
                      className="form-control"
                      rows={5}
                      placeholder="Поле с буквами"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col input-group">
                    <input
                      {...gameFieldInput.fieldWidthInput.props}
                      ref={gameFieldInput.fieldWidthInput.setRefElement}
                      className="form-control"
                      type="text"
                      placeholder="Ширина поля (опционально)"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col input-group">
                    <input
                      {...gameFieldInput.fieldHeightInput.props}
                      ref={gameFieldInput.fieldHeightInput.setRefElement}
                      className="form-control"
                      type="text"
                      placeholder="Высота поля (опционально)"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: '25px' }} className="row mb-2">
            <div className="input-group">
              <button
                {...configurationPanel.outputButton.props}
                className="btn btn-primary"
                type="button"
              >
                Скопировать JSON
              </button>
            </div>
          </div>
        </div>
      )}
    </Observer>
  );
};

export default {
  title: 'Game/ConfigurationPanel',
} as Meta;
