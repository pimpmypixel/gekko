<template lang='jade'>
  section.contain.grd-row
    .grd-row-col-3-6(v-html='left')
    .grd-row-col-3-6.txt--center
      img(:src='imageUrl')
      p
        em The most valuable commodity I know of is information.
</template>

<script>
import marked from '../../tools/marked';
import { basePath } from '../../tools/api';

const left = marked(`

## SOFUS & ANDREAS

`);

export default {
  data: () => {
    return {
      left
    }
  },
  computed: {
    imageUrl: function() {
      return basePath + 'assets/gekko.jpg';
    }
  }
}
</script>
