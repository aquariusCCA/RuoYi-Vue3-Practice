<template>
  <div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('App component mounted');
fetch('http://localhost:5173/ruoyi/api/test/post', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',  // 明確指定傳送的是 JSON
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    username: 'siao',
    password: '123456'
  })
})
  .then(response => {
    if (!response.ok) throw new Error('Login failed');
    return response.json();
  })
  .then(data => {
    console.log('登入成功:', data);
  })
  .catch(error => {
    console.error('POST 請求錯誤:', error);
  });

});
</script>

<style scoped lang="scss"></style>