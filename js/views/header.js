var header_common = new Vue({
    el: '#header_common',
    data: {
        name: '',
        email: ''
    },
    created: function () {
        var _self = this;
        _self.name = getUserNameFromSession();
        _self.email = getUserEmailFromSession();
    },
    methods: {
        doSignOut: function(e) {
            removeSession();
            window.location.href = "/signin.php";
        }
    }
});