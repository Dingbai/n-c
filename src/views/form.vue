<template>
  <div>
    <h3 class="test-title">form组件</h3>
    <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
    </i-form>
    <p class="test">
      用户名:{{ formValidate.name }}
      <br />
      邮箱:{{ formValidate.mail }}
    </p>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>
<script>
  import iForm from '@/components/form/form.vue'
  import iFormItem from '@/components/form/form-item.vue'
  import iInput from '@/components/input/input.vue'
  import Emitter from '../mixins/emitter.js'

  export default {
    components: { iForm, iFormItem, iInput },
    data() {
      return {
        formValidate: {
          name: '',
          mail: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$refs.form.validate(valid => {
          if (valid) {
            console.log('提交成功')
          } else {
            console.log('提交失败')
          }
        })
      },
      handleReset() {
        this.$refs.form.resetFields()
      }
    }
  }
</script>
