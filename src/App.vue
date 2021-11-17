<template>
  <v-app>

   
    <Nav/>
    <div data-app class="new-post">
      <AddPost/>
    </div>
  <br><br><br>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Nav from './components/Nav.vue'
import AddPost from './components/AddPost.vue'
export default {
  name: 'App',
  components:{
    Nav,
    AddPost
  }
  
};
</script>
<style scoped>
.new-post{
  display: flex;
  justify-content: space-between;
  margin-top: 110px;
}
</style>