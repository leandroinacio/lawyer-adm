<template>
  <div id=table>
    <form>
      <div class="form-group">
        <div class="row">
          <label class="col-2 col-form-label">Nome</label>
          <div class="col-10">
            <input class="form-control" type="text" value="Nome do usuário" v-model="owner.name">
          </div>
        </div>
        <div class="row">
          <label class="col-2 col-form-label">Título</label>
          <div class="col-10">
            <input class="form-control" type="text" value="Título" v-model="owner.title">
          </div>
        </div>
        <div class="row form-check mb-2 mr-sm-2 mb-sm-0">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" v-model="owner.isActive"> Ativo
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" @click="createOwner">Submit</button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Toasted from 'vue-toasted'

Vue.use(Toasted)

export default {
  name: 'createowner',
  data: function () {
    return {
      owner: {}
    }
  },
  methods: {
    createOwner: function () {
      let self = this
      axios.post('http://localhost:8181/lawyer/owner/insert', this.owner)
        .then(function (response) {
          self.$toasted.success('Novo usuário criado.', {
            theme: 'primary',
            position: 'bottom-left',
            duration: 5000
          })
          self.$router.push({ name: 'Owner' })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
