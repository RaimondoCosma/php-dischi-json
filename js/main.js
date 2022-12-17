const { createApp } = Vue;

createApp({
  data() {
    return {
      disks: [],
      diskClicked: "",
      active: false,
    };
  },
  methods: {
    getIndex(index) {
      this.toggleOffcanvas();
      this.diskClicked = index;
    },
    toggleOffcanvas() {
      this.active = !this.active;
    },
  },
  created() {
    axios.get("http://localhost/php-dischi-json/php/api.php").then((resp) => {
      this.disks = resp.data;
    });
  },
}).mount("#app");
