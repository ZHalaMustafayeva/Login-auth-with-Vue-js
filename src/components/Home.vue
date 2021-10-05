<template>
  <div>
    <h3 v-if="this.$store.state.email">E-mail: {{ this.$store.state.email }}</h3>
    <h3>Password: {{ this.$store.state.pass }}</h3>
    <h3 v-if="!this.$store.state.email">you are not logged in</h3>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>