import React from 'react';
import { observer } from 'mobx-react';
import useRootStore from '../hooks/useRootStore';
import { Header, ProfileImage } from '../components';

const ShareTitle = observer(() => {
  const { user, images } = useRootStore()

  return (
    <div>
        <Header />
        <div className="flex justify-center items-center">
            <div className="flex flex-col">
                <ProfileImage user={user} image={images.findById(user.imageId)} />
            </div>
        </div>
    </div>
  );
});

export default ShareTitle;
