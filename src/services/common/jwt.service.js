const ID_TOKEN_KEY = 'id_token_hr_management_v2'

export const getToken = () => {
  return getCookie(ID_TOKEN_KEY)
}

export const saveToken = token => {
  setCookie(token)
}

export const destroyToken = () => {
  document.cookie =
    ID_TOKEN_KEY + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

function setCookie(cvalue) {
  let d = new Date()
  d.setTime(d.getTime() + 3 * 24 * 60 * 60 * 1000) // 3 days
  let expires = 'expires=' + d.toUTCString()
  document.cookie = ID_TOKEN_KEY + '=' + cvalue + ';' + expires + ';path=/'
}

function getCookie(cname) {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export default { getToken, saveToken, destroyToken }
