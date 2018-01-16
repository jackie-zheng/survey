import { ajax } from './ajax'
import { questions } from './const'

function form2Json(formControls) {
  return [].reduce.call(formControls, (obj, control, index) => {
    if (!isValidControl(control)) return obj
    obj[control.name] = control.value
    return obj
  }, {})
}

function isValidControl(control) {
  if (['checkbox', 'radio'].includes(control.type)) {
    return control.checked
  } else if (control.tagName === 'INPUT') {
    return !!control.value
  } else {
    return false
  }
}

function formatFormData(formData) {
  return Object.keys(formData).reduce((obj, key, index) => {
    if (questions.includes(key)) {
      if (!formData['answer']) formData['answer'] = {}
      formData['answer'][key] = formData[key]
      delete formData[key]
    }
    return formData
  }, formData)
}

function getWxInfo(data) {
  let params = {
    appid: 'wxad14406b09355919',
    grantType: 'client_credential',
    channel: 'WXP',
    code: getFieldFromSearch('code')
  }
  if (params.code) {
    ajax({
      method: 'GET',
      url: '/foxbill/getWxUserInfo',
      params: params,
      success (res) {
        data.avatar = res.headimgurl
        data.openid = res.openid
      }
    })
  }
}

function getFieldFromSearch (field) {
  var search = location.search.slice(1)
  var fieldArr = search.split('&')
  var obj = fieldArr.reduce( function (acc, cur) {
    var dividedArr = cur.split('=')
    var key = dividedArr[0]
    var value = dividedArr[1]
    acc[key] = value
    return acc
  }, {})
  return obj[field] || ''
}

function validateForm(formData, config) {
  let i
  let hasError = config.some((fieldObj, index) => {
    if (fieldObj.rule === 'required') {
      i = index
      let key = fieldObj.field
      if (questions.includes(key)) {
        return formData.answer ? !formData.answer[key] : true
      }
      return !formData[key]
    }
  })
  console.log(config[i])
  return {
    hasError,
    errMsg: config[i].errMsg
  }
}

export { form2Json, formatFormData, getWxInfo, validateForm }