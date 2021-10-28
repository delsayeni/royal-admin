<!DOCTYPE html>
<html lang="en">

<?php
    include 'common/head.php';
?>

<body class="@@class">

<?php
    include 'common/loader.php';
?>

<div id="main-wrapper">

    <div id="resetpassword-confirm" class="authincation section-padding">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-4 col-md-5">
                    <div class="mini-logo text-center my-3">
                        <a href=""><img src="images/logo.png" alt=""></a>
                        <h4 class="card-title mt-5">Reset Password</h4>
                    </div>
                    <div class="auth-form card">
                        <div class="card-body">
                            <form @submit.prevent="doResetPassword" class="row g-3">
                                <div class="col-12">
                                    <label class="form-label">Email</label>

                                    <input type="text" v-model.trim="email" class="form-control" placeholder="Enter Your Email Address" required>
                                </div>
                                <div class="text-center mt-4">
                                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>



<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="js/scripts.js"></script>

<script src="js/views/reset_password.js"></script>


</body>

</html>