<template>
  <div class="home">
    <div class="cta">
      <div class="brand">
        <TextWriting msg="Bienvenidos a" msg2="Proveedores" />
      </div>
      <div class="info">
        <p>Un simple CRUD hecho con MongoDB, Express, Vue.js y Node.js</p>
      </div>
      <div class="action">
        <router-link to="/provider">
          <PinkButton btnText="Empezar" />
        </router-link>
      </div>
    </div>
    <div class="image"></div>
  </div>
</template>

<script>
import TextWriting from "@/components/TextWriting";
import PinkButton from "@/components/PinkButton";
export default {
  name: "Home",
  components: { TextWriting, PinkButton }
};
</script>

<style  scoped>
.home {
  display: flex;
}
.cta {
  height: 100vh;
  width: 45vw;
  display: flex;
  flex-direction: column;
}

.cta .brand,
.cta .info,
.cta .action {
  margin: 12rem 0 0 5rem;
}

.cta .info {
  width: 60%;
  margin-top: 3rem;
  animation: fade-in 1s 3s both;
}

.cta .action {
  margin-top: 3rem;
  align-self: start;
  animation: fade-in 1s 3.5s both;
}

.image {
  height: 100vh;
  width: 55vw;
  background-image: url("../assets/package.svg");
  background-repeat: no-repeat;
  background-size: 95%;
  background-position-y: center;
  background-position: center;
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
