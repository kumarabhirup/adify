import SteinStore from 'stein-js-client'

const steinStore = new SteinStore(process.env.ADIFY_STEIN_API_KEY)

export const steinAuthentication = {
  authentication: {
    username: process.env.ADIFY_STEIN_API_USERNAME,
    password: process.env.ADIFY_STEIN_API_PASSWORD,
  },
}

export default steinStore
