<template>
  <div id="records" class="container-fluid">  
    <button type="button" class="row btn btn-primary" @click="goToCreateRecord">Criar Registro</button>
    <div class="row">
      <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
Vue.use(VueTables.ClientTable)

export default {
  name: 'records',
  mounted: function () {
    let self = this
    axios.post('http://localhost:8181/lawyer/owner/fetchAll')
      .then(function (response) {
        self.tableData = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  data: function () {
    return {
      columns: ['id', 'name', 'title', 'isActive'],
      tableData: [],
      options: {}
    }
  },
  methods: {
    goToCreateRecord: function () {
      this.$router.push({ name: 'CreateRecord' })
    }
  }
}
</script>
