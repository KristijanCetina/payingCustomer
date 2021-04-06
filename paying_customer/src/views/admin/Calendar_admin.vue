<template>
  <div class="container-fluid">
    <div class="row">
      <adminNavi />
      <div class="col-md-3"></div>
      <div class="col-md-9">
        <div class="limit">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FBelgrade&amp;src=ZnJyYjZpNXNjazRtYTBhajRrNGU2bGJmc29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aHIuY3JvYXRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%238E24AA&amp;color=%230B8043"
            style="border: solid 1px #777"
            width=90%
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import admin_navi from "@/components/admin_navi.vue";

export default {
  name: "CalendarAdmin",
  components: {
    adminNavi: admin_navi,
  },
};
</script>
