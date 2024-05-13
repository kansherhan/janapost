<template>
  <div class="our-branches-page">
    <h2 class="header-title">{{ $t("title") }}</h2>

    <div class="inputs">
      <TextInput
        v-model="filterBranchName"
        :icon="searchIcon"
        :input-placeholder="$t('filterInputPlaceholder')"
      />

      <button class="button">{{ $t("search") }}</button>
    </div>

    <div class="branches">
      <BranchCard
        v-for="branch in allBranches"
        :data="branch"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from "vue";
import { useStore } from "vuex";

import BranchService from "../services/branch.service.js";

import BranchCard from "../components/BranchCard.vue";
import TextInput from "../components/TextInput.vue";
import searchIcon from "../assets/svg/search.svg";

const store = useStore();

const filterBranchName = ref("");
const branches = ref([]);

const countryCode = computed(() => store.state.country);

const allBranches = computed(() => {
  if (filterBranchName.value.length === 0) {
    return branches.value;
  }

  return branches.value.filter((branch) =>
    branch.province.includes(filterBranchName.value),
  );
});

watch(countryCode, () => getAllBranches());

const getAllBranches = async () => {
  branches.value = [];
  branches.value = await BranchService.getAllBranches(countryCode.value);
};

onMounted(async () => await getAllBranches());
</script>

<style></style>
