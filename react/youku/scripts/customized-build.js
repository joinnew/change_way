var rewire = require('rewire')
var proxyquire = require('proxyquire')

switch(process.argv[2]) {
  case 'start':
    rewireModule('react-scripts/scripts/start.js', loadCustomizer('./overrides-config.dev'))
  break;
  case 'build':
    rewireModule('react-scripts/scripts/build.js', loadCustomizer('./overrides-config.prod'))
  break;
  default:
    console.log('customized-build only supports "start", "build", and "test" options.')
    process.exit(-1)
}

function loadCustomizer(module) {
  try {
    return require(module)
  } catch(e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }
  }
  return config => config;
}

function rewireModule(modulePath, customizer) {
  let defaults = rewire(modulePath)
  let config = defaults.__get__('config')
  customizer(config)
}