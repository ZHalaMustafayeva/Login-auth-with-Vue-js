<template>
  <div>
    <h3 v-if='email'>E-mail: {{email}}</h3>
    <h3>Password: {{pass}}</h3>
    <h3 v-if="!email">you are not logged in</h3>
  </div>
</template>

<script>
// import store from 'vuex'
export default {
  name:'Home',
  computed:{
    email(){
      return this.$store.state.email
    },
     pass(){
      return this.$store.state.pass
    }
  }
  
}
</script>