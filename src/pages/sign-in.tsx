import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {LogoLink} from '@components/logo/logo-link.tsx';
import {useAppDispatch, useAppSelector} from '@store/hooks.ts';
import {loginAction} from '@services/api-methods.ts';
import {AuthStatus} from '@models/auth-status.ts';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validateEmail = (password: string) => emailRegex.test(password);
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
const validatePassword = (password: string) => passwordRegex.test(password);

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState<string>('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const authStatus = useAppSelector((x)=>x.User.authorizationStatus);
  const navigate = useNavigate();
  const errorMessage = 'Please enter a valid email address or password';

  if(authStatus === AuthStatus.Authorized){
    navigate('../');
  }

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <LogoLink/>
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content sign-in__form">
        { !isValidEmail && (<div className="sign-in__message"><p>{errorMessage}</p></div>)}
        <div className="sign-in__fields">
          <div className={`sign-in__field ${!isValidEmail ? 'sign-in__field--error' : ''}`}>
            <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" onChange={(e) => setEmail(e.target.value)} />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" onChange={(e) => setPassword(e.target.value)}/>
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" onClick={()=>{
            setIsValidEmail(validateEmail(email));
            setIsValidPassword(validatePassword(password));

            if(isValidEmail && isValidPassword){
              dispatch(loginAction({login:email, password:password}));
            }
          }}
          >
              Sign in
          </button>
        </div>
      </div>
    </div>
  );
};
