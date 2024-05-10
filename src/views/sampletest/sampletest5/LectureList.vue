<template>
    <p class="Location">
        <span class="btn_nav bold">시설 관리</span>
        <span class="btn_nav bold"> 강의실</span>
    </p>
    <p class="conTitle">
        <span class="conNm">강의실</span>
        <span class="fr">
            <span>강의실 명 </span>
            <input type="text" class="lecure-name" />
            <button class="btn btn-light btn-sm">강의실 신규등록</button>
            <button class="btn btn-secondary btn-sm">검색</button>
        </span>
    </p>
    <div>
        <b> 총건수 : 0 현재 페이지 번호 : 0 </b>
    </div>
    <div class="row">
        <CardLecture v-for="i in 8" :key="i"></CardLecture>
    </div>
</template>

<script>
import CardLecture from './CardLecture.vue';

export default {
    name: 'LectureList',
    components: {
        CardLecture,
    },
};
</script>

<style>
.lecure-name {
    height: 30px;
    border-radius: 5px;
}

.btn-sm {
    margin-left: 10px;
}
</style>
