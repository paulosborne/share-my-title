import { types } from 'mobx-state-tree';
import get from 'lodash.get';

const GiphyImage = types.model('Gif', {
  height: types.string,
  width: types.string,
  url: types.string,
});

const Image = types
  .model('Image', {
    id: types.string,
    images: types.model('Images', {
      preview_gif: GiphyImage,
      fixed_width: GiphyImage,
    }),
  })
  .views(self => ({
    get source() {
      return get(self, 'images.fixed_width.url');
    },
  }));

export default Image;
