import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const hogeActions = {
  updateName: actionCreator<string>('ACTION_UPDATE_NAME'),
  updateEmail: actionCreator<string>('ACTION_UPDATE_EMAIL'),
};