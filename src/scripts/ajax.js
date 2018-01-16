let ajax = (function () {
  const xhr = new XMLHttpRequest()
  return function (config) {
    if (config.params) {
      let searchString = object2SearchParams(config.params)
      config.url = config.url + '?' + searchString
    }
    xhr.onload = function (e) {
      if ([200, 304].includes(e.target.status)) {
        config.success(JSON.parse(e.target.responseText || null))
      } else {
        config.fail()
      }
    }
    xhr.open(config.method, config.url)
    xhr.send(JSON.stringify(config.data))
  }
}) ()

function object2SearchParams(obj) {
  if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce(function (acc, curKey) {
      return acc + '&' + curKey + '=' + obj[curKey]
    }, '').slice(1)
  }
  return obj
}

export { ajax }