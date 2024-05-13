<template>
    <div>
        <p class="Location">
            <span class="btn_nav bold">시설 관리</span>
            <span class="btn_nav bold"> 강의실</span>
        </p>
        <p class="conTitle">
            <span>강의실 상세조회</span>
            <span>강의실 신규등록</span>
            <button class="btn btn-light" style="float: inline-end; margin-top: 10px">돌아가기</button>
        </p>
        <div>
            <div class="input-group mb-3">
                <span class="input-group-text">강의실 명</span>
                <input type="text" class="form-control" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">크기</span>
                <input
                    type="text"
                    class="form-control"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                />
                <span class="input-group-text">자릿수</span>
                <input
                    type="text"
                    class="form-control"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">비고</span>
                <input type="text" class="form-control" />
            </div>
        </div>
        <div class="btn-family">
            <button class="btn btn-light" style="float: inline-end">
                <span>삭제</span>
            </button>
            <button class="btn btn-info" style="float: inline-end">
                <span>저장</span>
            </button>
        </div>

        <div>
            <EquipmentList />
        </div>
    </div>
</template>

<script setup></script>

<style></style>
