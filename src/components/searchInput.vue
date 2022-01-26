<template>
    <input
    class="search-ipt"
    :value="modelValue"
    placeholder="查找院校"
    :style="{ height: heightText }"
    v-on:change="$emit('update:modelValue', $event.target.value)"
    />
</template>
<script>
export default {
    name: 'searchInput',
    model: {
        prop: 'searchText',
        event: 'change'
    },
    props: {
        modelValue: {
            type: String,
            require: true
        },
        heightText: {
            type: String,
            require: false,
            default: '60px'
        }
    }
}
</script>
<style lang="scss" scoped>
.search-ipt {
    width: 100%;
    // height: 60px;
    border-radius: 25px;
    border: none;
    outline: none;
    text-indent: 20px;
    font-size: 20px;
    font-weight: bold;
    caret-color: $text-color-placeholder;
    color: $text-color;
    box-shadow: 0 12px 48px rgba(26, 33, 52, .11);
    box-sizing: border-box;
}
</style>