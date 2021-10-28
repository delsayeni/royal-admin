var int_pay_form = new Vue({
    el: '#int_payment_page',
    data: {
        user_id:'',
        account_number: '',
        account_name:'',
        amount:'',
        bank_name:'',
        routing_number: '',
        sort_code:'',
        country:''
    },
    created: function () {
        var _self = this;
        _self.user_id = getUserFromSession();
    },
    methods: {
        showInternationalPayment: function(e) {
            var _self = this;
            Swal.fire({
                title: "Make Payment",
                text: "Are you sure you want to send out this payment?",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Yes, Proceed"
            }).then((result) => {
                if (result.isConfirmed) {
                    _self.dointernationalPayment();
                }
            });
        },
        dointernationalPayment: function(e) {
            var _self = this;
            Swal.fire({
                title: "Processing",
                html: "<img src='images/loader.gif'>",
                icon: "info",
                showConfirmButton: false
            });

            $.ajax({
                type: "POST",
                url: base_url + 'dointernationalpayment',
                data: {
                    userid: _self.user_id,
                    accountnumber: _self.account_number,
                    accountname: _self.account_name,
                    amount: _self.amount,
                    bankname: _self.bank_name,
                    routingnumber: _self.routing_number,
                    sortcode: _self.sort_code,
                    country: _self.country,
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
    }
});