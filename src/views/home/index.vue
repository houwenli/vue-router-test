<template>
    <div class="hello">
      <h1>哈哈哈哈哈</h1>
      {{ aaa }}
      {{ bb }}
    </div>
  </template>
  
  <script>
  export default {
    name: 'home-page',
    data: () => {
      return {
        bb: 222
      }
    },
    props: {
      msg: String
    },
    created() {
      this.aaa = 111

      console.log(this)

      this.change()
    },
    methods: {
      change() {
        setTimeout(() => {
          this.aaa = 4444
          this.bb = 3333
        }, 2000)
      }
    }
  }
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
  