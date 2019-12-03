<template>
  <div id="home">
    <HelloWorld msg="Olá, Teste" valor="32"></HelloWorld>
    <img src="./assets/logo.png" />
    <h1>Home</h1> 
    <br />
    <h2>Departamentos:</h2>
    <br />
    <ul>
      <li>
        <router-link :to="{name: 'category', params: {name: 'Camisetas'}}">Camisetas</router-link>
      </li>
     <li>
        <router-link :to="{name: 'category', params: {name: 'Calcas'}}">Calças</router-link>
      </li>
      <li>
        <router-link :to="{name: 'category', params: {name: 'Bolsas'}}">Bolsas</router-link>
      </li>
      <li>
        <router-link :to="{name: 'category', params: {name: 'Acessorios'}}">Acessorios</router-link>
      </li>
    </ul>
    <br />

    <h2>Produtos em destaque:</h2>
    <br />
    <ul>
      <li>
        <router-link :to="{name: 'product', params: {name: 'Produto1'}}">Produto 1</router-link>
      </li>
      <li>
        <router-link :to="{name: 'product', params: {name: 'Produto2'}}">Produto 2</router-link>
      </li>
      <li>
        <router-link :to="{name: 'product', params: {name: 'Produto3'}}">Produto 3</router-link>
      </li>
    </ul>
    <br />
    <h2>Contato</h2>
    <br />
    <router-link :to="{name: 'contato'}">Contato</router-link>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "home",
  mounted() {
    this.alerta();
  },
  components: {
    HelloWorld
  },

  methods: {
    goback: function() {
      window.history.back();
    },

    alerta: function() {
      console.log("Mounted working!");
    }
  }
};
</script>
<style lang="scss" scoped>
$base-color: #42b883;

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background: $base-color;
  border-radius: 5px;
  &:hover {
    background: lightgreen;
  }
}
::-webkit-scrollbar-track {
  background: #c7c7c7;
}

a { 
  text-decoration: none;
  color: #707070;
  &:hover {
    color: $base-color;
  }
}

h2 {
  color: #42b883;
}

ul {
  padding: 0;
}
#home {
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      list-style: none;
      
    }
  }
}
</style>

