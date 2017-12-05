import md5 from 'md5'

const input = 'wtnhxymk'

let i = 0
let password = new Array(8)
for (let i = 0; i < password.length; i++) {
  password[i] = '_'
}

while (password.some(c => c === '_')) {
  const currentHash = md5(input + i++)

  if (currentHash.startsWith('00000')) {
    const index = +currentHash[5]
    const replacement = currentHash[6]
    if (/[0-7]/.test(index) && password[index] === '_') {
      console.log(index, replacement)
      password[index] = replacement
      console.log(password)
    }
  }
}

console.log(password.join(''))
