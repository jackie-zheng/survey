const validationCfg = [
  {
    field: 'merNums',
    rule: 'required',
    errMsg: '还有问题未回答'
  },
  {
    field: 'atmNums',
    rule: 'required',
    errMsg: '还有问题未回答'
  },
  {
    field: 'currencyNums',
    rule: 'required',
    errMsg: '还有问题未回答'
  },
  {
    field: 'cardNums',
    rule: 'required',
    errMsg: '还有问题未回答'
  },
  {
    field: 'headquarters',
    rule: 'required',
    errMsg: '还有问题未回答'
  },
  {
    field: 'bankNums',
    rule: 'required',
    errMsg: '还有问题未回答'
  },
  {
    field: 'company',
    rule: 'required',
    errMsg: '请输入您就职的单位'
  },
  {
    field: 'level',
    rule: 'required',
    errMsg: '请输入您的职务'
  },
  {
    field: 'name',
    rule: 'required',
    errMsg: '请输入您的姓名'
  },
  {
    field: 'phone',
    rule: 'required',
    errMsg: '请输入您的手机号'
  }
]

const questions = ['merNums', 'atmNums', 'currencyNums', 'cardNums', 'headquarters', 'bankNums']

export { validationCfg, questions }