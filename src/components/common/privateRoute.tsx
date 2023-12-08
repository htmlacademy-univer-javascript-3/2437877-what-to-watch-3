import {Navigate} from 'react-router-dom';
import {ReactElement} from 'react';
import {AuthStatus} from '@models/auth-status.ts';
import {useAppSelector} from '@store/hooks.ts';


export const PrivateRoute = ({page}: { page: ReactElement }): ReactElement =>{

  const authStatus = useAppSelector((x)=>x.User.authorizationStatus);

  if(authStatus === AuthStatus.Authorized){
    return page;
  }

  return(<Navigate to='/login'/>);
};

