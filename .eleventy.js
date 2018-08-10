module.exports = function(config) {
  config.dir = {
    input: 'src',
    output: '_site'
  }

  config.addPassthroughCopy('src/assets')
  config.addPassthroughCopy('src/admin/config.yml')

  config.addCollection('posts', function (collection) {
    return collection.getFilteredByGlob('src/posts/*.md').reverse()
  })

  return config
}
