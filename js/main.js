const { createApp } = Vue;

createApp({
  data() {
    return {
      disks: [],
    };
  },
  created() {
    axios.get("http://localhost/php-dischi-json/php/api.php").then((resp) => {
      this.disks = resp.data;
    });
  },
}).mount("#app");
