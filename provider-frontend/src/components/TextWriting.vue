<template>
  <div class="css-typing">
    <p class="welcome">{{msg}}</p>
    <p class="name">{{msg2}}</p>
  </div>
</template>

<script>
export default {
  name: "TextWriting",
  props: {
    msg: String,
    msg2: String
  }
};
</script>

<style scoped>
.css-typing p {
  white-space: nowrap;
  overflow: hidden;
  margin: 0%;
  padding: 0%;
}

.css-typing .welcome {
  color: #ee1b59;
  border-right: 0.15em solid #ee1b59;
  font-size: 3.5rem;
  font-weight: lighter;
}

.css-typing .name {
  border-right: 0.15em solid #ee1b59;
  font-size: 5rem;
  font-weight: bolder;
}

.css-typing p:nth-child(1) {
  /*width: 6.25em;*/
  width: 49.5%;
  -webkit-animation: type 1.5s steps(40, end);
  animation: type 1.5s steps(40, end);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.css-typing p:nth-child(2) {
  /*width: 5.8em;*/
  width: 70.5%;
  opacity: 0;
  -webkit-animation: type3 1.5s steps(40, end),
    blink 0.5s step-end infinite alternate;
  animation: type3 1.5s steps(40, end), blink 0.5s step-end infinite alternate;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

@keyframes type {
  0% {
    width: 0;
  }
  99.9% {
    border-right: 0.15em solid #ee1b59;
  }
  100% {
    border: none;
  }
}

@-webkit-keyframes type {
  0% {
    width: 0;
  }
  99.9% {
    border-right: 0.15em solid #ee1b59;
  }
  100% {
    border: none;
  }
}

@keyframes type2 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: 0.15em solid #ee1b59;
  }
  100% {
    opacity: 1;
    border: none;
  }
}

@-webkit-keyframes type2 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: 0.15em solid #ee1b59;
  }
  100% {
    opacity: 1;
    border: none;
  }
}

@keyframes type3 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes type3 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
@-webkit-keyframes blink {
  50% {
    border-color: tranparent;
  }
}
</style>