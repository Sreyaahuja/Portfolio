<template>
  <div class="section container">
    <div class="columns">
      <div class="column is-3">
        <figure :class="['image', 'is-square']">
          <img src="/polarity_cover.png">
        </figure>
        <h2 class="title">Indian Buyers Buying Habits</h2>
        <span
          class="tag is-rounded is-medium"
          href="#">
          asdasd
        </span>
        <span
          class="tag is-rounded is-medium"
          href="#">
          asdasd
        </span>
        <span
          class="tag is-rounded is-medium"
          href="#">
          asdasd
        </span>
        <span
          class="tag is-rounded is-medium"
          href="#">
          asdasd
        </span>
      </div>
      <div class="column">
        <img src="/IndianBuyers.png">
      </div>
      <div class="column is-1 close-column"><span class="tag is-large is-delete" /></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'test'
    }
  }
}
</script>

<style>
.close-column .tag {
  position: fixed;
}
</style>
