# form

## form api

## form 思路分析

## form 难点总结

### v-model

#### v-model 原理

**v-bind:value v-on:input 的语法糖**

```vue
<template>
  <div>
    <input type="text" :value="value" @input="input" />
    <input type="text" v-model="Value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      Value: ""
    };
  },
  methods: {
    input(event) {
      this.value = event.target.value;
    }
  }
};
</script>
```

#### v-model 组件用法

```vue
<!--componentA-->
<template>
  <div>
    <component-b v-model="value"></component-b>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
<!--componentB-->
<template>
  <div>
    <input :value="newValue" @input="change" />
  </div>
</template>

<script>
export default {
  props: [value],
  data() {
    return {
      newValue: this.value
    };
  },
  methods: {
    change(event) {
      this.newValue = event.target.value;

      this.$emit("input", this.newValue);
    }
  }
};
</script>
```

### .sync

#### .sync 原理

#### .sync 用法
