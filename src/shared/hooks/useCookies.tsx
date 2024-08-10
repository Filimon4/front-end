
type TAddCookies = (name: string, value: string, {path}: {path: string}) => void;
type TDeleteCookies = (name: string) => void;
type TGetCookies = (name: string) => string | null;

// TOOD: Переписать на state
const useCookies = () => {
  const addCookies: TAddCookies = (name, value, {path}): void => {
    document.cookie = `${name}=${value};path=/${path}`
  }
  const deleteCookies: TDeleteCookies = (name) => {
    let allCookies: Array<string> = document.cookie.split(';')
    const delCookieIndex = allCookies.findIndex(cook => cook.split('=')[0] == name)
    allCookies = allCookies.splice(delCookieIndex, 1);
    document.cookie = allCookies.join(';')
  }
  const getCookies: TGetCookies = (name) => {
    const allCookies: Array<string> = document.cookie.split(';')
    const rawCookies: Array<string> = allCookies.flatMap(cook => cook.split('='))
    const findCookieIndex = rawCookies.findIndex(cook => cook.split('=')[0] == name)
    return rawCookies[(findCookieIndex+1)] ?? null
  }
  return {getCookies, addCookies, deleteCookies}
}

export default useCookies
