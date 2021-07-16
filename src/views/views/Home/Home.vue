<template>
  <div class="home">
    <button type="button" @click="changeLang">{{lang}}</button>

    <br />
    <br />
    <br />
    <h1>{{$t('hello')}}</h1>
    <br />
    <br />
    <br />
    static data
    <br />
    developer&nbsp; name=&nbsp;&nbsp; {{employes.name}}
    <br />
    developer &nbsp; email=&nbsp;&nbsp; {{employes.email}}
    <br />
    <br />
    <br />
    <button id="load" :disabled="isActive" type="button" @click="go">Fetch Data</button>
    <br />
    <br />api data persistence
    <br />
    id=&nbsp;&nbsp;{{user.id}}
    <br />
    userId=&nbsp;&nbsp;{{user.userId}}
    <br />
    title=&nbsp;&nbsp;{{user.title}}
    <br />
    completed=&nbsp;&nbsp;{{user.completed}}
  </div>
</template>

<script>
import js from "./Home";
export default js;
</script>
