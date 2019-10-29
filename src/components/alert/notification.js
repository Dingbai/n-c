/* eslint-disable no-console */
import Vue from 'vue'
import Alert from '@/components/alert/alert.vue'
console.log(Alert)
Alert.newInstance = (properties = {}) => {
  const props = properties
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(Alert, {
        props
      })
    }
  })
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const alert = Instance.$children[0]

  return {
    add(props) {
      alert.add(props)
    },
    remove(name) {
      alert.remove(name)
    }
  }
}
export default Alert
