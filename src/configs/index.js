const { VUE_APP_DEV_HOST, VUE_APP_TEST_HOST, VUE_APP_PROD_HOST } = process.env

const ENV_MAP = {
  [VUE_APP_DEV_HOST]: 'dev',
  [VUE_APP_TEST_HOST]: 'test',
  [VUE_APP_PROD_HOST]: 'prod'
}

const env = ENV_MAP[location.host] || 'dev'

const config = require(`./env.${env}.js`)

module.exports = config
