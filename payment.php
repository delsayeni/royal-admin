<!DOCTYPE html>
<html lang="en">

<?php
    include 'common/head.php';
?>

<body class="dashboard">

<?php
    include 'common/loader.php';
?>

<div id="main-wrapper">
    <?php
        include 'common/header.php';
        include 'common/sidebar.php';
    ?>

    <div id="payment-page" class="content-body">
        <div class="container">
            <div class="page-title">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-4">
                        <div class="page-title-content">
                            <h3>Payment</h3>
                            <p class="mb-2">Welcome To Royal Executive</p>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="breadcrumbs"><a href="index.php">Home </a><span><i
                                    class="ri-arrow-right-s-line"></i></span><a href="#">Payment</a></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 col-sm-6">
                    <div class="stat-widget d-flex align-items-center bg-white">
                        <div class="widget-icon me-3 bg-primary"><span><i class="ri-file-copy-2-line"></i></span></div>
                        <div class="widget-content">
                            <h3>{{ balance }}</h3>
                            <p>available Balance</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="stat-widget d-flex align-items-center bg-white">
                        <div class="widget-icon me-3 bg-success"><span><i class="ri-file-list-3-line"></i></span></div>
                        <div class="widget-content">
                            <h3>{{ sent }}</h3>
                            <p>Total Sent</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="stat-widget d-flex align-items-center bg-white">
                        <div class="widget-icon me-3 bg-warning"><span><i class="ri-file-paper-line"></i></span></div>
                        <div class="widget-content">
                            <h3>{{ completed }}</h3>
                            <p>Completed</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="stat-widget d-flex align-items-center bg-white">
                        <div class="widget-icon me-3 bg-danger"><span><i class="ri-file-paper-2-line"></i></span></div>
                        <div class="widget-content">
                            <h3>{{ pending }}</h3>
                            <p>Pending</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header flex-row">
                            <h4 class="card-title">Payments </h4>
                            <a class="btn btn-primary" href="create-payment.php"><span><i
                                        class="bi bi-plus"></i></span>Send Payment</a>
                        </div>
                        <div class="card-body">
                            <div class="invoice-table">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th></th>
                                            <th>Bank</th>
                                            <th>Account Name</th>
                                            <th>Amount</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        <tr v-for="transfer in transfers" :key="transfer.id">
                                            <td><span><i class="ri-bank-fill"></i></span></td>
                                            <td>{{transfer.bank}}</td>
                                            <td>{{transfer.account}}</td>
                                            <td>{{transfer.amount}}</td>
                                            <td>{{transfer.date}}</td>
                                            <td>{{transfer.status}}</td>
                                            <td><button v-on:click="showRemarks(transfer.remark)" class="btn btn-success s-1">See Status Remarks</button></td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<?php
    include 'common/commonjs.php';
?>

<script src="js/views/payment.js"></script>
</body>

</html>