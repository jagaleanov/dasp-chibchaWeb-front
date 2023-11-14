<template>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created() {
    this.initializeAuth()
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions('auth', ['initializeAuth']),
  },
};
</script>