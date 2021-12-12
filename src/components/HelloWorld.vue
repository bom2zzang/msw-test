<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>get Mock Data</h3>
    <button @click="getMockData">눌러줘요</button>
    <!-- <span>result!! : {{ resMock }}</span> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // data() {
  //   return {
  //     resMock: "",
  //   };
  // },
  props: {
    msg: String,
  },
  methods: {
    async getMockData() {
      const res = await fetch("/commonCode");
      console.log(await res.json());
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
