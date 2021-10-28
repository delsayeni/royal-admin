var header_common = new Vue({
    el: '#sidebar_common',
    data: {
        isAdmin: false
    },
    created: function () {
        var _self = this;
        var id = getUserFromSession();
        if (id == '1') {
            _self.isAdmin = true;
        }
    },
    methods: {
        doSidebarSignOut: function(e) {
            removeSession();
            window.location.href = "/signin.php";
        }
    }
});