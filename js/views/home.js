var home_page = new Vue({
    el: '#homepage',
    data: {
        user_id: '',
        fullname: '',
        account_number: '',
        routing_number: '',
        balance: '',
        received: '',
        sent: '',
        completed: '',
        pending: '',
        transfers: [],
    },
    created: function () {
        var _self = this;
        showLoader();
        _self.user_id = getUserFromSession();
        _self.loadDashboard();
    },
    methods: {
        showRemarks: function(showRemarks){
            Swal.fire({
                title: "Status Remarks",
                text: showRemarks,
                showCancelButton: false,
                confirmButtonText: "Close"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.close();
                }
            });
        },
        loadDashboard: function(e) {
            var _self = this;
            $.ajax({
                type: "POST",
                url: base_url + 'dohomepage',
                data: {
                    userid: _self.user_id
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        var content = data.content.data;
                        _self.account_number = content.account_number;
                        _self.routing_number = content.routing_number;
                        _self.balance = content.balance;
                        _self.received = content.received;
                        _self.sent = content.sent;
                        _self.completed = content.completed;
                        _self.pending = content.pending;
                        _self.transfers = content.transfers;
                        _self.fullname = getUserNameFromSession();
                        hideLoader();
                    }
                    else{
                        hideLoader();
                        var error = data.error;
                        $("#confirmtoken-button").attr("disabled", false);
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
        }
    }
});