'use strict'

const cacheSym = Symbol('cache')
const ttlSmy = Symbol('ttl')

module.exports = class Cache {
  constructor (options) {
    this[cacheSym] = Object.create(null)
    this.delete = this.remove.bind(this)
    this.size = 0
    this[ttlSmy] = options.ttl
  }

  put (key, value) {
    const oldRecord = this[cacheSym][key]
    if (oldRecord) {
      this.size--
      clearTimeout(oldRecord.timeout)
    }
    const record = {
      value,
      timeout: setTimeout(this.delete, this[ttlSmy], key)
    }

    this[cacheSym][key] = record
    this.size++
  }

  remove (key) {
    const oldRecord = this[cacheSym][key]
    if (oldRecord) {
      clearTimeout(oldRecord.timeout)
      delete this[cacheSym][key]
      this.size--
    }
    return oldRecord != null
  }

  get (key) {
    const record = this[cacheSym][key]
    if (record) {
      return record.value
    }
    return null
  }

  has (key) {
    const record = this[cacheSym][key]
    if (record) {
      return true
    }
    return false
  }
}
