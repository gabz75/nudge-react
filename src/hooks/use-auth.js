import { useContext } from 'react';

import auth from '../contexts/auth';

export const useAuth = () => useContext(auth);

export default useAuth;
