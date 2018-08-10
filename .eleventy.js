module.exports = function(config) {
  config.dir = {
    input: 'src',
    output: '_site'
  }

  config.addPassthroughCopy('src/assets')
  config.addPassthroughCopy('src/admin/config.yml')
}
