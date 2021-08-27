// >>> Install globally - .js file <<<

import Vue from 'vue'
import VueStripeMenu from 'vue-stripe-menu'

Vue.use(VueStripeMenu)

// >>> Install locally - .vue file <<<

import { VsmMenu, VsmMob } from 'vue-stripe-menu'

export default {
  components: {
    VsmMenu, VsmMob
  }
}