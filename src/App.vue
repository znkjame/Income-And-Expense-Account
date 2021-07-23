<template>
  <div id="app">
    <div id="nav" align="left">
      <h1>Income And Expense Account</h1>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,200&display=swap');
$primary-font: 'Kanit', sans-serif;;
$primary-color: #800000;
$secondary-color: #FD6060;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  font-family: 'kanit';
  color: white;
  padding: 10px;
  background-color: #800000;
  height: 80px;
}
h1{
  padding-left: 20px;
}
</style>
