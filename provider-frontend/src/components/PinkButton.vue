<template>
  <div>
    <button class="btn-action align-content-start">{{btnText}}</button>
  </div>
</template>

<script>
export default {
  name: "PinkButton",
  props: {
    btnText: String
  }
};
</script>

<style >
.btn-action,
.btn-action:link,
.btn-action:visited {
  color: white;
  background: #ee1b59;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1rem 3rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.2s;
  position: relative;
  border: none;
  cursor: pointer;
}

.btn-action:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 1rem 2rem rgba(black, 0.2);
}

.btn-action:hover:before {
  width: 100%;
}

.btn-action::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btn-action:active,
.btn-action:focus {
  outline: none;
  transform: translateY(-0.1rem);
  box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
}

.btn-action::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 10rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}
</style>