<template>
  <div class="container">
    <div class="section links">
      <Nav />
    </div>
    <div class="section tribute">
      <h1 class="title">In Loving Memory</h1>
      <img width="244" height="292" src="~/assets/frontimage.jpg" alt="In loving memory" />
      <div class="subtitle"><div class="name">{{ $config.name }}</div>{{ $config.dates }}</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">

</style>
