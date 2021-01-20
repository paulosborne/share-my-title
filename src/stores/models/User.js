import { types } from 'mobx-state-tree';
import kebabize from 'lodash.kebabcase';

const User = types
  .model('UserModel', {
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    interests: types.optional(types.string, ''),
    title: types.optional(types.string, ''),
    imageId: types.optional(types.string, '', [null, undefined]),
  })
  .actions(self => ({
    setTitle(title) {
      self.title = title;
    },
    setFirstName(name) {
      self.firstName = name;
    },
    setLastName(name) {
      self.lastName = name;
    },
    setImage(id) {
      self.imageId = id;
    },
    setInterests(interests) {
      self.interests = interests;
    },
  }))
  .views(self => ({
    get kebabTitle() {
      return kebabize(self.title);
    },
    get displayName() {
      return `${self.firstName} ${self.lastName.charAt(0)}`;
    },
  }));

export default User;
