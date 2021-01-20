import { types } from 'mobx-state-tree';
import User from './models/User';
import Images from './Images';

const RootStore = types
  .model('RootStore', {
    user: types.optional(User, {}),
    images: types.optional(Images, {}),
  })
  .create();

export default RootStore;
