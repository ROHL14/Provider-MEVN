<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >{{ mensaje.texto }}</b-alert>

    <table class="table">
      <thead>
        <tr class="bg-dark text-white">
          <th scope="col">#</th>

          <th scope="col">Nombre</th>
          <th scope="col">Telefono</th>
          <th scope="col">Dirección</th>
          <th scope="col">Compañia</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in providers" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.nombre }}</td>
          <td>{{ item.telefono }}</td>
          <td>{{ item.direccion }}</td>
          <td>{{ item.compañia }}</td>
          <td>
            <b-button @click="editActivate(item._id)" class="btn btn-warning btn-sm">
              <i class="far fa-edit"></i>
            </b-button>
            <b-button @click="deleteProvider(item._id)" class="btn btn-danger btn-sm mx-2">
              <i class="far fa-trash-alt"></i>
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vuex from "vuex";
import store from "../store";
export default {
  name: "Table",
  data() {
    return {
      mensaje: { color: "", texto: "" },
      dismissSecs: 3,
      dismissCountDown: 0
    };
  },
  created() {
    this.getProviders();
  },
  updated() {
    //this.getProviders();
  },
  computed: {
    ...Vuex.mapState(["providers", "provider", "edit", "providerEdit"])
  },
  methods: {
    ...Vuex.mapActions(["getProviders", "deleteProvider", "editActivate"]),
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    alerta() {
      this.mensaje.color = "danger";
      this.mensaje.texto = "Probando Alerta";
      this.showAlert();
    },

    deleteProvider: async function(id) {
      await this.$store.dispatch("deleteProvider", id).then(() => {
        // Alerta de mensaje
        this.showAlert();
        this.mensaje.texto = "Proveedor Eliminado";
        this.mensaje.color = "success";
      });
    },
    editActivate: async function(id) {
      await this.$store.dispatch("editActivate", id);
    }
  }
};
</script>

<style scoped>
table {
  animation: fade-in 2s 1s both;
}

tr {
  animation: fade-in 1.5s both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>