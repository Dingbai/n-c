<template>
  <div>
    <i-checkbox v-model="single">单独选项</i-checkbox>

    <br />
    数据：{{ single }}

    <hr />
    <i-checkbox-group v-model="multiple">
      <i-checkbox label="option1">选项 1</i-checkbox>
      <i-checkbox label="option2">选项 2</i-checkbox>
      <i-checkbox label="option3">选项 3</i-checkbox>
      <i-checkbox label="option4">选项 4</i-checkbox>
    </i-checkbox-group>

    <br />
    数据：{{ multiple }}
    <hr />
    <i-checkbox
      :indeterminate="indeterminate"
      :value="checkAll"
      @click.prevent.native="handleCheckAll"
    >
      全选
    </i-checkbox>
    <i-checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
      <i-checkbox label="香蕉">香蕉</i-checkbox>
      <i-checkbox label="苹果">苹果</i-checkbox>
      <i-checkbox label="西瓜">西瓜</i-checkbox>
    </i-checkbox-group>
  </div>
</template>
<script>
  import iCheckbox from '@/components/checkbox/checkbox.vue'
  import iCheckboxGroup from '@/components/checkbox/checkbox-group.vue'
  export default {
    name: 'checkbox',
    components: { iCheckboxGroup, iCheckbox },
    data() {
      return {
        multiple: ['option1', 'option3'],
        single: true,
        indeterminate: true,
        checkAll: false,
        checkAllGroup: ['香蕉', '西瓜']
      }
    },
    methods: {
      handleCheckAll() {
        if (this.indeterminate) {
          this.checkAll = false
        } else {
          this.checkAll = !this.checkAll
        }
        this.indeterminate = false

        if (this.checkAll) {
          this.checkAllGroup = ['香蕉', '苹果', '西瓜']
        } else {
          this.checkAllGroup = []
        }
      },
      checkAllGroupChange(data) {
        if (data.length === 3) {
          this.indeterminate = false
          this.checkAll = true
        } else if (data.length > 0) {
          this.indeterminate = true
          this.checkAll = false
        } else {
          this.indeterminate = false
          this.checkAll = false
        }
      }
    }
  }
</script>
