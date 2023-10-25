import { Navigate } from 'react-router-dom';
import {AuthStatus} from '@mocks/storeOfShit.ts';
import {ReactElement} from 'react';


interface PrivateProps {
  authStatus: AuthStatus;
  page: ReactElement;
}

export const Private = ({authStatus, page}: PrivateProps) =>(
  authStatus === AuthStatus.Authorize ? page : <Navigate to='/login'/>
);

