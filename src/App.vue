<template>
  <div id="app">
    <SimonGame />
  </div>
</template>

<script>
import SimonGame from "./components/SimonGame.vue";

export default {
  name: "App",
  components: {
    SimonGame,
  },
};
</script>

<style lang="scss">

// Colors
$bgColor: #080808;
$textColor: #ccc;

/*-----------------------------------
// Reset CSS
-----------------------------------*/
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

::-webkit-input-placeholder {
  opacity: 1;
}
::-moz-placeholder {
  opacity: 1;
}
:-ms-input-placeholder {
  opacity: 1;
}

html,
body {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  background-color: $bgColor;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input,
button,
textarea,
select {
  background: transparent;
  font-size: inherit;
  outline: none;
}

button {
  cursor: pointer;
  color: inherit;
  outline: none;
}

a {
  color: inherit;
}

:focus {
  border: inherit;
  outline: none;
}

a:link,
a:visited,
a:hover {
  text-decoration: none;
}

span {
  display: inline-block;
}

a:focus,
a:active {
  outline: none;
  border: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}


#app {
  overflow: hidden;
  background-color: $bgColor;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;

  color: $textColor;
  font-family: sans-serif;
}

</style>
