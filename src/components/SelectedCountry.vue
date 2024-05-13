<template>
  <div class="selected-country">
    <img
      v-for="country in countries"
      :src="country.srcAddress"
      :alt="country.altText"
      :class="{ active: store.state.country === country.code }"
      @click="() => store.commit(CHANGE_COUNTRY_CODE, country.code)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

import { CHANGE_COUNTRY_CODE } from "../constants/store.js";

import kazakhstanCountryIcon from "../assets/svg/kazakhstan.svg";
import kyrgyzstanCountryIcon from "../assets/svg/kyrgyzstan.svg";
import uzbekistanCountryIcon from "../assets/svg/uzbekistan.svg";

const store = useStore();

const countries = ref([
  {
    srcAddress: kazakhstanCountryIcon,
    altText: "kazakhstan",
    code: "KZ",
  },
  {
    srcAddress: kyrgyzstanCountryIcon,
    altText: "kyrgyzstan",
    code: "KG",
  },
  {
    srcAddress: uzbekistanCountryIcon,
    altText: "kazakhstan",
    code: "UZ",
  },
]);
</script>
