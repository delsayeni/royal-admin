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

    <div id="local_payment_page" class="content-body">
        <div class="container">
            <div class="page-title">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-4">
                        <div class="page-title-content">
                            <h3>Send Payment</h3>
                            <p class="mb-2">Welcome To Royal Executive</p>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="breadcrumbs"><a href="payment.php">Payment </a><span><i
                                    class="ri-arrow-right-s-line"></i></span><a href="#">Send Local Transfer</a></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Local Transfer </h4>
                            <div class="btn-group">
                               <a href="#" class="btn btn-primary">Local</a>
                               <a href="create-international.php" class="btn btn-outline-primary">International Transfer</a></div>
                        </div>
                        <div class="card-body">
                              <form @submit.prevent="showLocalPayment" class="invoice-form">
                                 <div class="row justify-content-between">
                                    <div class="col-xl-3">
                                       <div class="mb-3">
                                          <label class="form-label">
                                             Account Name
                                             </label>
                                             <input type="text" v-model.trim="account_name" class="form-control required" placeholder="John Doe" required>
                                       </div>
                                       <div class="mb-3">
                                          <label class="form-label">
                                             Account Number
                                             </label>
                                             <input type="number" v-model.trim="account_number" class="form-control required" placeholder="0011223344" required>
                                       </div>
                                       <div class="mb-3">
                                          <label class="form-label">
                                             Amount
                                             </label>
                                             <input type="number" v-model.trim="amount" class="form-control required" placeholder="Amount in dollars ($)" required>
                                       </div>
                                    </div>
                                    <div class="col-xl-3">
                                          <div class="mb-3">
                                          <label class="form-label">
                                             Bank Name
                                             </label>
                                             <input type="text" v-model.trim="bank_name" class="form-control required" placeholder="XYZ Bank" required>
                                          </div>
                                          <div class="mb-3">
                                          <label class="form-label">
                                             Routing Number
                                             </label>
                                             <input type="number" v-model.trim="routing_number" class="form-control required" placeholder="0011223344" required>
                                       </div>
                                       <div class="mb-3">
                                          <label class="form-label">
                                             Account Type
                                             </label>
                                             <select class="form-select" v-model="account_type" required>
                                                <option value="">Select</option>
                                                <option value="checking">Checking</option>
                                                <option value="saving">Saving</option>
                                             </select>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="add-reset d-flex justify-content-between">
                                    <a href="create-payment.php" class="btn btn-outline-primary">
                                       <span><i class="ri-close-line"></i></span>Reset
                                    </a>
                                    <button type="submit" class="btn btn-primary">
                                       <span><i class="bi bi-plus"></i></span>Send Payment
                                    </button>
                                 </div>
                              </form>
                        </div>
                    </div>
                </div>

                <div class="col-xl-12">
                     <div class="card">
                           <div class="card-header">
                              <h4 class="card-title">Internal Transfer </h4>
                           </div>
                           <div class="card-body">
                              <form @submit.prevent="showInternalPayment" class="invoice-form">
                                 <div class="row justify-content-between">
                                    <div class="col-xl-4">
                                       <div class="mb-5">
                                          <label class="form-label">
                                             Account Number
                                             </label>
                                             <input type="number" v-model.trim="internal_account_number" class="form-control required" placeholder="0011223344" required>
                                       </div>
                                    </div>
                                    <div class="col-xl-4">
                                       <div class="mb-5">
                                          <label class="form-label">
                                             Routing Number
                                             </label>
                                             <input type="number" v-model.trim="internal_routing_number" class="form-control required" placeholder="0011223344" required>
                                       </div>
                                    </div>

                                    <div class="col-xl-4">
                                       <div class="mb-5">
                                          <label class="form-label">
                                             Amount
                                             </label>
                                             <input type="number" v-model.trim="internal_amount" class="form-control required" placeholder="Amount in Dollars ($)" required>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="add-reset d-flex justify-content-between">
                                    <a href="create-payment.php" class="btn btn-outline-primary">
                                       <span><i class="ri-close-line"></i></span>Reset
                                    </a>
                                    <button type="submit" class="btn btn-primary">
                                       <span><i class="bi bi-plus"></i></span>Send Payment
                                    </button>
                                 </div>
                              </form>
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
<script src="js/views/local_payment.js"></script>
</body>

</html>