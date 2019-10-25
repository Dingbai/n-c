<template>
  <label>
    <span> {{ label }} : </span>
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: 'iFormItem',
    props: {
      label: {
        type: String
      },
      prop: {
        type: String
      }
    }
  }
</script>
