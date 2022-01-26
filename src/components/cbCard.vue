<template>
    <el-card class="info-card" shadow="hover">
        <template #header>
            <div class="title">
                <span>{{ props.title }}</span>
            </div>
        </template>
        <slot></slot>
    </el-card>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        require: true
    }
})
</script>
<style lang="scss" scoped>
.title {
    color: #0E1010;
    font-weight: bold;
}
</style>