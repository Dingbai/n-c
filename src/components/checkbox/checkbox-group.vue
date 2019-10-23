<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  import { findComponentsDownward } from '@/utils/assist.js'
  export default {
    name: 'iCheckboxGroup',
    props: {
      value: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentValue: this.value,
        children: []
      }
    },
    methods: {
      change(data) {
        this.currentValue = data
        this.$emit('input', data)
        this.$emit('on-change', data)
      },
      updateModel(flag) {
        this.children = findComponentsDownward(this, 'iCheckbox')
        // fix 组件绑定错误
        console.log(this.model)
        if (this.children) {
          const { value } = this

          this.children.forEach(child => {
            child.model = value

            if (flag) {
              child.currentValue = value.indexOf(child.label) >= 0
              child.group = true
            }
          })
        }
      }
    },
    mounted() {
      // console.log(this.value)
      this.updateModel(true)
    },
    watch: {
      value() {
        this.updateModel(true)
      }
    }
  }
</script>
