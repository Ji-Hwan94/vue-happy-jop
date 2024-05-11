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
                        <div class="modal-footer">
                            <button type="button" class="btn btn-info">등록</button>
                            <button type="button" class="btn btn-info">수정</button>
                            <button type="button" class="btn btn-info">삭제</button>
                            <button type="button" class="btn btn-light">닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup></script>

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
