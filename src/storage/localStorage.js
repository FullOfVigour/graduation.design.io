const BASE_DATA = 'BASE_DATA'
const MENU_BASE_DATA = 'MENU_BASE_DATA'
const TAB_DATA = 'TAB_DATA'

const setBaseData = data => {
  localStorage.setItem(BASE_DATA, JSON.stringify(data))
}

const getBaseData = () => {
  return JSON.parse(localStorage.getItem(BASE_DATA))
}

const setMenuBaseData = data => {
  localStorage.setItem(MENU_BASE_DATA, JSON.stringify(data))
}

const removeMenuBaseData = () => {
  localStorage.removeItem(MENU_BASE_DATA)
}

const getMenuBaseData = () => {
  let menuStr = localStorage.getItem(MENU_BASE_DATA)
  if (menuStr) {
    return JSON.parse(menuStr)
  } else {
    return []
  }
}

const setTabData = data => {
  sessionStorage.setItem(TAB_DATA, JSON.stringify(data))
}

const getTabData = () => JSON.parse(sessionStorage.getItem(TAB_DATA))

const removeTabData = () => {
  sessionStorage.removeItem(TAB_DATA)
}

export {
  setBaseData,
  getBaseData,
  setMenuBaseData,
  getMenuBaseData,
  removeMenuBaseData,
  setTabData,
  getTabData,
  removeTabData
}
