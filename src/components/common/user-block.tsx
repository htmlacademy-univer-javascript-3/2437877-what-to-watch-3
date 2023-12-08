import {ReactElement} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAppSelector} from '@store/hooks.ts';
import {AuthStatus} from '@models/auth-status.ts';
import {deleteToken} from '@services/auth-token.ts';

const LoginBlock = ():ReactElement=>(
  <div className="user-block">
    <Link to="/login" className="user-block__link">Sign in</Link>
  </div>
);

export const UserBlock = ():ReactElement => {
  const authStatus = useAppSelector((x)=>x.User.authorizationStatus);
  const avatarUrl = useAppSelector((x)=>x.User.userInfo?.avatarUrl);
  const navigate = useNavigate();

  if(authStatus === AuthStatus.Unauthorized){
    return (<LoginBlock/>);
  }


  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src={avatarUrl}
            alt="User avatar"
            width={63}
            height={63}
          />
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={()=>{
          deleteToken();
          navigate('../');
        }}
        >Sign out
        </a>
      </li>
    </ul>
  );
};
