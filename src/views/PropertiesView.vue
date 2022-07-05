<template>
  <div class="row">
    <PropertyCard
      v-for="property in properties"
      :key="property.id"
      class="col-md-4 col-sm-6"
      :property="property"
    />
  </div>
</template>
<script>
import PropertyCard from "../components/PropertyCard.vue";

export default {
  components: { PropertyCard },
  data() {
    return {
      properties: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((data) => (this.properties = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style></style>
