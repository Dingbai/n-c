<template>
  <div :name="name">
    <slot></slot>
  </div>
</template>

<script>
  import { findComponentsDownward } from '@/utils/assist.js'

  let seed = 0
  const now = Date.now()
  const getUuid = () => `ivuRadioGroup_${now}_${seed++}`

  export default {
    name: 'iRadioGroup',
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      name: {
        type: String,
        default: getUuid
      }
    },
    data() {
      return {
        currentValue: this.value,
        children: findComponentsDownward(this, 'iRadio')
      }
    },
    methods: {
      change(data) {
        this.currentValue = data.value
        this.updateModel()
        this.$emit('input', data.value)
        this.$emit('on-change', data.value)
      },
      updateModel() {
        this.children = findComponentsDownward(this, 'iRadio')
        if (this.children) {
          this.children.forEach(child => {
            child.currentValue = this.currentValue === child.label
            child.group = true
          })
        }
      }
    },
    watch: {
      value() {
        if (this.currentValue !== this.value) {
          this.currentValue = this.value
          this.$nextTick(() => {
            this.updateModel()
          })
        }
      }
    },
    mounted() {
      this.updateModel()
    }
  }
</script>
