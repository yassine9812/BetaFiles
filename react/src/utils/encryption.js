import CryptoJS from 'crypto-js'

export const encrypt = data => {
  if (!data) return null
  const cryptedText = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    'my-secret-key@123'
  )

  return cryptedText.toString()
}

export const decrypt = data => {
  if (!data) return null
  const bytes = CryptoJS.AES.decrypt(data, 'my-secret-key@123')
  const decrypted = bytes.toString(CryptoJS.enc.Utf8)

  return JSON.parse(decrypted)
}
