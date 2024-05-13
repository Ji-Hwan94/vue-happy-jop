<template>
    <div style="margin-top: 70px">
        <div>
            <p class="conTitle">
                <span>장비 목록</span>
                <button class="btn btn-light" style="float: right; margin-top: 10px" @click="modalHandler()">
                    장비 신규등록
                </button>
            </p>
            <div style="float: left">
                <b> 총건수 : {{ total }} 현재 페이지 번호 : {{ currentPage }} </b>
            </div>

            <table class="table table-info" style="margin-top: 1%">
                <thead>
                    <tr>
                        <th>강의실명</th>
                        <th>장비명</th>
                        <th>장비수</th>
                        <th>비고</th>
                        <th style="width: 10%; text-align: center">수정</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="dataList.length > 0">
                        <tr v-for="(data, i) in dataList" :key="i">
                            <th>{{ data.lecrm_name }}</th>
                            <td>{{ data.equ_name }}</td>
                            <td>{{ data.equ_num }}</td>
                            <td>{{ data.equ_note }}</td>
                            <td>
                                <button
                                    class="btn btn-outline-dark btn-sm"
                                    style="margin-right: 15px"
                                    @click="modalHandler(data.equ_id)"
                                >
                                    수정
                                </button>
                            </td>
                        </tr>
                    </template>
                    <tr v-else>
                        <td colspan="5" style="text-align: center">데이터가 없습니다</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Pagination
            v-show="dataList.length > 0"
            v-bind="{ currentPage, totalItems: total, itemsPerPage: 5 }"
            @search="getEquipmentList($event)"
        />
        <ModalEquipment
            :equipId="equipId"
            :lectureId="lectureId"
            v-if="modalBoolean"
            @closeModal="modalBoolean = $event"
            @closeAndSearch="modalClose"
        ></ModalEquipment>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ModalEquipment from './ModalEquipment';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Pagination from '@/components/common/PaginationComponent.vue';

const route = useRoute();
const lectureId = ref(route.params.id);
const dataList = ref([]);
const total = ref(0);
const equipId = ref(0);
const modalBoolean = ref(false);
const currentPage = ref(0);

const getEquipmentList = (cpage) => {
    cpage = cpage || 1;
    let params = new URLSearchParams();
    params.append('cpage', cpage);
    params.append('pagesize', 5);
    params.append('lecrm_id', lectureId.value);

    axios
        .post('/adm/equListjson.do', params)
        .then((res) => {
            dataList.value = res.data.listdata;
            total.value = res.data.listcnt;
            currentPage.value = cpage;
        })
        .catch((err) => {
            alert(err.message);
        });
};

const modalHandler = (lecrmId) => {
    equipId.value = lecrmId;
    modalBoolean.value = true;
};

const modalClose = (param) => {
    modalBoolean.value = param;
    getEquipmentList();
};

onMounted(() => {
    getEquipmentList();
});
</script>

<style></style>
