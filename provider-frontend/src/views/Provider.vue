<template>
  <div class="container">
    <h1>Proveedores</h1>

    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >{{ mensaje.texto }}</b-alert>

    <form @submit.prevent="editarProveedor(proveedorEditar)" v-if="editar">
      <h3>Editar Proveedor</h3>
      <input
        type="text"
        class="form-control my-2"
        placeholder="Nombre"
        v-model="proveedorEditar.nombre"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Descripción"
        v-model="proveedorEditar.direccion"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Descripción"
        v-model="proveedorEditar.telefono"
      />
      <b-button class="btn-warning my-2 mx-2" type="submit">Editar</b-button>
      <b-button class="my-2" type="submit" @click="editar = false">Cancelar</b-button>
    </form>

    <form @submit.prevent="agregarProveedor()" v-if="!editar">
      <h3>Agregar nuevo proveedor</h3>
      <input type="text" class="form-control my-2" placeholder="Nombre" v-model="proveedor.nombre" />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Dirección"
        v-model="proveedor.direccion"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Telefono"
        v-model="proveedor.telefono"
      />
      <b-button class="btn-success my-2 btn-block" type="submit">Agregar</b-button>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Dirección</th>
          <th scope="col">Telefono</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in proveedores" :key="index">
          <th scope="row">{{item.id}}</th>
          <td>{{item.nombre}}</td>
          <td>{{item.direccion}}</td>
          <td>{{item.telefono}}</td>
          <td>
            <!--<b-button @click="alerta()">Acción</b-button>-->
            <b-button
              @click="eliminarProveedor(item.id)"
              class="btn btn-danger btn-sm mx-2"
            >Eliminar</b-button>
            <b-button @click="activarEdicion(item.id)" class="btn btn-warning btn-sm">Editar</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proveedores: [],
      proveedor: {
        id: 0,
        nombre: "",
        direccion: "",
        telefono: ""
      },
      editar: false,
      proveedorEditar: {},
      mensaje: { color: "", texto: "" },
      dismissSecs: 3,
      dismissCountDown: 0
    };
  },
  created() {
    this.listarProveedor();
  },
  methods: {
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
    listarProveedor() {},
    agregarProveedor() {},
    eliminarProveedor(id) {},
    activarEdicion(id) {},
    editarProveedor(item) {}
  }
};
</script>
