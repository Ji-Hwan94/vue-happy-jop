<template>
    <div>
        <p class="Location">
            <span class="btn_nav bold">시설 관리</span>
            <span class="btn_nav bold"> 강의실</span>
        </p>
        <p class="conTitle">
            <span class="conNm">강의실</span>
            <span class="fr">
                <span>강의실 명 </span>
                <input type="text" class="lecure-name" v-model="searchRoomName" />
                <button class="btn btn-light btn-sm" @click="$router.push('write')">강의실 신규등록</button>
                <button class="btn btn-secondary btn-sm">검색</button>
            </span>
        </p>
        <div>
            <b> 총건수 : {{ total }} 현재 페이지 번호 : {{ currentPage }} </b>
        </div>
        <div class="row">
            <CardLecture v-for="(data, i) in dataList" :key="i" :data="data"></CardLecture>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import CardLecture from './CardLecture.vue';
import { onMounted, ref } from 'vue';

const dataList = ref([]);
const total = ref(0);
const currentPage = ref(0);
const searchRoomName = ref('');

const searchLecture = (cpage) => {
    if (typeof cpage === 'number') {
        cpage = cpage || 1;
    } else {
        cpage = 1;
    }
    let params = new URLSearchParams();
    params.append('cpage', cpage);
    params.append('pagesize', 6);
    params.append('searchRoomName', searchRoomName.value);

    axios
        .post('/adm/lectureRoomListjson.do', params)
        .then((res) => {
            dataList.value = res.data.listdata;
            total.value = res.data.listcnt;
        })
        .catch((err) => {
            alert(err.message);
        });
};

onMounted(() => {
    searchLecture();
});
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
