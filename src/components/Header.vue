<template>
  <header :class="$style.header">
    <h1 :class="$style.title">
      Julian <br/> Romana
    </h1>
    <nav :class="$style.nav">
      <span :class="$style.items">works</span>
      <span :class="$style.items">about</span>
      <span :class="$style.items">contact</span>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',

}
</script>

<style lang="scss" module>
.header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 11.2rem;
  width: 100%;
  align-items: center;
  color: $white;
}

.title {
  font-size: 2rem;
  font-weight: bold;
}

.nav {
  display: grid;
  grid-auto-flow: column;
  grid-gap: .8rem;
  font-family: $main-font;
}

.items {
  cursor: pointer;
}

</style>
