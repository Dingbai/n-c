<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.key">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row,index) in data" :key="index">
        <td v-for="col in columns">
          <template v-if="'render' in col">
            <render
              :row="row"
              :column="col"
              :index="index"
              :render="col.render"
            ></render>
          </template>
          <template v-else>
            {{ row[col.key] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import Render from './render.js'
  export default {
    props: {
      columns: {
        type: Array
      },
      data: {
        type: Array
      }
    },
    components: { Render }
  }
</script>

<style scoped>
  table,
  td,
  th {
    border: 1px solid #333;
    padding: 5px 10px;
  }
  th {
    background-color: #ddd;
  }
</style>
