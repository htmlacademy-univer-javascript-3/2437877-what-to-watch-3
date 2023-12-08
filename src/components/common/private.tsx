import { Navigate } from 'react-router-dom';
import {ReactElement} from 'react';
import {AuthStatus} from '@models/auth-status.ts';


interface PrivateProps {
  authStatus: AuthStatus;
  page: ReactElement;
}

export const Private = ({authStatus, page}: PrivateProps) =>(
  authStatus === AuthStatus.Authorize ? page : <Navigate to='/login'/>
);

