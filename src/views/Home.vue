<template>
    <div class="wrapper">
        <recent-photos />
    </div>
</template>

<script>
    import RecentPhotos from '@/components/RecentPhotos';

    export default {
        name: 'home',

        components: {
            RecentPhotos
        }
    };
</script>