import "./main.scss"
import { form2Json, formatFormData, getWxInfo, validateForm } from './helper'
import { ajax } from './ajax'
import { validationCfg } from './const'

getWxInfo(window)
let form = document.forms[0]
form.addEventListener('submit', e => {
  e.preventDefault()
  let formData = form2Json(document.forms[0].elements)
  let reqParams = formatFormData(formData)
  reqParams.avatar = window.avatar
  reqParams.openid = window.openid
  let { hasError, errMsg } = validateForm(reqParams, validationCfg)
  if (hasError) {
    alert(errMsg)
    return
  }
  ajax({
    method: 'POST',
    url: '/wechat/visaSta',
    data: reqParams,
    success() {
      document.querySelector('.survey-content').classList.add('hide')
      document.querySelector('.survey-result').classList.remove('hide')
    },
    fail() {
      alert('网络错误， 请稍后重试。')
    }
  })
})

let submitBtn = document.querySelector('.btn-about')
submitBtn.addEventListener('click', () => {
  location.href = '/about-cil/index.html'
})