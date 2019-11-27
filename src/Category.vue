<template>
  <div id="category">

      <router-link :to="{name: 'home'}"><img src="./assets/logo.png"></router-link>

      <h1>Categoria  - {{$route.params.name}}</h1>
      <h2>{{$route.params.name}} em destaque:</h2>
    
      <ul>
        <li><router-link :to="{name: 'product', params: {name: 'Produto1'}}">Item 1</router-link></li>
        <li><router-link :to="{name: 'product', params: {name: 'Produto2'}}">Item 2</router-link></li>
      </ul>
      <br>
        <button v-on:click="goback">Voltar</button>  

  </div>
</template>

<script>


export default {
  name: 'category',
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
<style lang='scss'>

ul{
  padding: 0;
}
button{
      padding: 10px 33px;
    color: #35495e;
    background-color: #42b883;
    border: 1px solid #42b883;
    box-shadow: 2px 2px 7px grey;
        cursor: pointer;

        &:hover {
    transform: scale(1.1);
}

}
#category {
ul{
  display: flex;
  flex-direction: column;
  justify-content: center;
  li{
    list-style: none;
  }
}

}
a{
  text-decoration: none;
  color: #707070;
  &:hover{
  color: red;
}
}

</style>
