<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <div class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <router-link to="/home" class="navbar-brand">Home</router-link>
                </li>
                <li class="nav-item" >
                    <a href="/" @click="handleClick" class="nav-link" >Log out</a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  name:'Nav',
  data(){
    return {
      appData: localStorage.getItem('state')

    }
  },
  methods:{
    handleClick(){
        localStorage.removeItem('state')
        this.$router.push('/login');
      }
    },
    computed:{
      getLogOut(){
        return this.$store.state.logOut
      }
    }
}
</script>