const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            discs: [],
        }
    }, created() {
        axios.get("http://localhost/php-dischi-json/index.php").then((response) => {
            this.discs = response.data;
        }
        )
    }
});
app.mount("#app");