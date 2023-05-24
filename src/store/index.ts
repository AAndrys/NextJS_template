import { mountStoreDevtool } from 'simple-zustand-devtools';

import useGlobalStore from './globalStore';

const storeDevTools = () => {
  if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('GlobalStore', useGlobalStore);
  }
};

export { storeDevTools, useGlobalStore };
