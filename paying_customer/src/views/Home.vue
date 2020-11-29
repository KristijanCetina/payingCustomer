<template>
<div class="grid-container">
  <div class="left"></div>
  <div class="right"></div>
</div>
</template>

<style >
.grid-container {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "left right";
}
.left { grid-area: left; background-color: aqua; }
.right { grid-area: right; }
</style>