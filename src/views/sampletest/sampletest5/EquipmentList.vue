<template>
    <div style="margin-top: 20px">
        <p class="conTitle">
            <span>장비 목록</span>
            <button class="btn btn-light" style="float: right; margin-top: 10px">장비 신규등록</button>
        </p>
        <div style="float: left">
            <b> 총건수 : 0 현재 페이지 번호 : 0 </b>
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
                <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <button
                            class="btn btn-outline-dark btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            style="margin-right: 15px"
                            @click="modalHandler"
                        >
                            수정
                        </button>
                    </td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                        <button
                            class="btn btn-outline-dark btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            style="margin-right: 15px"
                            @click="modalHandler"
                        >
                            수정
                        </button>
                    </td>
                </tr>
                <tr>
                    <th>3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>
                        <button
                            class="btn btn-outline-dark btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            style="margin-right: 15px"
                            @click="modalHandler"
                        >
                            수정
                        </button>
                    </td>
                </tr>
                <tr>
                    <td colspan="5" style="text-align: center">데이터가 없습니다</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="modal fade" id="exampleModal" aria-hidden="true">
        <ModalEquipment></ModalEquipment>
    </div>
</template>

<script>
import ModalEquipment from './ModalEquipment';

export default {
    name: 'EquipmentList',
    data() {
        return {
            isOpen: true,
        };
    },
    components: { ModalEquipment },
    methods: {
        modalHandler() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style></style>
