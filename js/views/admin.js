var profile_page = new Vue({
    el: '#admin-page',
    data: {
        user_id: '',
        users: [],
        transfers: [],
        regcodes: []
    },
    created: function () {
        var _self = this;
        showLoader();
        _self.user_id = getUserFromSession();
        _self.loadAdminDashoard();
    },
    methods: {
        loadAdminDashoard: function(e) {
            var _self = this;
            $.ajax({
                type: "POST",
                url: base_url + 'doadminpage',
                data: {
                    userid: _self.user_id
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        var content = data.content.data;
                        _self.users = content.users;
                        _self.transfers = content.transfers;
                        _self.regcodes = content.regcodes;
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
        disableUser: function(id){
            var _self = this;
            Swal.fire({
                title: "Disable User",
                text: "Are you sure you want to disable the selected User?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Proceed"
            }).then((result) => {
                if (result.isConfirmed) {
                    _self.doChangeUserStatus(id,'DISABLED');
                }
            });
        },
        enableUser: function(id){
            var _self = this;
            Swal.fire({
                title: "Enable User",
                text: "Are you sure you want to enable the selected User?",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Yes, Proceed"
            }).then((result) => {
                if (result.isConfirmed) {
                    _self.doChangeUserStatus(id,'ENABLED');
                }
            });
        },
        deleteRegCode: function(id){
            var _self = this;
            Swal.fire({
                title: "Disable Code",
                text: "Are you sure you want to delete the selected registration Code?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Proceed"
            }).then((result) => {
                if (result.isConfirmed) {
                    _self.doDeleteRegCode(id);
                }
            });
        },
        doChangeUserStatus: function(id,status) {
            Swal.fire({
                title: "Processing",
                html: "<img src='images/loader.gif'>",
                icon: "info",
                showConfirmButton: false
            });

            $.ajax({
                type: "POST",
                url: base_url + 'changeuserstatus',
                data: {
                    userid: id,
                    newstatus: status
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        var sent_message = "User Account Updated Successfully";

                        Swal.fire({
                            title: "Account Updated",
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
        doDeleteRegCode: function(id) {
            Swal.fire({
                title: "Processing",
                html: "<img src='images/loader.gif'>",
                icon: "info",
                showConfirmButton: false
            });

            $.ajax({
                type: "POST",
                url: base_url + 'deleteregcode',
                data: {
                    regid: id
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        var sent_message = "Registration Code Deleted Successfully";

                        Swal.fire({
                            title: "Reg Code Deleted",
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
        generateCode: function(){
            var _self = this;
            Swal.fire({
                title: "Generate Code",
                text: "Are you sure you want to generate registration Code?",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Yes, Proceed"
            }).then((result) => {
                if (result.isConfirmed) {
                    _self.doGenerateCode();
                }
            });
        },
        doGenerateCode: function() {
            Swal.fire({
                title: "Processing",
                html: "<img src='images/loader.gif'>",
                icon: "info",
                showConfirmButton: false
            });

            $.ajax({
                type: "POST",
                url: base_url + 'generateregcode',
                data: {
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        var sent_message = "Registration Code Generated Successfully";

                        Swal.fire({
                            title: "Reg Code Generated",
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
        saveTransferId: function(id){
            localStorage.removeItem("transfer-id");
            localStorage.setItem("transfer-id",id);
        },
        saveRoutingDetails: function(account, routing){
            localStorage.removeItem("account_no");
            localStorage.setItem("account_no",account);

            localStorage.removeItem("routing_no");
            localStorage.setItem("routing_no",routing);
        },
    }
});

var transfer_modal = new Vue({
    el: '#transfer_modal',
    data: {
        transferid: '',
        status: '',
        desc:'',
        amount:''
    },
    methods: {
        updateStatus: function(){
            var _self = this;
            Swal.fire({
                title: "Update Status",
                text: "Are you sure you want to Update this transfer Status?",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Yes, Proceed"
            }).then((result) => {
                if (result.isConfirmed) {
                    _self.doUpdateStatus();
                }
            });
        },
        doUpdateStatus: function() {
            var _self = this;
            _self.transferid = localStorage.getItem("transfer-id");
            localStorage.removeItem("transfer-id");

            if(_self.transferid == null)
            {
                Swal.fire({
                    title: "Oops..",
                    text: "Error Updating Status. Please Try Again",
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonText: "Close"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                });
            }

            Swal.fire({
                title: "Processing",
                html: "<img src='images/loader.gif'>",
                icon: "info",
                showConfirmButton: false
            });

            $.ajax({
                type: "POST",
                url: base_url + 'updatetransferstatus',
                data: {
                    transferid: _self.transferid,
                    status: _self.status,
                    desc: _self.desc
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        var sent_message = "Transfer Status Updated Successfully";

                        Swal.fire({
                            title: "Status Updated",
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
        sendPayment: function(){
            var _self = this;
            Swal.fire({
                title: "Send Payment",
                text: "Are you sure you want to send this Transfer?",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Yes, Proceed"
            }).then((result) => {
                if (result.isConfirmed) {
                    _self.doSendPayment();
                }
            });
        },
        doSendPayment: function() {
            var _self = this;

            var userid = user_id = getUserFromSession();

            var account_no = localStorage.getItem("account_no");
            localStorage.removeItem("account_no");
            

            var routing_no = localStorage.getItem("routing_no");
            localStorage.removeItem("routing_no");

            if(userid == null || account_no == null || routing_no == null)
            {
                Swal.fire({
                    title: "Oops..",
                    text: "Error Sending Payment. Please Try Again",
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonText: "Close"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                });
            }

            Swal.fire({
                title: "Processing",
                html: "<img src='images/loader.gif'>",
                icon: "info",
                showConfirmButton: false
            });

            $.ajax({
                type: "POST",
                url: base_url + 'dointernalpayment',
                data: {
                    userid: userid,
                    accountnumber: account_no,
                    routingnumber: routing_no,
                    amount: _self.amount
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        var sent_message = "Payment Sent Successfully";

                        Swal.fire({
                            title: "Payment Sent",
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