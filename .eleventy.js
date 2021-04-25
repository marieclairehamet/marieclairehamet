module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  return {
    passthroughFileCopy: true
  }
}
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('js')
  return {
    passthroughFileCopy: true
  }
}
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images')
  return {
    passthroughFileCopy: true
  }
}