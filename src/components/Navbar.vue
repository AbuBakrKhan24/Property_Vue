<template>
  <div>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <nav class="navbar navbar-expand-lg text-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link active text-light"
                aria-current="page"
                to="/"
                >Home</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link text-light" to="/properties"
                >Properties</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/admin"
                >Admin</router-link
              >
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
