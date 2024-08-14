
type TAddCookies = (name: string, value: string, {path}: {path: string}) => void;
type TDeleteCookies = (name: string, path?: string) => void;
type TGetCookies = (name: string) => string | null;

// TODO: Переписать на state
// TODO: Написать представление поверх
const useCookies = () => {
  const addCookies: TAddCookies = (name, value, {path}): void => {
    document.cookie = `${name}=${value};path=/${path}`
  }
  const deleteCookies: TDeleteCookies = (name, path = '') => {
    if(!name)return
    document.cookie = `${name}=;Max-Age=-9999999;path=/${path ?? ''}`
  }
  const getCookies: TGetCookies = (name) => {
    const allCookies: Array<string> = document.cookie.split(';')
    console.log(document.cookie)
    const rawCookies: Array<string> = allCookies.flatMap(cook => cook.split('='))
    const findCookieIndex = rawCookies.findIndex(cook => cook.split('=')[0].trim() == name)
    return rawCookies[(findCookieIndex+1)] ?? null
  }
  return {getCookies, addCookies, deleteCookies}
}

export default useCookies
