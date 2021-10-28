var renew_page = new Vue({
    el: '#register-confirm',
    data: {
        regCode: '',
    },
    ready: function () {},
    methods: {
        doRegisterConfirm: function(e) {
            var _self = this;
            Swal.fire({
                title: "Processing",
                html: "<img src='images/loader.gif'>",
                icon: "info",
                showConfirmButton: false
            });

            $.ajax({
                type: "POST",
                url: base_url + 'auth/doregisterconfirm',
                data: {
                    regcode: _self.regCode
                },
                beforeSend: function () {
                    $("#registerconfirm-button").attr("disabled", "disabled");
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        window.location.href = "/signup-form.php";
                    }
                    else{
                        var error = data.error;
                        $("#registerconfirm-button").attr("disabled", false);
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