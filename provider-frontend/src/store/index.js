import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    providers: [],
    provider: {},
    edit: false,
    providerEdit: {},
  },
  mutations: {
    GET_PROVIDERS(state, providerAction) {
      state.providers = providerAction;
    },
    POST_PROVIDER: async (state, provider) => {
      state.provider = provider;
    },
    DELETE_PROVIDER: async (state, id) => {
      // Buscamos el proveedor que eliminamos para borrarlo del array
      const index = state.providers.findIndex((item) => item._id === id);
      state.providers.splice(index, 1);
    },
    PUT_PROVIDER: async (state, item) => {
      const index = state.providers.findIndex((n) => n._id === item._id);
      state.providers[index].nombre = item.nombre;
      state.providers[index].telefono = item.telefono;
      state.providers[index].direccion = item.direccion;
      state.providers[index].compañia = item.compañia;

      state.edit = false;
    },
    EDIT_ACTIVATE: (state, item) => {
      state.edit = true;
      state.providerEdit = item;
    },
    EDIT_DEACTIVATE: (state) => {
      state.edit = false;
    },
  },
  actions: {
    getProviders: async ({ commit }) => {
      axios.get("/").then((res) => {
        const data = res.data;
        commit("GET_PROVIDERS", data);
      });
    },
    postProvider({ commit }, provider) {
      axios
        .post("/", provider)
        .then(() => {
          commit("POST_PROVIDER", provider);
        })
        .catch((e) => {
          if (e.response.data.error.errors.nombre.properties.message) {
            console.log(e.response.data.error.errors.nombre.properties.message);
          } else {
            console.log("Error del sistema");
          }
        });
    },
    deleteProvider({ commit }, id) {
      axios.delete(`/${id}`).then(() => {
        commit("DELETE_PROVIDER", id);
      });
    },
    updateProvider({ commit }, item) {
      axios.put(`/${item._id}`, item).then(() => {
        commit("PUT_PROVIDER", item);
      });
    },
    editActivate({ commit }, id) {
      axios.get(`/${id}`).then((res) => {
        commit("EDIT_ACTIVATE", res.data);
      });
    },
    editDeactivate({ commit, id }) {
      commit("EDIT_DEACTIVATE");
    },
  },
  modules: {},
});
