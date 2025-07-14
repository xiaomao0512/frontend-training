<template>
  <div style="padding: 24px">
    <h1 style="font-size:24px;font-weight:bold;margin-bottom:16px">
      👥 使用者清單 (API fetch)
    </h1>

    <p v-if="loading">資料載入中...</p>

    <ul v-else>
      <li
        v-for="user in users"
        :key="user.id"
        style="margin-bottom:8px;border-bottom:1px solid #ddd;padding-bottom:4px"
      >
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface User {
  id: number
  name: string
  email: string
}

const users = ref<User[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await res.json()
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>
