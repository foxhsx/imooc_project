export function getRedirectPath({ type, avatar }) {
  // 根据用户信息返回跳转地址
  // user.type /boss / genuis
  // user.avatar  /bossinfo  /genuisinfo
  let url = (type === 'boss') ? '/boss' : '/genuis';
  if (!avatar) {
    url += 'info'
  }
  return url
}