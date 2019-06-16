<template>
    <div>
        <el-card :body-style="{ padding: '0px' }">
            <div class="img2" :style="{backgroundImage: 'url(' + bg2 + ')' }">
                <div class="typo-line">
                    <h1>
                        Paper Dashboard Heading
                    </h1>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
    import Bg2 from '../../images/smartfarm-background.png'

    export default {
        data() {
            return {
                currentDate: new Date(),
                bg2:Bg2
            };
        }
    }
</script>
<style>
.img2{
    padding: 250px;
    margin: auto;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
