<template>
    <div id="notice">
        <p class="Location">
            <a href="/dashboard/home" class="btn_set home"></a>
            <span class="btn_nav bold">기준정보</span>
            <span class="btn_nav bold">공지사항 관리</span>
        </p>
        <p class="conTitle">
            <span>공지사항</span>
            <span>
                <table style="border: 1px #50bcdf" width="100%" cellpadding="5" cellspacing="0" border="1" align="left">
                    <tr style="border: 0px; border-color: blue">
                        <td width="50" height="25" style="font-size: 100%; text-align: left">
                            <div id="searchArea" class="d-flex justify-content-around mb-2 mt-2">
                                <select id="searchKey" class="form-select" style="width: 150px; height: 38px">
                                    <option value="all">전체</option>
                                    <option value="title">제목</option>
                                    <option value="content">내용</option>
                                </select>

                                <input type="text" style="width: 200px" class="form-control" />
                                <input type="date" style="width: 15%" class="form-control" />
                                ~
                                <input type="date" style="width: 15%" class="form-control" />
                                <span class="fr">
                                    <a class="btn btn-primary mx-2">
                                        <span>검 색</span>
                                    </a>
                                    <a class="btn btn-primary mx-2">
                                        <span>신규등록</span>
                                    </a>
                                </span>
                            </div>
                        </td>
                    </tr>
                </table>
            </span>
        </p>
        <div class="divComGrpCodList">
            <table class="col">
                <caption></caption>
                <colgroup>
                    <col width="10%" />
                    <col width="50%" />
                    <col width="30%" />
                    <col width="10%" />
                </colgroup>

                <thead>
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성일</th>
                        <th scope="col">작성자</th>
                    </tr>
                </thead>
                <tbody>
                    <template>
                        <tr>
                            <td colspan="7">일치하는 검색 결과가 없습니다</td>
                        </tr>
                    </template>
                    <template>
                        <tr></tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoticeComponent',
    data() {
        return { test: 'test' };
    },
    created() {},
    methods: {},
};
</script>

<style></style>
