var reg_form = new Vue({
    el: '#register-form',
    data: {
        firstname: '',
        lastname:'',
        address:'',
        state:'',
        country: '',
        email:'',
        password:'',
    },
    ready: function () {},
    methods: {
        doRegisterForm: function(e) {
            var _self = this;
            Swal.fire({
                title: "Processing",
                html: "<img src='images/loader.gif'>",
                icon: "info",
                showConfirmButton: false
            });

            $.ajax({
                type: "POST",
                url: base_url + 'auth/registeruser',
                data: {
                    firstname: _self.firstname,
                    lastname: _self.lastname,
                    address: _self.address,
                    state: _self.state,
                    country: _self.country,
                    conf: _self.email,
                    temp: _self.password,
                },
                beforeSend: function () {
                    $("#registerform-button").attr("disabled", "disabled");
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        window.location.href = "/verify-email.php?email="+_self.email;
                    }
                    else{
                        var error = data.error;
                        $("#registerform-button").attr("disabled", false);
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