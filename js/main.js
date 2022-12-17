const { createApp } = Vue;

createApp({
  data() {
    return {
      disks: [],
      diskClicked: 0,
      active: false,
    };
  },
  methods: {
    getIndex(index) {
      this.toggleOffcanvas();
      this.diskClicked = index;
    },
    toggleOffcanvas() {
      this.active = true;
    },
  },
  created() {
    axios.get("http://localhost/php-dischi-json/php/api.php").then((resp) => {
      this.disks = resp.data;
    });
  },
}).mount("#app");
