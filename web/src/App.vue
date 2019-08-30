<template>
  <div id="app" class="container">
<!-- set navbar style and hide navbar in login and register page -->
    <nav  id="nav" v-if="$route.name!='login' && $route.name!='register'" class="navbar  navbar-expand-sm bg-primary">
      <h5 style="color:white" text-align="left"><u>DMC5 DataBase</u></h5>
      <ul class="navbar-nav ml-auto" text-align="right">
        <li class="nav-item">
          <router-link to="/games" class="nav-link" style="color:white; width:66px"><p class="nav-height" style="text-align:center; margin:0px; padding:0px"><font size="2">List</font></p><u><font size="2">Games</font></u></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addGame" class="nav-link" style="color:white; width:66px"><p class="nav-height" style="text-align:center; margin:0px; padding:0px"><font size="2">Add</font></p><u><font size="2">Games</font></u></router-link>
        </li>      
        <li class="nav-item">
          <router-link to="/searchGame" class="nav-link" style="color:white; width:66px"><p class="nav-height" style="text-align:center; margin:0px; padding:0px"><font size="2">  Search</font></p><u><font size="2">Games</font></u></router-link>
        </li>                                        
        <li class="nav-item">
          <router-link to="/" class="nav-link" style="color:white; width:52px"><p class="nav-height" style="text-align:center; margin:0px; padding:0px"><font size="2"></font></p><u><font size="2">Logout</font></u></router-link>
        </li>        
      </ul>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 70px;
}

#nav {
  padding: 30px;
  text-align:right;
}

.nav-item {
  tex-align:right;
  text-color:white;  
  height: 40px
}

.nav-height {
  height: 16px
}

.form-wrapper {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.table thead th { 
  background-color: pink;
  border: 1px solid black;
}

.table tbody td { 
  border: 1px solid black;
}

ul li{
  display: inline;
}

</style>
