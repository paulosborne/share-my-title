import React from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import useRootStore from '../hooks/useRootStore';
import { Header, ProfileImage } from '../components';

const ShareTitle = observer(() => {
  const { user, images } = useRootStore()
  const history = useHistory()
  const handleStartAgain = () => {
    history.push("/")
  }
  return (
    <div>
        <Header />
        <div className="p-2">
              <h1 className="text-2xl mb-2">Review your details</h1>

            <div className="p-2 bg-white rounded shadow">
                <div className="flex flex-row">
                  <div className="flex flex-col flex-1">
                    <div className="text-gray-500">Name</div>
                    <div>{user.firstName} {user.lastName}</div>
                    <div className="text-gray-500">Title</div>
                    <div>{user.title}</div>
                    <div className="text-gray-500">Interests</div>
                    <div>{user.interests}</div>
                  </div>
                  <div><img src={images.findById(user.imageId).source} /></div>
                </div>
                <div className="flex justify-center">
                  <button onClick={handleStartAgain} className="p-2 text-white bg-gray-500 rounded mr-2">Start again!</button>
                  <button className="p-2 text-white bg-red-500 rounded">Share!</button>
                </div>
            </div>
        </div>
    </div>
  );
});

export default ShareTitle;
