import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import useRootStore from '../hooks/useRootStore';
import { Header } from '../components';

const ImagePicker = observer(() => {
  const { user, images } = useRootStore()
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState()

  const onSubmit = async () => {
    await images.search(searchTerm);
  }

  const onSelectImage = id => {
      user.setImage(id)
      history.push("/share")
  }

  return (
    <div>
        <Header />
        <div className="flex justify-center items-center">
            <label for="price" className="block text-sm font-medium text-gray-700 pr-">Search</label>
            <div className="mt-1 relative rounded-md shadow-sm">
               <input type="text" onChange={e => setSearchTerm(e.target.value)} name="q" className="rounded w-64" />
            </div>
            <button type="submit" onClick={onSubmit}>Search</button>
        </div>
        <div className="grid grid-gap-2 grid-cols-5 grid-rows-max">
            { images.data.map(img => (<img onClick={() => onSelectImage(img.id)} src={img.source} />)) }
        </div>
        
    </div>

  );
});

export default ImagePicker;
