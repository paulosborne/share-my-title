import { types } from 'mobx-state-tree';
import kebabize from 'lodash.kebabcase';

const User = types
  .model('UserModel', {
    name: types.maybeNull(types.string),
    title: types.maybeNull(types.string),
    imageId: types.optional(types.string, '', [null, undefined]),
  })
  .actions(self => ({
    setTitle(title) {
      self.title = title;
    },
    setName(name) {
      self.name = name;
    },
    setImage(id) {
      self.imageId = id;
    },
  }))
  .views(self => ({
    get kebabTitle() {
      return kebabize(self.title);
    },
  }));

export default User;
