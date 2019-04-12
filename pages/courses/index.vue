<template>
  <div class="courses ">
    <b-container class="inprogress-course" fluid>
      <b-row>
        <b-col>
          <div class="text-center public-title">In Progress</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <CourseCard />
        </b-col>

        <b-col>
          <CourseCard />
        </b-col>
        <b-col>
          <CourseCard />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="recommend-course" fluid>
      <b-row>
        <b-col>
          <div class="text-center public-title">Recommended Course</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <CourseCard />
        </b-col>

        <b-col>
          <CourseCard />
        </b-col>
        <b-col>
          <CourseCard />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    CourseCard: () => import('~/components/core/CourseCard.vue')
  }
}
</script>

<style>
.recommend-course {
  margin-top: 24px;
}
.recommend-course .public-title {
  margin-bottom: 34px;
}
</style>
