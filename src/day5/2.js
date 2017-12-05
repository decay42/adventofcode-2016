import md5 from 'md5'

const input = 'wtnhxymk'

let i = 0
let password = '________'

while (true) {
  if (password.split('').every(c => c !== '_')) {
    break
  }

  const currentHash = md5(input + i++)

  if (currentHash.startsWith('00000')) {
    const index = +currentHash[5]
    const replacement = currentHash[6]
    if (/[0-7]/.test(index) && password[+index] === '_') {
      console.log(index, replacement)
      password = replaceCharAt(password, index, replacement)
      console.log(password)
    }
  }
}

console.log(password)

function replaceCharAt (string, index, replacement) {
  return (string.substr(0, index) + replacement + string.substr(index + 1))
}
