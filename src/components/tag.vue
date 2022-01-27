<template>
    <span :style="{ padding }" class="tag">{{ text }}</span>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
            default: ''
        },
        padding: {
            type: String,
            required: false,
            default: '6px 18px'
        }
    }
}
</script>
<style lang="scss" scoped>
.tag {
    display: inline-block;
    margin-right: 10px;
    background: $theme-assist-color;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    text-align: center;
}
</style>