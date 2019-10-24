<template>
  <div>
    <i-radio v-model="single">hello radio</i-radio>
    测试 --- {{ single }}
    <hr />
    <i-radio-group v-model="mutiple">
      <i-radio label="西瓜">西瓜</i-radio>
      <i-radio label="芒果">芒果</i-radio>
      <i-radio label="香瓜">香瓜</i-radio>
    </i-radio-group>
    测试 --- {{ mutiple }}
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
        single: true,
        mutiple: '西瓜'
      }
    }
  }
</script>
