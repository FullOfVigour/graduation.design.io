// import feature from './feature'
// import layout from './layout'
// import backups from './backups'
// import analysis from './analysis'

const module = {
  // feature,
  // layout,
  // analysis,
  // backups
}

const featchModuleName = module => {
  const moduleName = {}
  Object.keys(module).forEach(prop => {
    const underlineUpperCaseProp = prop
      .replace('/[A-Z]/g', match => `_${match}`)
      .toUpperCase()
    moduleName[underlineUpperCaseProp] = prop
  })
  return moduleName
}

const moduleName = featchModuleName(module)

export default module
export { moduleName as module }
