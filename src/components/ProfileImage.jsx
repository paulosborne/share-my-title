import React from 'react';

const ProfileImage = ({ user, image}) => (
    <div className="flex flex-col items-center">
        <div>
            <img src={image.source} />
        </div>
        <div>{user.name}</div>
        <div className="font-bold">{user.title}</div>
    </div>
)

export default ProfileImage;