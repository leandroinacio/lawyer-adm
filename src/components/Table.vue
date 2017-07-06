<template>
    <!-- Example Tables Card -->
    <div class="card mb-3" id=table>
        <div class="card-header">
            <i class="fa fa-table"></i> Owners List
        </div>
        <div class="card-block">
            <div class="table-responsive">
                <div id="people">
                    <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
                </div>
            </div>
        </div>
        <div class="card-footer small text-muted">
            Updated yesterday at 11:59 PM
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueTables from 'vue-tables-2'
Vue.use(VueTables.ClientTable)

export default {
  name: 'table',
  data: function () {
    return {
      columns: ['id', 'name', 'age'],
      tableData: [
          {id: 1, name: 'John', age: '20'},
          {id: 2, name: 'Jane', age: '24'},
          {id: 3, name: 'Susan', age: '16'},
          {id: 4, name: 'Chris', age: '55'},
          {id: 5, name: 'Dan', age: '40'}
      ],
      options: {
      // see the options API
      }
    }
  }
}
</script>
