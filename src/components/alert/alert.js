/* eslint-disable no-console */
import Notification from './notification.js'
console.log(Notification)

let messageInstance

function notifyModel() {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}

function notice({ duration = 1.5, content = '' }) {
  let instance = notifyModel()

  instance.add({
    content,
    duration
  })
}

export default {
  info(options) {
    return notice(options)
  }
}
