var profile_page = new Vue({
    el: '#profile-page',
    data: {
        user_id: '',
        name: '',
        address: '',
        state: '',
        country: '',
        password:'',
        rpassword:'',
    },
    created: function () {
        var _self = this;
        showLoader();
        _self.user_id = getUserFromSession();
        _self.loadProfileDashoard();
    },
    methods: {
        loadProfileDashoard: function(e) {
            var _self = this;
            $.ajax({
                type: "POST",
                url: base_url + 'doprofilepage',
                data: {
                    userid: _self.user_id
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        var content = data.content.data;
                        _self.address = content.address;
                        _self.state = content.state;
                        _self.country = content.country;
                        _self.name = getUserNameFromSession();
                        hideLoader();
                    }
                    else{
                        hideLoader();
                        var error = data.error;
                        let error_test = "Something went wrong! Try refresh the page";
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
                    hideLoader();
                    var error = data.error;
                    let error_test = "Something went wrong! Try refresh the page";
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
        },
        showUpdateProfileDetails: function(e) {
            var _self = this;
            Swal.fire({
                title: "Update Profile",
                text: "Are you sure you want to make the updates on your profile details?",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Yes, Proceed"
            }).then((result) => {
                if (result.isConfirmed) {
                    _self.doUpdateProfileDetails();
                }
            });
        },
        doUpdateProfileDetails: function(e) {
            var _self = this;
            Swal.fire({
                title: "Processing",
                html: "<img src='images/loader.gif'>",
                icon: "info",
                showConfirmButton: false
            });

            $.ajax({
                type: "POST",
                url: base_url + 'doupdateprofile',
                data: {
                    userid: _self.user_id,
                    name: _self.name,
                    address: _self.address,
                    state: _self.state,
                    country: _self.country,
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        localStorage.setItem("fullname",_self.name);
                        var sent_message = "Profile Updated Successfully";

                        Swal.fire({
                            title: "Profile Updated",
                            text: sent_message,
                            icon: "success",
                            showCancelButton: false,
                            confirmButtonText: "Proceed"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.reload();
                            }
                        });
                    }
                    else{
                        var error = data.error;
                        let error_test = "Something went wrong! Try refresh the page and try again.";
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
                    let error_test = "Something went wrong! Try refresh the page and try again.";
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
        },
        showChangePassword: function(e) {
            var _self = this;
            Swal.fire({
                title: "Change Password",
                text: "Are you sure you want to change your password?",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Yes, Proceed"
            }).then((result) => {
                if (result.isConfirmed) {
                    _self.doChangePassword();
                }
            });
        },
        doChangePassword: function(e) {
            var _self = this;
            Swal.fire({
                title: "Processing",
                html: "<img src='images/loader.gif'>",
                icon: "info",
                showConfirmButton: false
            });

            $.ajax({
                type: "POST",
                url: base_url + 'dochangepassword',
                data: {
                    userid: _self.user_id,
                    password: _self.password,
                    rpassword: _self.rpassword
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        var sent_message = "Password Updated Successfully";

                        Swal.fire({
                            title: "Password Updated",
                            text: sent_message,
                            icon: "success",
                            showCancelButton: false,
                            confirmButtonText: "Proceed"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.reload();
                            }
                        });
                    }
                    else{
                        var error = data.error;
                        let error_test = "Something went wrong! Try refresh the page and try again.";
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
                    let error_test = "Something went wrong! Try refresh the page and try again.";
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
        },
    }
});