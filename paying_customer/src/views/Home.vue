<template>
<div class="grid-container">
  <div class="sad"></div>
  <div class="asd"></div>
</div>
</template>

<style >
.grid-container {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "sad asd";
}
.sad { 
  grid-area: sad;
  background-color: aqua;
}
.asd { grid-area: asd; }
</style>