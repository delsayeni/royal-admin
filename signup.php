<!DOCTYPE html>
<html lang="en">

<?php
    include 'common/head.php';
?>

<body class="@@class">

<?php
    include 'common/loader.php';
?>

<div id="register-confirm" class="authincation section-padding">
    <div class="container h-100" style="margin-top: -100px;">
        <div class="row justify-content-center h-100 align-items-center">
            <div class="col-xl-5 col-md-6">
                <div class="mini-logo text-center my-4">
                    <a href=""><img src="images/logo.png" alt=""></a>
                    <h4 class="card-title mt-5">Create your account</h4>
                    <h6 class="card-title mt-5">Royal Executive is a Referal Only Platform</h6>
                </div>
                <div class="auth-form card">
                    <div class="card-body">
                        <form @submit.prevent="doRegisterConfirm" class="signin_validate row g-3">
                            <div class="col-12">
                                <label class="form-label">Registration Code</label>
                                <input type="text" class="form-control" v-model.trim="regCode" placeholder="Please Enter Your Registration Code" name="name" required>
                            </div>

                            <div class="d-grid gap-2">
                                <button type="submit" id="registerconfirm-button" class="btn btn-primary">Confirm</button>
                            </div>
                        </form>
                        <div class="text-center">
                            <p class="mt-3 mb-0"> <a class="text-primary" href="signin.php">Sign in</a> to your
                                account</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<script src="../vendor/jquery/jquery.min.js"></script>
<script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../js/scripts.js"></script>

<script src="js/views/register-confirm.js"></script>

</body>

</html>