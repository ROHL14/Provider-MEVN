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
        placeholder="Telefono"
        v-model="proveedorEditar.telefono"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Direccion"
        v-model="proveedorEditar.direccion"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Compañia"
        v-model="proveedorEditar.compañia"
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
      <b-button class="btn-success my-2 btn-block" type="submit">Agregar</b-button>
    </form>

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
        <tr v-for="(item, index) in proveedores" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.nombre }}</td>
          <td>{{ item.telefono }}</td>
          <td>{{ item.direccion }}</td>
          <td>{{ item.compañia }}</td>
          <td>
            <!--<b-button @click="alerta()">Acción</b-button>-->
            <b-button
              @click="eliminarProveedor(item._id)"
              class="btn btn-danger btn-sm mx-2"
            >Eliminar</b-button>
            <b-button @click="activarEdicion(item._id)" class="btn btn-warning btn-sm">Editar</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      proveedores: [],
      proveedor: {
        nombre: "",
        telefono: "",
        direccion: "",
        compañia: ""
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
  computed: {},
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
    listarProveedor() {
      this.axios.get("/").then(res => {
        console.log(res);
        this.proveedores = res.data;
      });
    },
    agregarProveedor() {
      this.axios
        .post("/", this.proveedor)
        .then(res => {
          // Agrega el proveeodr a nuestro array
          this.proveedores.push(res.data);

          // Limpiar los datos del formulario
          this.proveedor.nombre = "";
          this.proveedor.telefono = "";
          this.proveedor.direccion = "";
          this.proveedor.compañia = "";

          // Alerta de mensaje
          this.showAlert();
          this.mensaje.texto = "Proveedor Agregado!";
          this.mensaje.color = "success";
        })
        .catch(e => {
          // Alerta de mensaje
          this.showAlert();
          this.mensaje.color = "danger";

          if (e.response.data.error.errors.nombre.properties.message) {
            this.mensaje.texto =
              e.response.data.error.errors.nombre.properties.message;
          } else {
            this.mensaje.texto = "Error del sistema";
          }
        });
    },
    eliminarProveedor(id) {
      this.axios
        .delete(`/${id}`)
        .then(res => {
          // Buscamos el proveedor que eliminamos para borrarlo del array
          const index = this.proveedores.findIndex(
            item => item._id === res.data._id
          );
          this.proveedores.splice(index, 1);

          // Alerta de mensaje
          this.showAlert();
          this.mensaje.texto = "Proveedor Eliminado";
          this.mensaje.color = "success";
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    activarEdicion(id) {
      this.editar = true;
      this.axios
        .get(`/${id}`)
        .then(res => {
          this.proveedorEditar = res.data;
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    editarProveedor(item) {
      this.axios
        .put(`/${item._id}`, item)
        .then(res => {
          const index = this.proveedores.findIndex(n => n._id === res.data._id);
          this.proveedores[index].nombre = res.data.nombre;
          this.proveedores[index].telefono = res.data.telefono;
          this.proveedores[index].direccion = res.data.direccion;
          this.proveedores[index].compañia = res.data.compañia;

          // Alerta de mensaje
          this.showAlert();
          this.mensaje.texto = "Proveeodor Editado";
          this.mensaje.color = "success";

          this.editar = false;
        })
        .catch(e => {
          console.log(e.response);
        });
    }
  }
};
</script>