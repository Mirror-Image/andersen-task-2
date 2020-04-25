export function lastSessionData() {
  return JSON.parse(localStorage.getItem('lastSession'))
}
