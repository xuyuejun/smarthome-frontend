<template>
    <div class="wrapper">
        <side-bar>
            <template slot="links">
                <sidebar-link to="/dashboard" name="我的设备" icon="ti-panel"/>
                <sidebar-link to="/stats" name="用户信息" icon="ti-user" />
                <sidebar-link to="/socket" name="智能插座" icon="ti-plug" />
                <sidebar-link to="/camera" name="云台摄像头" icon="ti-camera"/>
                <sidebar-link to="/table-list" name="实时温湿度" icon="ti-dashboard"/>
                <sidebar-link to="/typography" name="情景模式" icon="ti-home"/>
                <sidebar-link to="/icons" name="设置" icon="ti-settings" />
                <!--<sidebar-link to="/maps" name="Map" icon="ti-map" />-->
                <!--<sidebar-link to="/test-page" name="TestPage" icon="ti-clipboard"/>-->
            </template>
            <mobile-menu>
                <li class="nav-item">
                    <a class="nav-link">
                        <i class="ti-panel"></i>
                        <p>状态</p>
                    </a>
                </li>
                <drop-down class="nav-item" title="语言" title-classes="nav-link" icon="ti-world">
                    <a class="dropdown-item">中文</a>
                    <a class="dropdown-item">English</a>
                    <a class="dropdown-item">日本語</a>
                </drop-down>
                <li class="nav-item">
                    <a class="nav-link">
                        <i class="ti-settings"></i>
                        <p>设置</p>
                    </a>
                </li>
                <li class="divider"></li>
            </mobile-menu>
        </side-bar>
        <div class="main-panel">
            <top-navbar></top-navbar>

            <dashboard-content @click.native="toggleSidebar">
            </dashboard-content>

            <!--<content-footer></content-footer>-->
        </div>
    </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
    components: {
        TopNavbar,
        ContentFooter,
        DashboardContent,
        MobileMenu
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false);
            }
        }
    }
};
</script>
