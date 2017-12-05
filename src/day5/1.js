import md5 from 'md5'

const input = 'wtnhxymk'

let i = 0
let password = ''
while (true) {
  if (password.length === 8) {
    break
  }
  const currentHash = md5(input + i++)
  if (currentHash.startsWith('00000')) {
    password += currentHash[5]
    console.log(password)
  }
}
console.log(password)
