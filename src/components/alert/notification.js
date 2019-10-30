/* eslint-disable no-console */
import Vue from 'vue'
import Alert from '@/components/alert/alert.vue'
Alert.newInstance = () => {
  const Instance = new Vue({
    render(h) {
      return h(Alert)
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
