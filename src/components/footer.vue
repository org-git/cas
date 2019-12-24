<template>
  <footer>&copy;</footer>
</template>

<script>
export default {
  data() {
      return { year: monent().utc().format('YYYY') }
  }
};
</script>
