var reset_password = new Vue({
    el: '#changepassword-confirm',
    data: {
        email: '',
        password: '',
        rpassword:'',
        token:''
    },
    created: function () {
        var params_email = getUrlVars()['email'];
        this.email = params_email;
    },
    methods: {
        doChangePassword: function(e) {
            var _self = this;

            if (_self.password !== _self.rpassword) {
                Swal.fire({
                    title: "Oops..",
                    text: 'Password Does Not Match, Please try Again',
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonText: "Close"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                });
            } else {
                Swal.fire({
                    title: "Processing",
                    html: "<img src='images/loader.gif'>",
                    icon: "info",
                    showConfirmButton: false
                });
    
                $.ajax({
                    type: "POST",
                    url: base_url + 'auth/dochangepassword',
                    data: {
                        token: _self.token,
                        email: _self.email,
                        password: _self.password
                    },
                    success: function (data) {
    
                        if (typeof data.success !== "undefined") {
                            var content = data.content.data;
                            var user_id = content.user_id;
                            var fullname = content.fullname;

                            var timeNow = Math.round((new Date()).getTime() / 1000);
                            
                            //set sync time 
                            localStorage.setItem("login_time",timeNow);
                            localStorage.setItem("user_id",user_id);
                            localStorage.setItem("fullname",fullname);
                            localStorage.setItem("email",_self.email);
                            window.location.href = "/index.php";
                        }
                        else{
                            var error = data.error;
                            let error_test = "Something went wrong! Try refresh the page and do the Registration again.";
                            if (typeof error.message !== 'undefined') {
                                error_test = error.message;
                            }
                            Swal.fire({
                                title: "Oops..",
                                text: error_test,
                                icon: "error",
                                showCancelButton: false,
                                confirmButtonText: "Close"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.location.reload();
                                }
                            });
                        }
                    },
                    error: function (data) {
                        var error = data.error;
                        let error_test = "Something went wrong! Try refresh the page and do the registration again.";
                        if (typeof error.message !== 'undefined') {
                            error_test = error.message;
                        }
                        Swal.fire({
                            title: "Oops..",
                            text: error_test,
                            icon: "error",
                            showCancelButton: false,
                            confirmButtonText: "Close"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.reload();
                            }
                        });
    
                    }
                });
            } 
        }
    }
});