<template>
  <div class="">
    <div class="staff">
      <img
        id="property_img"
        class="img-fluid"
        v-bind:src="property.property_img"
      />
      <div class="staff-details">
        <div class="badge_div">
          <span class="badge text-bg-primary" id="sale/rent">{{
            property.badge
          }}</span>
        </div>

        <h5 id="property_type">{{ property.property_type }}</h5>
        <p id="property_details">
          {{ property.description }}
        </p>
        <div>
          R
          <span id="price">
            {{ property.price }}
            {{ property.badge == "For Sale" ? "" : "pm" }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["property"],
};
</script>
<style>
img {
  object-fit: cover;
  max-width: 100%;
  height: 160.7px;
}

.properties_details {
  display: flex;
  flex-wrap: wrap;
}

.properties_block {
  margin: 10px;
  border: #61c1f8;
}

/* Cards */
.staff {
  position: relative;
  /* width: 348.33px; */
  max-height: 286.24px;
}

.staff img {
  /* width: 368.33px; */
  height: 286.24px;
  border: 1px solid black;
}

.col-md-4 {
  padding-bottom: 12px;
  padding-top: 12px;
}

.staff-details {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  opacity: 1;
  transition: all 0.3s linear;
  backdrop-filter: blur(2px);
  border: 1px solid black;
}

.staff:hover .staff-details {
  border: 1px solid black;
  opacity: 0;
}

.badge {
  border-radius: 1;
}

.badge_div {
  height: 100%;
  margin-top: -25px;
  margin-left: -20px;
}

.badge_div2 {
  position: absolute;
  top: 5px;
  right: 10px;
}

span.sold {
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  color: red;
  font-size: 46px;
  transform: rotate(328deg);
}
span.sold:hover {
  color: beige;
  z-index: 1;
}
</style>
