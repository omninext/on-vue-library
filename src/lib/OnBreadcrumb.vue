<template>
  <ul class="flex space-x-1 on-breadcumb">
    <li @click="$emit('click', item)" v-for="(item, i) in crumbs" :key="i">
      <localized-link :to="item.to">
        {{ item.text }}
      </localized-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "OnBreadcrumb",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    crumbs: function () {
      // let pathArray = this.$route.path.split("/");
      // pathArray.shift();
      // pathArray.splice(0, 1);

      // if (pathArray.length > 1) {
      //   // let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
      //   //   breadcrumbArray.push({
      //   //     path: path,
      //   //     to: breadcrumbArray[idx - 1]
      //   //       ? "/" + breadcrumbArray[idx - 1].path + "/" + path
      //   //       : "/" + path,
      //   //     text: path.replaceAll("-", " "),
      //   //   });
      //   //   return breadcrumbArray;
      //   // }, []);

      //   return [] //breadcrumbs;
      // } else {
      //   return [];
      // }
      return []
    },
  },
};
</script>

<style  scoped>
/* li {
  @apply text-secondary-400 text-xs;
}

li:not(:first-child):before {
  content: " / ";
}

li:last-child {
  @apply font-bold;
} */
</style>
