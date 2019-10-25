<template>
  <div>
    <h3 class="test-title">radio 组件</h3>
    <i-radio v-model="single">single radio</i-radio>
    <p class="test">
      {{ single }}
    </p>
    <i-radio-group v-model="mutiple">
      <i-radio label="西瓜">西瓜</i-radio>
      <i-radio label="芒果">芒果</i-radio>
      <i-radio label="香瓜">香瓜</i-radio>
    </i-radio-group>
    <p class="test">
      {{ mutiple }}
    </p>
  </div>
</template>

<script>
  import iRadio from '@/components/radio/radio'
  import iRadioGroup from '@/components/radio/radio-group'
  export default {
    name: 'radio',
    components: { iRadio, iRadioGroup },
    data() {
      return {
        single: false,
        mutiple: '西瓜'
      }
    }
  }
</script>
