<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="allPost"
      :items-per-page="5"
      class="elevation-1"
    >

    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      headers: [
      
        { text: "User Id", value:"userId", sortable: false,  },
        { text: "Title",value:"title", sortable: false,  },
        { text: "Body",value:"body",  sortable: false, },
        
      
      ],
    };
  },
  computed: {
    ...mapGetters(["allPost"]),
  },
  mounted() {
    this.$store.dispatch("getPost");
    console.log(this.allPost);
  },
};
</script>