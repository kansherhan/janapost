<template>
  <div class="branch-card">
    <h2 class="province">{{ data.province }}</h2>

    <div class="text-with-icon">
      <div class="image">
        <img
          class="icon"
          :src="phoneIcon"
          alt="phone"
        />
      </div>

      <div class="texts">
        <p class="top">{{ data.workerphone }}</p>
      </div>
    </div>

    <div class="text-with-icon">
      <div class="image">
        <img
          class="icon"
          :src="watchIcon"
          alt="watch"
        />
      </div>

      <div class="texts">
        <p class="top">10:00 - 20:00<br />{{ data.remark }}</p>
      </div>
    </div>

    <div class="text-with-icon">
      <div class="image">
        <img
          class="icon"
          :src="paymentsIcon"
          alt="payments"
        />
      </div>

      <div class="texts">
        <p class="top">
          Қытайдан филиалдарға дейін<br />
          - Standart {{ data.price }}$ / 1кг
        </p>
      </div>
    </div>

    <div class="text-with-icon">
      <div class="image">
        <img
          class="icon"
          :src="locationIcon"
          alt="location"
        />
      </div>

      <div class="texts">
        <p class="top">{{ data.address }}</p>
        <p class="bottom">
          <p>{{ data.city }}</p>

          <div class="links">
            <a href="#" class="link">
              <img :src="gisIcon" alt="gis, icon">
              <span>2gis</span>
            </a>

            <a href="#" class="link">
              <img :src="yandexIcon" alt="gis, icon">
              <span>Яндекс.Карты</span>
            </a>
          </div>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import phoneIcon from "../assets/svg/phone.svg";
import watchIcon from "../assets/svg/watch.svg";
import locationIcon from "../assets/svg/location.svg";
import paymentsIcon from "../assets/svg/payments.svg";

import gisIcon from "../assets/svg/gis.svg";
import yandexIcon from "../assets/svg/yandex.svg";

defineProps({
  data: { type: Object, required: true },
});
</script>
