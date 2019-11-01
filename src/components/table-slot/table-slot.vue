<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in columns">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row,rowIndex) in data">
        <td v-for="col in columns">
          <template v-if="'slot' in col">
            <slot
              :row="row"
              :column="col"
              :index="rowIndex"
              :name="col.slot"
            ></slot>
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
  export default {
    props: {
      columns: {
        type: Array
      },
      data: { type: Array }
    }
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
