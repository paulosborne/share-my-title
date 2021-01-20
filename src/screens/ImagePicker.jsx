import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import useRootStore from '../hooks/useRootStore';
import { Header } from '../components';

const ImagePicker = observer(() => {
  const { user, images } = useRootStore()
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState(user.title)

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
        <h1 className="text-2xl text-center my-4">Select an image that represents your AND title</h1>
        <div className="flex justify-center items-center">
            <div className="mt-1 relative rounded-md shadow-sm">
               <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} name="q" className="rounded w-64" />
            </div>
            <button className="bg-red-500 p-2 ml-2 rounded text-white" type="submit" onClick={onSubmit}>Search</button>
        </div>
        <div className="grid grid-gap-2 grid-cols-5 grid-rows-max mt-4 p-2">
            { images.data.map(img => (<img onClick={() => onSelectImage(img.id)} src={img.source} />)) }
        </div>
        
    </div>

  );
});

export default ImagePicker;
