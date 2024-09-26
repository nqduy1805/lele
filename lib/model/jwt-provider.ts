import { generateRefreshToken, generateToken } from '@/lib/model/jwt'

interface JwtEncodeData {
  id: string
  email: string
  name: string
}

export default class JwtProvider {
  private data: JwtEncodeData
  constructor(data: JwtEncodeData) {
    this.data = data
  }

  generate() {
    console.time('gen-token')
    const token = generateToken(this.data)
    console.timeEnd('gen-token')

    console.time('gen-refresh-token')
    const refreshToken = generateRefreshToken({
      id: this.data.id
    })

    console.timeEnd('gen-refresh-token')
    return {
      token,
      refreshToken
    }
  }
}
