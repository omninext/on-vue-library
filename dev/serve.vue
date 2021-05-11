<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { OnVueLibrary, OnButton, OnForm } from '@/entry.esm';


export default Vue.extend({

  name: 'ServeDev',
  // components: {
  //  OnVueLibrarySample,
  // }
});
</script>

<template>
  <div id="app">
    <on-vue-library />
    <on-button>Ciao</on-button>
    <on-form title="Test">
      <template v-slot:content>
        <h1>content</h1>
      </template>
    </on-form>
  </div>
</template>
