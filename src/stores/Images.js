import { flow, types } from 'mobx-state-tree';
import get from 'lodash.get';
import Image from './models/Image';
import GiphyService from '../services/Giphy';

const Images = types
  .model('Images', {
    data: types.optional(types.array(Image), []),
  })
  .actions(self => ({
    search: flow(function* (term) {
      const response = yield GiphyService.search(term);
      self.data = get(response.data, 'data');
    }),
    findById(id) {
      return self.data.find(image => image.id === id);
    },
  }));

export default Images;
