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

    <div id="admin-page" class="content-body">
        <div class="container">
            <div class="page-title">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-4">
                        <div class="page-title-content">
                            <h3>Admin</h3>
                            <p class="mb-2">Welcome To Royal Executive</p>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="breadcrumbs"><a href="index.php">Home </a><span><i
                                    class="ri-arrow-right-s-line"></i></span><a href="#">Admin</a></div>
                    </div>
                </div>
            </div>
            <div class="row">
                
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header flex-row">
                            <h4 class="card-title">Users </h4>
                        </div>
                        <div class="card-body">
                            <div class="invoice-table">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th>User Full Name</th>
                                            <th>Email</th>
                                            <th>Account Number</th>
                                            <th>Routing</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr v-for="user in users" :key="user.id">
                                                <td>{{user.fullname}}</td>
                                                <td>{{user.email}}</td>
                                                <td>{{user.account_number}}</td>
                                                <td>{{user.routing_number}}</td>
                                                <td>{{user.status}}</td>
                                                <td v-if="user.status == 'ENABLED'">
                                                    <button type="button" v-on:click="saveRoutingDetails(user.account_number,user.routing_number)" class="btn btn-success s-2" data-toggle="modal" data-target="#addPayment">Send Payment</button>
                                                    <button v-on:click="disableUser(user.id)" class="badge px-3 py-2 bg-danger">Disable</button>
                                                </td>
                                                <td v-else>
                                                    <button type="button" v-on:click="saveRoutingDetails(user.account_number,user.routing_number)" class="btn btn-primary s-2" data-toggle="modal" data-target="#addPayment">Send Payment</button>
                                                    <button v-on:click="enableUser(user.id)" class="badge px-3 py-2 bg-success">Enable</button>
                                                </td>
                                            </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header flex-row">
                            <h4 class="card-title">Transfers </h4>
                        </div>
                        <div class="card-body">
                            <div class="invoice-table">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th>User</th>
                                            <th>Bank</th>
                                            <th>Account Name</th>
                                            <th>Type</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr v-for="transfer in transfers" :key="transfer.id">
                                                <td>{{transfer.user}}</td>
                                                <td>{{transfer.bank}}</td>
                                                <td>{{transfer.account_name}}</td>
                                                <td>{{transfer.type}}</td>
                                                <td>{{transfer.amount}}</td>
                                                <td>{{transfer.status}}</td>
                                                <td><button type="button" v-on:click="saveTransferId(transfer.id)" class="btn btn-primary s-2" data-toggle="modal" data-target="#addStatus">Set Status</button></td>
                                            </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header flex-row">
                            <h4 class="card-title">Registration Code </h4>
                            <button type="button" v-on:click="generateCode" class="btn btn-primary"><span><i
                                        class="bi bi-plus"></i></span>Generate Code</a>
                        </div>
                        <div class="card-body">
                            <div class="invoice-table">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th>Registration Code</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr v-for="code in regcodes" :key="code.id">
                                                <td>{{code.reg_code}}</td>
                                                <td>{{code.status}}</td>
                                                <td><button type="button" v-on:click="deleteRegCode(code.id)" class="btn btn-danger s-2">Delete</button></td>
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

<div id="transfer_modal">
    <!-- Modal -->
    <div class="modal fade" id="addStatus" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addCardLabel">Add Transfer Status</h5>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="updateStatus" class="identity-upload">
                        <div class="row g-3">
                            <div class="col-xl-12">
                                <label class="form-label">Transfer Status</label>
                                <input type="text" v-model.trim="status" class="form-control" placeholder="Transfer On Hold" required>
                            </div>
                            <div class="col-xl-12">
                                <label class="form-label">Status Description</label>
                                <textarea class="form-control" v-model.trim="desc" rows="4"></textarea>
                            </div>
                        </div>
                        <div class="col-xl-12" style="margin-top: 20px;">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="addPayment" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addCardLabel">Send Payment To User</h5>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="sendPayment" class="identity-upload">
                        <div class="row g-3">
                            <div class="col-xl-12">
                                <label class="form-label">Amount</label>
                                <input type="number" v-model.trim="amount" class="form-control" placeholder="Amount to Send" required>
                            </div>
                        </div>
                        <div class="col-xl-12" style="margin-top: 20px;">
                            <button type="submit" class="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</div>



<?php
    include 'common/commonjs.php';
?>

<script src="js/views/admin.js"></script>
</body>

</html>