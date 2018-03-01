const checkType = (target, type) => {
  return toString.call(target).toLowerCase() === `[object ${type.toLowerCase()}]`
}

/*
 * target: 目标源对象
 * key: 要获取的对象的Key，多层用.来隔开
 * 例如要获取name
 * obj = {
 *   person: {
 *     name: 'sssss'
 *   }
 * }
 * key为
 * person.name
 * 适用场景：
 * 当某个字段不确定是否存在或者有值时，可以摆脱痛苦的 obj && obj.person && obj.person.name这种写法
 * 可直接使用getKey迭代器来进行判断该字段是否有值
 * */
const getKey = (target, key) => {
  if (!target || !checkType(target, 'Object')) {
    console.error('target is required and must be a object')
    return
  } else if (!key || typeof key !== 'string') {
    console.error('key is required and must be a string')
    return
  }
  let keys = key.split('.')
  for (let i = 0, len = keys.length; i < len; i++) {
    if (target[keys[i]] !== undefined) {
      target = target[keys[i]]
    } else {
      return undefined
    }
  }
  return target
}
console.log(getKey([], 'a.b'))
console.log(getKey({
  a: {
    b: 'sss'
  }
}, 'a.b'))

console.log(checkType([], 'array'))

