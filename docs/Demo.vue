<script setup>
import { BrowserWorker } from '../src/browser/browser-worker'
;(async function () {
  const instance = new BrowserWorker()
  const worker = await instance.run('console.log(33)')
  console.log(worker)
})()
</script>

<template></template>
