var reset_password = new Vue({
    el: '#resetpassword-confirm',
    data: {
        email: '',
    },
    ready: function () {},
    methods: {
        doResetPassword: function(e) {
            var _self = this;
            Swal.fire({
                title: "Processing",
                html: "<img src='images/loader.gif'>",
                icon: "info",
                showConfirmButton: false
            });

            $.ajax({
                type: "POST",
                url: base_url + 'auth/doresetpassword',
                data: {
                    email: _self.email
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {

                        var sent_message = "Password Reset token Sent to "+_self.email;

                        Swal.fire({
                            title: "Token Sent",
                            text: sent_message,
                            icon: "success",
                            showCancelButton: false,
                            confirmButtonText: "proceed"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = "/change-password.php?email="+_self.email;
                            }
                        });
                        
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
});