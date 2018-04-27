//校验手机号码
export function isSpecialPhone(num) {
  return /^1[2,3,4,5,7,8]\d{9}$/.test(num)
}
//校验中英文姓名
export function isName(name) {
  return /[a-zA-Z\u4E00-\u9FA5]+$/.test(name)
}
//校验输入金额
export function isMoney(n) {
  return /^\d+$/.test(n)
}
//去空格
export function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}
//遍历参数？后面的
export function formatParam(obj) {
  let str = ''
  for (let i in obj) {
    str += `${i}=${obj[i]}&`
  }
  return str.slice(0, -1)
  // console.log(str)  比如{a:111,b:222,c:333}变为a=111&b=222&c=333
}
//获取地址栏url参数方式一
export function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
//url参数处理(获取参数)方式二(个人喜好这种)
export var URL = {
  set(key, value, url) {
    var reg = new RegExp('(' + key + ')=([^&]*)', 'ig');
    var url = url ? url : location.href;
    var result = reg.exec(url);
    if (result) {
      return url.replace(result[0], key + '=' + value);
    } else {
      var reg = /\?(.*)#?(.*)/gi;
      var search = reg.exec(url);
      if (search !== null) {
        return url.replace(search[1], search[1] + '&' + key + '=' + value);;
      } else {
        return '';
      }
    }
  },
  get(key, url) {
    var reg = new RegExp('(' + key + ')=([^&]*)', 'ig');
    var url = url ? url : location.href;
    var result = reg.exec(url);
    if (result) {
      return result[2];
    } else {
      return '';
    }
  }
}