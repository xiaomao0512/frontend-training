<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="age++">年龄+1</button>
        <button @click="showEmail">显示邮箱</button>
    </div>
  </template>
  
  <script lang="ts">
  export default {
      name: 'Person',
      data(){
        return {
            name: 'John',
            age: 20,
            email: 'john@gmail.com'
        }
    },
    methods: {
        showEmail(){
            alert(this.email);
        }
    }
}
  </script>
  
  <style>
   .person {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
   }
  </style>
  