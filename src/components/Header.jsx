import React from 'react';
import { observer } from 'mobx-react';
import useRootStore from '../hooks/useRootStore';
import logo from "../images/logo.png"

const Header = observer(() => {
    const { user } = useRootStore();

    return (
        <div className="p-2 flex items-center bg-white shadow">
            <div>
                <img className="mx-auto h-12 w-auto mr-2" src={logo} alt="Logo" />
            </div>
            <div className="flex-1 leading-tight">
                <div>{user.displayName}</div>
                <div className="text-gray-500">{user.title}</div>
            </div>
            
        </div>
    )
});

export default Header