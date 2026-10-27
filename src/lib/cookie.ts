import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const COOKIE_NAME = 'token';

export const getToken = (): string => cookies.get(COOKIE_NAME);

export const setToken = (token: string) => {
  cookies.set(COOKIE_NAME, token, { path: '/' });
};

export const removeToken = () => cookies.remove(COOKIE_NAME, { path: '/' });
