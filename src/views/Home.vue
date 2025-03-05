<template>
    <div class="home">
        <h1>高畅的简历</h1>
        <p>欢迎访问我的在线简历！</p>
        <nav>
            <router-link to="/education">教育背景</router-link> |
            <router-link to="/experience">实习经历</router-link> |
            <router-link to="/self-evaluation">自我评价</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 50px;
}

h1 {
    color: #2c3e50;
}

nav {
    margin-top: 20px;
}

nav a {
    margin: 0 10px;
    color: #42b983;
    text-decoration: none;
}

nav a:hover {
    text-decoration: underline;
}
</style>