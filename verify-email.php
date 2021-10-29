<!DOCTYPE html>
<html lang="en">

<?php
    include 'common/head.php';
?>

<body class="@@class">

<?php
    include 'common/loader.php';
?>

    <div id="confirm-token" class="verification section-padding">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-5 col-md-6">
                    <div class="mini-logo text-center my-4">
                        <a href=""><img src="images/logo.png" alt=""></a>
                        <h4 class="card-title mt-5">Verify your Email</h4>
                    </div>
                    <div class="auth-form card">
                        <div class="card-body">
                            <form @submit.prevent="doConfirmToken" class="signin_validate row g-3">
                                <div class="identity-content">
                                    <span class="icon"><i class="ri-mail-check-line"></i></span>
                                    <p>
                                        We sent verification token to <strong
                                            class="text-dark">{{ email }}</strong>. Please Provide the Code Below to Proceed
                                    </p>
                                    
                                </div>
                                <div class="col-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <i class="ri-smartphone-line"></i>
                                            </span>
                                        </div>
                                        <input type="text" v-model.trim="token" class="form-control" placeholder="verification Token" required>
                                    </div>
                                </div>

                                <div class="d-grid gap-2">
                                    <button type="submit" id="confirmtoken-button" class="btn btn-primary">Create account</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer text-center">
                            <a href="signup-form.php">Email didn't arrive?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script src="../vendor/jquery/jquery.min.js"></script>
<script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../js/scripts.js"></script>

<script src="js/views/confirm_token.js"></script>

</body>

</html>