<!DOCTYPE html>
<html lang="en">

<?php
    include 'common/head.php';
?>

<body class="@@class">

<?php
    include 'common/loader.php';
?>

<div id="login" class="authincation section-padding">
    <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
            <div class="col-xl-5 col-md-6">
                <div class="mini-logo text-center">
                    <a href=""><img src="images/logo.png" alt=""></a>
                </div>
                <div class="auth-form card">
                    <div class="card-body">
                        <form @submit.prevent="doLogin" class="signin_validate row g-3">
                            <div class="col-12">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" v-model.trim="email" placeholder="hello@example.com"
                                    name="email" required>
                            </div>
                            <div class="col-12">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" v-model.trim="password" placeholder="Password" name="password" required>
                            </div>

                            <div class="col-6">
                            </div>
                            
                            <div class="col-6 text-end">
                                <a href="reset.php">Forgot Password?</a>
                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                        <p class="mt-3 mb-0">Don't have an account? <a class="text-primary" href="signup.php">Sign
                                up</a></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<script src="../vendor/jquery/jquery.min.js"></script>
<script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../js/scripts.js"></script>

<script src="js/views/login.js"></script>


</body>

</html>