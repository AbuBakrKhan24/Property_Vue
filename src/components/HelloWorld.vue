<template>
  <div class="hello">
    <section id="landing_page">
      <div class="container-fluid head_content">
        <header class="title">
          <h1>Welcome to Find Your Home Today</h1>
          <p><i>“Let us Guide you Home” -Compass</i></p>
        </header>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

section {
  min-height: 100vh;
}

#landing_page {
  background-image: url("https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Background/Landing%20Page/sawa's%20home.png?raw=true");
  background-size: cover;
  opacity: 0.8 black;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  color: white;
  text-shadow: 2px 2px #38435a;
  text-align: center;
}

/* Sort & Filter */
.sort-filter {
  justify-content: center;
  display: flex;
  border: 1px solid;
  border-radius: 6px;
  /* padding: 40px; */
  backdrop-filter: blur(5px);
  height: auto;
  width: 100%;
}

select {
  width: 130px;

  background-color: rgba(255, 0, 0, -5.1);
  border: 2px solid black;
  border-radius: 6px;
}

select:focus-visible {
  overflow: none !important;
}

.button_div {
  display: flex;
  justify-content: center;
}

.search_btn {
  background-color: rgba(255, 0, 0, -5.1);
  border: 2px solid black;
  border-radius: 6px;
  margin: 0;
  width: 200px;
}

.search_btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

option {
  background-color: rgb(51 179 254);
}

label {
  /* display: inline-block; */
  display: flex;
  flex-direction: column;
  color: white;
  text-shadow: 2px 2px #38435a;
}
/* Sort & Filter Done */

button {
  margin-right: 10%;
}
</style>
