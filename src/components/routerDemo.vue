<template>
    <div>
        <router-link to="/foo">Go to Foo</router-link>
        <br/>
        <router-link to="/user/12">Go to /user/12</router-link>
        <br/>
        <button @click="$router.push('foo')">go to foo</button>
        <p>{{routerInfo}}</p>
    </div>
</template>
<script>
    export default {
        computed: {
            routerInfo() {
                const {fullpath, path, name, params, query, meta} = this.$route
                return {
                    fullpath, path, name, params, query, meta
                }
            }
        }
    }
</script>


