<template>
    <div class="col-sm-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title" style="text-align: center">강의실 이름</h5>
                <p class="card-text">비고</p>
                <a href="#" class="btn btn-info btn-sm" @click="$router.push('detail/1')">상세보기</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardLecture',
};
</script>

<style>
.col-sm-4 {
    margin-bottom: 10px;
}
.card {
    width: 100%;
}

.btn-sm {
    float: right;
}
</style>
