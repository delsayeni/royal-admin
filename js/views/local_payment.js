var local_pay_form = new Vue({
    el: '#local_payment_page',
    data: {
        user_id:'',
        account_number: '',
        account_name:'',
        amount:'',
        bank_name:'',
        routing_number: '',
        account_type:'',
        internal_account_number:'',
        internal_routing_number:'',
        internal_amount:'',
    },
    created: function () {
        var _self = this;
        _self.user_id = getUserFromSession();
    },
    methods: {
        showLocalPayment: function(e) {
            var _self = this;
            Swal.fire({
                title: "Make Payment",
                text: "Are you sure you want to send out this payment?",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Yes, Proceed"
            }).then((result) => {
                if (result.isConfirmed) {
                    _self.doLocalPayment();
                }
            });
        },
        showInternalPayment: function(e) {
            var _self = this;
            Swal.fire({
                title: "Make Payment",
                text: "Are you sure you want to send out this payment?",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Yes, Proceed"
            }).then((result) => {
                if (result.isConfirmed) {
                    _self.doInternalPayment();
                }
            });
        },
        doLocalPayment: function(e) {
            var _self = this;
            Swal.fire({
                title: "Processing",
                html: "<img src='images/loader.gif'>",
                icon: "info",
                showConfirmButton: false
            });

            $.ajax({
                type: "POST",
                url: base_url + 'dolocalpayment',
                data: {
                    userid: _self.user_id,
                    accountnumber: _self.account_number,
                    accountname: _self.account_name,
                    amount: _self.amount,
                    bankname: _self.bank_name,
                    routingnumber: _self.routing_number,
                    accounttype: _self.account_type,
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        var sent_message = "Payment Sent Successfully. You can track the status of the Payment from your Payment Page. A confirmation email has also been sent out to you.";

                        Swal.fire({
                            title: "Payment Sent",
                            text: sent_message,
                            icon: "success",
                            showCancelButton: false,
                            confirmButtonText: "Proceed"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = "/payment.php";
                            }
                        });
                    }
                    else{
                        var error = data.error;
                        let error_test = "Something went wrong! Try refresh the page and make the payment again.";
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
                    let error_test = "Something went wrong! Try refresh the page and make the payment again.";
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
        doInternalPayment: function(e) {
            var _self = this;
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
                    userid: _self.user_id,
                    accountnumber: _self.internal_account_number,
                    routingnumber: _self.internal_routing_number,
                    amount: _self.internal_amount
                },
                success: function (data) {

                    if (typeof data.success !== "undefined") {
                        var sent_message = "Payment Sent Successfully. You can track the status of the Payment from your Payment Page. A confirmation email has also been sent out to you.";

                        Swal.fire({
                            title: "Payment Sent",
                            text: sent_message,
                            icon: "success",
                            showCancelButton: false,
                            confirmButtonText: "Proceed"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = "/payment.php";
                            }
                        });
                    }
                    else{
                        var error = data.error;
                        let error_test = "Something went wrong! Try refresh the page and make the payment again.";
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
                    let error_test = "Something went wrong! Try refresh the page and make the payment again.";
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