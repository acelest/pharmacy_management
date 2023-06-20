<template>
  <div>
    <sidebar></sidebar>
    Le reste du contenu de votre page d'accueil
  </div>
</template>


  <script>
import Sidebar from '@/components/Sidebar.vue';
export default {
  components: {
    Sidebar,
  },
  // ...
};
</script>