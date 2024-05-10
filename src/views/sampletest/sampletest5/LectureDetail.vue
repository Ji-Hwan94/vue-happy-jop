<template>
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
            <input type="text" class="form-control" />
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">크기</span>
            <input type="text" class="form-control" />
            <span class="input-group-text">자릿수</span>
            <input type="text" class="form-control" />
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">비고</span>
            <input type="text" class="form-control" />
        </div>
    </div>
    <div class="btn-family" style="padding-left: 80%">
        <button class="btn btn-info">
            <span>등록</span>
        </button>
        <button class="btn btn-info" style="margin-left: 5px">
            <span>수정</span>
        </button>
        <button class="btn btn-light" style="margin-left: 5px">
            <span>삭제</span>
        </button>
    </div>

    <EquipmentList />
    <router-link to="/dashboard/sampletest/samplepage5">
        <button class="btn btn-light" style="float: right">돌아가기</button>
    </router-link>
</template>

<script>
import EquipmentList from './EquipmentList';
export default {
    name: 'LectureDetail',
    components: { EquipmentList },
};
</script>

<style></style>
