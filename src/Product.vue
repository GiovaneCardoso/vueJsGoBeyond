<template>
  <div id="product">
      <router-link :to="{name: 'home'}"><img src="./assets/logo.png"></router-link>

      <h1>Produto  - {{$route.params.name}}</h1>
      <br>
      <h2>Este é o {{$route.params.name}}</h2>
      <!-- <router-link :to="{name: 'home'}">Voltar</router-link>     -->
      <br>
      <button v-on:click="goback">Voltar</button>  <br><br><br>
      <router-link :to="{name: 'home'}"><button>Voltar a Home</button></router-link>

  </div>
</template>

<style lang='scss'> 

button{

    padding: 10px 33px;
    color: #35495e;
    background-color: #42b883;
    border: 1px solid #42b883;
    box-shadow: 2px 2px 7px grey;
    cursor: pointer;

  &:hover{
    transform: scale(1.1)
  }
}

ul{
  padding: 0;
}

</style>

<script>


export default {
  name: 'product',
  mounted(){
    this.alerta();
  },

    methods: {
    goback: function(){
      window.history.back();
    },

    alerta: function(){
      console.log("Mounted working!");

}

}

}
</script>

