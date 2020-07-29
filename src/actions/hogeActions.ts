import actionCreatorFactory from 'typescript-fsa-reducers';

const actionCreator = actionCreatorFactory();

export const hogeActions = {
  updateName: actionCreator<string>('ACTION_UPDATE_NAME'),
  updateEmail: actionCreator<string>('ACTION_UPDATE_EMAIL'),
}