<template>
  <div>
    <div class="base" id="base">
      <div class="menu" @click="toggle()">
        <div class="icon">
          <div class="bar"></div>
        </div>
      </div>
      <div class="icons">
        <i class="fa fa-home" aria-hidden="true"></i>
      </div>
      <div class="section">
        <div class="cover1">
          <div class="cover2">
            <router-link to="/">
              <a class="content"></a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toggle: function() {
      let element = document.getElementById("base");
      element.classList.toggle("close");
    }
  }
};
</script>

<style scoped>
/* Para esconder la seccion rosa y mantener el menu hamburguesa encima */
.base .menu {
  z-index: 100;
  background-color: #ffffff;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100px;
  height: 100px;
  border-bottom-right-radius: 200px;
  cursor: pointer;
  -webkit-transition: all 1s cubic-bezier(0.5, -0.75, 0.05, 1),
    background-color 1s ease;
  transition: all 1s cubic-bezier(0.5, -0.75, 0.05, 1), background-color 1s ease;
}

/* Icono Hamburguesa */
.base .menu .icon {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-100%, -100%);
  transform: translate(-100%, -100%);
}

.base .menu .icon:before,
.base .menu .icon:after {
  content: "";
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: top 0.5s ease 0.5s, background-color 0.75s ease 0.25s,
    -webkit-transform 0.5s ease;
  transition: top 0.5s ease 0.5s, background-color 0.75s ease 0.25s,
    -webkit-transform 0.5s ease;
  transition: top 0.5s ease 0.5s, transform 0.5s ease,
    background-color 0.75s ease 0.25s;
  transition: top 0.5s ease 0.5s, transform 0.5s ease,
    background-color 0.75s ease 0.25s, -webkit-transform 0.5s ease;
}

.base .menu .icon .bar,
.base .menu .icon:before,
.base .menu .icon:after {
  position: absolute;
  height: 5px;
  left: 0px;
  right: 0px;
  border-radius: 5px;
  background-color: #21264b;
}

.base .menu .icon .bar {
  -webkit-transition: opacity 0s linear 0.5s, background-color 0.75s ease 0.25s;
  transition: opacity 0s linear 0.5s, background-color 0.75s ease 0.25s;
  opacity: 1;
  top: 10px;
}

.base .menu .icon:before {
  top: 0px;
}

.base .menu .icon:after {
  top: initial;
  top: 20px;
}

/* Para que el icono no desaparezca */
.base .icons {
  z-index: 98;
  position: absolute;
  top: 0px;
  left: 0px;
}

.base .icons > * {
  position: absolute;
  font-size: 40px;
  color: #21264b;
  -webkit-transition: 0.3s cubic-bezier(0.5, -0.25, 0.05, 1);
  transition: 0.3s cubic-bezier(0.5, -0.25, 0.05, 1);
}

