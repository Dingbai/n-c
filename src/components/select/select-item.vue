<template>
  <div class="i-select-item" v-show="isSelect" v-clickOut="changeStatus">
    <ul class="i-select-model">
      <li
        v-for="(item, index) in data"
        :key="index"
        @click="getItem(item.list)"
      >
        {{ item.list }}
      </li>
    </ul>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter.js'
export default {
  name: 'iSelectItem',
  mixins: [Emitter],
  props: {
    data: {
      type: Array,
      defalut: function() {
        return [{ list: '我是model-item' }]
      }
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isSelect: this.isShow
    }
  },
  watch: {
    isSelect(val) {
      this.dispatch('iSelect', 'on-set-select', val)
    }
  },
  created() {
    this.$on('on-handle-select', data => {
      this.isSelect = data
    })
  },
  directives: {
    clickOut: {
      bind: function(el, binding) {
        function handler() {
          if (el.contains(el.target)) return false

          // 判断是否有绑定值
          if (binding.expression) {
            // 运行绑定函数
            binding.value()
          }
        }
        // 将handle 放在全局 方便取消绑定
        el.handler = handler
        document.addEventListener('click', el.handler)
      },
      unbind: function(el) {
        document.removeEventListener('click', el.handler)
      }
    }
  },
  methods: {
    getItem(item) {
      this.dispatch('iSelect', 'on-set-item', item)
    },
    changeStatus() {
      this.isSelect = false
    }
  }
}
</script>
<style lang="less" scoped>
.i-select-model {
  position: absolute;
  width: 204px;
  top: 40px;
  border: 1px solid #ddd;
  padding: 10px 5px;
  box-sizing: border-box;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  li {
    margin-bottom: 3px;
    cursor: pointer;
    padding: 8px 0;
    &:hover {
      transition: background 0.2s ease-in-out;
      background-color: rgb(243, 243, 243);
    }
  }
  li:last-child {
    margin: 0;
  }
}
</style>
