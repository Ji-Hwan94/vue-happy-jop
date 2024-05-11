<template>
    <teleport to="body">
        <div class="backdrop">
            <div class="container" style="width: 500px">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <p class="conTitle">
                                <span>장비등록</span>
                            </p>
                        </div>
                        <div class="modal-body">
                            <div class="input-group mb-3" v-show="equipId">
                                <span class="input-group-text">강의실 명</span>
                                <input type="text" class="form-control" v-model="equipment.lecrm_name" disabled />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text">장비 명</span>
                                <input type="text" class="form-control" v-model="equipment.equ_name" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text">장비 수</span>
                                <input
                                    type="text"
                                    class="form-control"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                                    v-model="equipment.equ_num"
                                />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text">비고</span>
                                <input type="text" class="form-control" v-model="equipment.equ_note" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-info" @click="postEquipmentDetail" v-if="!equipId">
                                등록
                            </button>
                            <button type="button" class="btn btn-info" @click="postEquipmentDetail" v-if="equipId">
                                수정
                            </button>
                            <button type="button" class="btn btn-info" v-if="equipId" @click="deleteEquipmentDetail">
                                삭제
                            </button>
                            <button type="button" class="btn btn-light" @click="$emit('closeModal', false)">
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

// const props = defineProps(['equipId']);
const props = defineProps({
    equipId: Number,
    lectureId: Number,
});

const emit = defineEmits(['closeModal']);

const equipment = ref(Object);
const updateHandler = ref(props.equipId ? 'U' : 'I');

const getEquipmentDetail = () => {
    let params = new URLSearchParams();
    params.append('equ_id', props.equipId);

    axios
        .post('/adm/equDtl.do', params)
        .then((res) => {
            equipment.value = res.data.selinfo;
        })
        .catch((err) => {
            alert(err.message);
        });
};

const postEquipmentDetail = () => {
    let params = new URLSearchParams(equipment.value);
    params.append('action', updateHandler.value);
    params.append('lecrm_id', props.lectureId);
    axios
        .post('/adm/equSave.do', params)
        .then((res) => {
            if (res.data.result === 'S') {
                alert(res.data.resultmsg);
                emit('closeAndSearch', false);
            } else {
                alert(res.data.resultmsg);
            }
        })
        .catch((err) => {
            alert(err.message);
        });
};

const deleteEquipmentDetail = () => {
    let params = new URLSearchParams();
    params.append('equ_id', props.equipId);
    axios
        .post('/adm/equDelete.do', params)
        .then((res) => {
            if (res.data.result === 'S') {
                alert(res.data.resultmsg);
                emit('closeAndSearch', false);
            } else {
                alert(res.data.resultmsg);
            }
        })
        .catch((err) => {
            alert(err.message);
        });
};

onMounted(() => {
    props.equipId ? getEquipmentDetail() : null;
});
</script>

<style>
.backdrop {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
}
.container {
    background: white;
    padding: 1.5rem;
    height: 50%;
}
</style>
