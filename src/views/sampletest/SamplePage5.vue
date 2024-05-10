<template>
    <LectureList></LectureList>
</template>

<script>
import LectureList from './sampletest5/LectureList';
export default {
    name: 'SamplePage5',
    components: {
        LectureList,
    },
    mounted() {
        // this.test();
        // this.console();
    },
    methods: {
        test: (cpage) => {
            if (typeof cpage === 'number') {
                cpage = cpage || 1;
            } else {
                cpage = 1;
            }
            let params = new URLSearchParams();
            params.append('cpage', cpage);
            params.append('pagesize', 6);
            // params.append('searchRoomName', searchRoomName.current.value);

            this.axios
                .post('/adm/lectureRoomListjson.do', params)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    alert(err.message);
                });
        },
        console: () => {
            console.log(this.axios);
        },
    },
};
</script>

<style></style>
