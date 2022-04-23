import { createSelector } from 'reselect';
import Action from '../../redux.types';

const selectUser = (state: any) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
