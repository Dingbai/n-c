// broadcast dispatch

function broadcast(componentName, eventName, params) {
  let children = this.$children
  children.forEach(child => {
    // console.log(child)
    if (child.$options.name === componentName) {
      // child.$emit.apply(child, [eventName].concat(params))
      child.$emit.apply(child, [eventName, params])
    } else {
      // broadcast.apply(child, [componentName, eventName].concat([params]))
      broadcast.apply(child, [componentName, eventName, params])
    }
  })
}

// function dispatch(componentName, eventName, params) {
//   let parent = this.$parent

// }
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root
      

    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
