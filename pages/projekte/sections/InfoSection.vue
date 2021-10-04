<template>
  <div class="info">
    <ul class="list-unstyled">
      <li v-for="(item, key) in infoData.infos" :key="key">
        {{ item.label }}: {{ item.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InfoSection",
  props: {
    infoData: {
      type: Object,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped>
.info {
  ul {
    font-family: "Arial";
    font-weight: bold;
    font-size: 25px;
    line-height: 40px;
    color: $textDarkColor;
  }
}
</style>
