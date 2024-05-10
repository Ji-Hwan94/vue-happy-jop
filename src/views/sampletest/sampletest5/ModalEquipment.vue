<template>
    <div class="modal fade" :id="modalId" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">장비등록</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text">강의실 명</span>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">장비 명</span>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">장비 수</span>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">비고</span>
                        <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-info">등록</button>
                    <button type="button" class="btn btn-info">수정</button>
                    <button type="button" class="btn btn-info">삭제</button>
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">닫기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    modalId: String,
});
</script>

<style></style>