/* Transicion del icono */
.base .icons .fa-home {
  top: 0px;
  left: 0px;
  color: #fff;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

/* Definir y ajustar la poscicion de la seccion rosa */
.base .section {
  z-index: 96;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 0px;
  width: 0px;
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}

.base .section .cover1 {
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

/* Elemento para esconder el elemento rosa */
.base .section .cover1,
.base .section .cover1 .cover2,
.base .section .cover1 .cover2 .content {
  position: absolute;
  width: 600px;
  height: 600px;
}

/* Posicion de la seccion rosa */
.base .section .cover1,
.base .section .cover1 .cover2 {
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-100%, -100%) rotate(4deg);
  transform: translate(-100%, -100%) rotate(4deg);
  overflow: hidden;
  pointer-events: none;
  -webkit-transition: -webkit-transform 0.5s ease-in;
  transition: -webkit-transform 0.5s ease-in;
  transition: transform 0.5s ease-in;
  transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in;
}

.base .section .cover1 .cover2 {
  -webkit-transform: translate(50%, -50%) rotate(-8deg);
  transform: translate(50%, -50%) rotate(-8deg);
  -webkit-transform-origin: 0% 100%;
  transform-origin: 0% 100%;
}

/* Transicion de la seccion rosa */
.base .section .cover1 .cover2 .content {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #ee1b59;
  top: 100%;
  left: 0%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: background-color 0s,
    width 1.5s cubic-bezier(0.5, -0.5, 0.05, 1) 0s,
    height 1.5s cubic-bezier(0.5, -0.5, 0.05, 1) 0s;
  transition: background-color 0s,
    width 1.5s cubic-bezier(0.5, -0.5, 0.05, 1) 0s,
    height 1.5s cubic-bezier(0.5, -0.5, 0.05, 1) 0s;
  pointer-events: auto;
}

/* Section del Hamburguer */
.base.close .menu {
  width: 150px;
  height: 150px;
  -webkit-transition: all 1s cubic-bezier(0.5, 0, 0.05, 1.75),
    background-color 1s ease;
  transition: all 1s cubic-bezier(0.5, 0, 0.05, 1.75), background-color 1s ease;
  background-color: #21264b;
}

/* Animación de la cruzeta */
.base.close .menu .icon .bar,
.base.close .menu .icon:before,
.base.close .menu .icon:after {
  background-color: #ffffff;
}

.base.close .menu .icon .bar {
  opacity: 0;
}

.base.close .menu .icon:before,
.base.close .menu .icon:after {
  -webkit-transition: top 0.5s linear, background-color 0.75s ease 0.25s,
    -webkit-transform 0.5s ease 0.5s;
  transition: top 0.5s linear, background-color 0.75s ease 0.25s,
    -webkit-transform 0.5s ease 0.5s;
  transition: top 0.5s linear, transform 0.5s ease 0.5s,
    background-color 0.75s ease 0.25s;
  transition: top 0.5s linear, transform 0.5s ease 0.5s,
    background-color 0.75s ease 0.25s, -webkit-transform 0.5s ease 0.5s;
}

.base.close .menu .icon:before {
  top: 10px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.base.close .menu .icon:after {
  top: 10px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.base.close .icons > * {
  cursor: pointer;
}

/* Section del elemento home */
.base.close .icons .fa-home {
  top: 141px;
  left: 141px;
  color: #fff;
  -webkit-transition-delay: 0.65s;
  transition-delay: 0.65s;
}

.base.close .section .cover1,
.base.close .section .cover1 .cover2,
.base.close .section .cover1 .cover2 .content {
  position: absolute;
  width: 600px;
  height: 600px;
}

.base.close .section .cover1,
.base.close .section .cover1 .cover2 {
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-100%, -100%) rotate(16deg);
  transform: translate(-100%, -100%) rotate(16deg);
  overflow: hidden;
  -webkit-transition: -webkit-transform 0.5s ease-in 0.5s;
  transition: -webkit-transform 0.5s ease-in 0.5s;
  transition: transform 0.5s ease-in 0.5s;
  transition: transform 0.5s ease-in 0.5s, -webkit-transform 0.5s ease-in 0.5s;
}

.base.close .section .cover1 .cover2 {
  -webkit-transform: translate(50%, -50%) rotate(-32deg);
  transform: translate(50%, -50%) rotate(-32deg);
  -webkit-transform-origin: 0% 100%;
  transform-origin: 0% 100%;
}

.base.close .section .cover1 .cover2 .content {
  border-radius: 100%;
  background-color: #ee1b59;
  top: 100%;
  left: 0%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: background-color 0s,
    width 1.1s cubic-bezier(0.5, 0, 0.05, 1.75) 0.25s,
    height 1.1s cubic-bezier(0.5, 0, 0.05, 2) 0.25s;
  transition: background-color 0s,
    width 1.1s cubic-bezier(0.5, 0, 0.05, 1.75) 0.25s,
    height 1.1s cubic-bezier(0.5, 0, 0.05, 2) 0.25s;
}

.base.close .section .cover1 .cover2 .content:hover {
  background-color: #dd1350;
}
</style>