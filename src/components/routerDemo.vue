<template>
    <div>
        <router-link to="/foo">Go to Foo</router-link>
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


