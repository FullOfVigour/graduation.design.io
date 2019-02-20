import { set, includes, clear } from '../utils/cookie'
import moment from 'moment'

const SSID = 'JSSSID_COOKIE'
const ACCESSTOKEN = 'access_token'

const setSSID = value => {
  return set({
    key: SSID,
    value: value,
    domain: document.location.hostname,
    expires: moment()
      .add(2, 'hours')
      .toDate()
      .toUTCString(),
    path: '/'
  })
}

const setAccessToken = value => {
  return set({
    key: ACCESSTOKEN,
    value: value,
    domain: document.location.hostname,
    expires: moment()
      .add(2, 'hours')
      .toDate()
      .toUTCString(),
    path: '/'
  })
}

const isHaveSSID = () => {
  return includes(SSID)
}

const clearSSID = () => {
  clear({
    key: 'JSESSIONID_COOKIE',
    domain: document.location.hostname,
    path: '/'
  })
  clear({
    key: SSID,
    domain: document.location.hostname,
    path: '/'
  })
}

export { setSSID, setAccessToken, isHaveSSID, clearSSID }
