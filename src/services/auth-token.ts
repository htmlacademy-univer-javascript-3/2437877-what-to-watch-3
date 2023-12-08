const tokenKey = 'auth-token';

export type Token = string;

export const getToken = (): Token => localStorage.getItem(tokenKey) ?? '';

export const setToken = (token: Token): void => {
  localStorage.setItem(tokenKey, token);
};

export const deleteToken = (): void => {
  localStorage.removeItem(tokenKey);
};
