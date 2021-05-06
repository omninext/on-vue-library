<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { OnVueLibrarySample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  OnVueLibrarySample,
  // }
});
</script>

<template>
  <div id="app">
    <on-vue-library-sample />
  </div>
</template>
