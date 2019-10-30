/* eslint-disable no-console */
import Notification from './notification.js'

let messageInstance

function notifyModel() {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}

function notice({ duration = 1.5, content = '', render }, type = '') {
  let instance = notifyModel()

  instance.add({
    content,
    duration,
    render,
    icon: type
  })
}

export default {
  open(options) {
    return notice(options)
  },
  info(options) {
    return notice(options, 'icon-info-circle')
  },
  success(options) {
    return notice(options, 'icon-check-circle')
  },
  warning(options) {
    return notice(options, 'icon-warning-circle')
  },
  error(options) {
    return notice(options, 'icon-close-circle')
  }
}
