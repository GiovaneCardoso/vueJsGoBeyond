<template>
  <div class="contact" >
          <router-link :to="{name: 'home'}"><img src="../assets/logo.png"></router-link>
    <h1>Contato</h1>
    <form action="#" v-on:submit="preventdefaultfunc">
    
    <label>Digite seu email</label><br>
    <input type="email"><br><br>
    <input type="submit" value="xD"> 
    <br><br>
    </form>
    <router-link :to="{name: 'home'}"><button>Voltar a home</button></router-link>
  </div>
</template>
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
    &:hover{
      transform: scale(1.1);
    }
} 
</style>
<script>
export default {
  name: 'Contact',
  methods: {
    preventdefaultfunc(e){
      e.preventDefault();
      console.log("Prevent working");
    }
  }
}
</script>