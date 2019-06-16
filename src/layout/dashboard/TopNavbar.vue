<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{ routeName }}</a>
            <button
                class="navbar-toggler navbar-burger"
                type="button"
                @click="toggleSidebar"
                :aria-expanded="$sidebar.showSidebar"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" @click="getStatus">
                        <a href="#" class="nav-link">
                            <i class="ti-panel"></i>
                            <p>状态</p>
                        </a>
                    </li>
                    <drop-down
                        class="nav-item"
                        title="语言"
                        title-classes="nav-link"
                        icon="ti-world"
                    >
                        <a class="dropdown-item" href="#">中文</a>
                        <a class="dropdown-item" href="#">English</a>
                        <a class="dropdown-item" href="#">日本語</a>
                    </drop-down>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="ti-settings"></i>
                            <p>
                                设置
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    computed: {
        routeName() {
            const { name } = this.$route;
            return this.capitalizeFirstLetter(name);
        }
    },
    data() {
        return {
            activeNotifications: false
        };
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toggleNotificationDropDown() {
            this.activeNotifications = !this.activeNotifications;
        },
        closeDropDown() {
            this.activeNotifications = false;
        },
        toggleSidebar() {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
        hideSidebar() {
            this.$sidebar.displaySidebar(false);
        },
        getStatus() {
            this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
            });
        }
    }
};
</script>
<style></style>
