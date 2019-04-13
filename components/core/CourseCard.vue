<template>
  <div class="courseCard">
    <div class="text-center">
      <b-img :src="eb" thumbnail fluid alt="Responsive image"></b-img>
    </div>

    <div class="cardDescription">
      <div class="cardTitle">
        <h2>{{ title }}</h2>
      </div>
      <p>{{ description }}</p>
    </div>

    <b-button href="#">Khám phá ngay</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eb: 'course/eb.png',
      title: 'Giao tiếp toàn diện Eng Breaking Revolution',
      description:
        'Luyện giao tiếp từ cơ bản đến chuyên sâu và dễ dàng chinh phục mức điểm 650 TOEIC.'
    }
  }
}
</script>

<style>
.courseCard a {
  width: 100%;
}
.courseCard {
  background: #efefef;
  padding: 20px;
}
.cardTitle h2 {
  font-size: 20px;
  color: #1fa850;
  font-weight: 600;
}

.cardDescription {
  margin-top: 10px;
}
</style>
