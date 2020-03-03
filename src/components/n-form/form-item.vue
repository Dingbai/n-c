<template>
  <div class="form-item">
    <label :width="labelWidth">
      <span>{{ label }}</span>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'formItem',
  props: {
    label: { type: String, default: '' },
    value: { type: String, default: '' },
    size: {
      type: String,
      validator: value => {
        return ['large', 'normal', 'small'].indexOf(value) !== -1
      },
      default: 'normal'
    },
    rules: { type: Array, default: () => [] },
    labelWidth: { type: String, default: '' }
  }
}
</script>
