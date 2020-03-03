<template>
  <div>
    <n-form ref="form" :model.sync="form" lable-width="80px">
      <form-item label="用户名">
        <n-input v-model="form.user"></n-input>
      </form-item>
      <form-item>
        <button @click="reset">reset</button>
      </form-item>
    </n-form>
  </div>
</template>
<script>
import nForm from '@/components/n-form/form.vue'
import nInput from '@/components/n-form/input.vue'
import formItem from '@/components/n-form/form-item.vue'

export default {
  components: { nForm, formItem, nInput },
  data() {
    return {
      form: {
        user: ''
      }
    }
  },
  methods: {
    reset() {
      // console.log(this.$refs.form);
      this.$refs.form.resetForm()
    }
  }
}
</script>
