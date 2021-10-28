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

    <div id="homepage" class="content-body">
        <div class="container">
            <div class="page-title">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-4">
                        <div class="page-title-content">
                            <h3>Dashboard</h3>
                            <p class="mb-2">Welcome, {{ fullname }}</p>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="breadcrumbs"><a href="#">Home </a><span><i
                                    class="ri-arrow-right-s-line"></i></span><a href="#">Dashboard</a></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Balance Details</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="total-balance">
                                        <p>Total Balance</p>
                                        <h2>{{ balance }}</h2>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div class="balance-stats active">
                                        <p>Account No</p>
                                        <h3>{{ account_number }}</h3>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div class="balance-stats">
                                        <p>Routing</p>
                                        <h3>{{ routing_number }}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Stats</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div class="stat-widget d-flex align-items-center">
                                        <div class="widget-icon me-3 bg-primary"><span><i
                                                    class="ri-wallet-line"></i></span></div>
                                        <div class="widget-content">
                                            <h3>{{ received }}</h3>
                                            <p>Received</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div class="stat-widget d-flex align-items-center">
                                        <div class="widget-icon me-3 bg-secondary"><span><i
                                                    class="ri-wallet-2-line"></i></span></div>
                                        <div class="widget-content">
                                            <h3>{{ sent }}</h3>
                                            <p>Sent</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div class="stat-widget d-flex align-items-center">
                                        <div class="widget-icon me-3 bg-success"><span><i
                                                    class="ri-wallet-3-line"></i></span></div>
                                        <div class="widget-content">
                                            <h3>{{ completed }}</h3>
                                            <p>Completed</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div class="stat-widget d-flex align-items-center">
                                        <div class="widget-icon me-3 bg-danger"><span><i
                                                    class="ri-wallet-3-line"></i></span></div>
                                        <div class="widget-content">
                                            <h3>{{ pending }}</h3>
                                            <p>Pending</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Payment History</h4>
                            <a href="payment.php">See more</a>
                        </div>
                        <div class="card-body">
                            <div class="payments-content">
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

<script src="js/views/home.js"></script>


</body>

</html>