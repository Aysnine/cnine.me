<template>
  <div>
    <ThePost />
    <div class="comment">
      <div class="comment-header">
        <span style="color: red">C</span>omment
      </div>
      <div
        id="cusdis_thread"
        class="comment-component"
        data-host="https://cusdis.com"
        data-app-id="fcd9ca7e-d8c8-4c00-a690-61fb4738a509"
        :data-page-id="$page.path"
        :data-page-url="$page.path"
        :data-page-title="$frontmatter.title"
      ></div>
      <script async src="https://cusdis.com/js/cusdis.umd.js"></script>
    </div>
  </div>
</template>

<script>
import ThePost from '@parent-theme/layouts/Post.vue';
export default {
  components: { ThePost }
}
</script>

<style lang="stylus">
@media (min-width: $MQNarrow)
  .comment
    padding 2rem
.comment-header
  margin 80px 0 20px
  padding 10px 0
  border-bottom 2px solid
  font-weight bold
</style>
