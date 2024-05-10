<template>
    <div>
        <p class="Location">
            <span class="btn_nav bold">시설 관리</span>
            <span class="btn_nav bold"> 강의실</span>
        </p>
        <p class="conTitle">
            <span>강의실 상세조회</span>
        </p>
        <div>
            <div class="input-group mb-3">
                <span class="input-group-text">강의실 명</span>
                <input type="text" class="form-control" v-model="lecture.lecrm_name" :disabled="updateHandler" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">크기</span>
                <input
                    type="text"
                    class="form-control"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                    v-model="lecture.lecrm_size"
                    :disabled="updateHandler"
                />
                <span class="input-group-text">자릿수</span>
                <input
                    type="text"
                    class="form-control"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                    v-model="lecture.lecrm_snum"
                    :disabled="updateHandler"
                />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">비고</span>
                <input type="text" class="form-control" v-model="lecture.lecrm_note" :disabled="updateHandler" />
            </div>
        </div>
        <div class="btn-family" style="padding-left: 80%">
            <button class="btn btn-info" style="float: inline-end" @click="postLectureDetail" v-if="!id">
                <span>등록</span>
            </button>
            <span style="float: inline-end" v-else>
                <button class="btn btn-info" @click="updateHandler = !updateHandler">
                    <span>수정</span>
                </button>
                <button class="btn btn-light" style="margin-left: 5px">
                    <span>삭제</span>
                </button>
            </span>
        </div>
        <div>
            <EquipmentList v-if="id" />
            <router-link to="/dashboard/sampletest/samplepage5">
                <button class="btn btn-light" style="float: inline-end">돌아가기</button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import EquipmentList from './EquipmentList';
import { onMounted, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref(route.params.id);
const lecture = reactive({ lecrm_name: '', lecrm_size: 0, lecrm_snum: 0, lecrm_note: '' });
let preLecture = Object;
const updateHandler = ref(true);

const getLectureDetail = (id) => {
    let params = new URLSearchParams();
    params.append('lecrm_id', id);
    axios
        .post('/adm/lectureRoomDtl.do', params)
        .then((res) => {
            lecture.lecrm_name = res.data.selinfo.lecrm_name;
            lecture.lecrm_size = res.data.selinfo.lecrm_size;
            lecture.lecrm_snum = res.data.selinfo.lecrm_snum;
            lecture.lecrm_note = res.data.selinfo.lecrm_note;
            preLecture = { ...lecture };
        })
        .catch((err) => {
            alert(err.message);
        });
};

const postLectureDetail = () => {
    console.log(lecture.value);
};

watch(lecture, (newData) => {
    if (newData.lecrm_name.length > 15) {
        alert('15자 이내로 ㄱ');
        lecture.lecrm_name = preLecture.lecrm_name;
    }
});

onMounted(() => {
    id.value ? getLectureDetail(id.value) : null;
});
</script>

<style></style>
