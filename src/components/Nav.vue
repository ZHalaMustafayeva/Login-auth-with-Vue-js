<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <router-link to="/home" class="navbar-brand">Home</router-link>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Login</router-link>
              </li>
            </ul>
              <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="/" @click="handleClick" class="nav-link">Log out</a>
              </li>
            </ul>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  name:'Nav',
  props:['logOut'],
  methods:{
     handleClick(){
        localStorage.removeItem('state')
        this.$router.push('/login');
        console.log(this.$store.state.logOut)
     }
   },
   computed:{
     arr(){
      return this.$store.state
    }
   }
}
</script>