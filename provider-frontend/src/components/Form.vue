<template>
  <div class="mt-4 pt-5">
    <h1>Proveedores</h1>

    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >{{ mensaje.texto }}</b-alert>

    <form class="container col-6" @submit.prevent="updateProvider(providerEdit)" v-if="edit">
      <h3>Editar Proveedor</h3>
      <input
        required
        type="text"
        class="form-control my-2"
        placeholder="Nombre"
        v-model="providerEdit.nombre"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Telefono"
        v-model="providerEdit.telefono"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Direccion"
        v-model="providerEdit.direccion"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Compañia"
        v-model="providerEdit.compañia"
      />
      <b-button class="btn-warning my-2 mx-2" type="submit">Editar</b-button>
      <b-button class="my-2" type="submit" @click="editDeactivate()">Cancelar</b-button>
    </form>

    <form class="container col-6" @submit.prevent="saveProvider(proveedor)" v-if="!edit">
      <h3>Agregar nuevo proveedor</h3>
      <input
        required
        type="text"
        class="form-control my-2"
        placeholder="Nombre"
        v-model="proveedor.nombre"
      />

      <input
        type="text"
        class="form-control my-2"
        placeholder="Telefono"
        v-model="proveedor.telefono"
      />

      <input
        type="text"
        class="form-control my-2"
        placeholder="Dirección"
        v-model="proveedor.direccion"
      />

      <input
        type="text"
        class="form-control my-2"
        placeholder="Compañia"
        v-model="proveedor.compañia"
      />
      <PinkButton btnText="Agregar" type="submit" class="mt-3 mb-3" />
    </form>
  </div>
</template>

<script>
import Vuex from "vuex";
import store from "../store";
import PinkButton from "./PinkButton";
export default {
  name: "Form",
  components: { PinkButton },
  data() {
    return {
      proveedor: {
        nombre: "",
        telefono: "",
        direccion: "",
        compañia: ""
      },
      mensaje: { color: "", texto: "" },
      dismissSecs: 3,
      dismissCountDown: 0
    };
  },
  created() {},
  updated() {},
  computed: {
    ...Vuex.mapState(["providers", "provider", "edit", "providerEdit"])
  },
  methods: {
    ...Vuex.mapActions([
      "getProviders",
      "postProvider",
      "updateProvider",
      "editDeactivate"
    ]),
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
    saveProvider(data) {
      this.createProvider(data);
    },
    createProvider: async function(provider) {
      await this.$store.dispatch("postProvider", provider).then(() => {
        // Limpiar los datos del formulario
        this.proveedor.nombre = "";
        this.proveedor.telefono = "";
        this.proveedor.direccion = "";
        this.proveedor.compañia = "";

        // Alerta de mensaje
        this.showAlert();
        this.mensaje.texto = "Proveedor Agregado!";
        this.mensaje.color = "success";
      });
      this.getProviders();
    },

    editDeactivate: async function(id) {
      await this.$store.dispatch("editDeactivate");
    },

    updateProvider: async function(providerUpdated) {
      await this.$store.dispatch("updateProvider", providerUpdated).then(() => {
        // Alerta de mensaje
        this.showAlert();
        this.mensaje.texto = "Proveedor Editado";
        this.mensaje.color = "success";

        this.editar = false;
      });
    }
  }
};
</script>

<style scoped>
form {
  animation: fade-in 2s both;
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