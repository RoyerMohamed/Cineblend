<template lang="">
<footer>
<div class="footer-logo ">
    <img :src="image" />
</div>

    </footer>
</template>
<script>
import image from "../../assets/logo-Cineblend.png";
export default {
  name: "FooterApp",

  data: function () {
    return {
      image: image,
    };
  },
};
</script>
<style >
footer {
  background: #181729;
  min-height: 10vh;
  display: flex;
  justify-content: center;
}

</style>