import { useContext } from 'react';
import { RootStoreContext } from '../context/RootStore';

const useRootStore = mapStateToProps => {
  const store = useContext(RootStoreContext);
  if (typeof mapStateToProps !== 'undefined') {
    return mapStateToProps(store);
  }
  return store;
};

export default useRootStore;
