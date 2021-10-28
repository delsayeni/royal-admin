<div id="header_common" class="header">
        <div class="container">
        <div class="row">
            <div class="col-xxl-12">
                <div class="header-content">
                    <div class="header-left">
                    <div class="brand-logo"><a class="mini-logo" href="index.php"><img src="images/logoi.png" alt="" width="40"></a></div>
                    <div class="search">
                        <a href=""><img src="images/logo.png" alt=""></a>
                    </div>
                    <div class="search-mobile">
                        <a href=""><img src="images/logo_mobile.png" alt=""></a>
                    </div>
                    </div>
                    <div class="header-right">
                    <div class="dark-light-toggle"><span class="dark"><i class="ri-moon-line"></i></span><span class="light"><i class="ri-sun-line"></i></span></div>
                    
                    <div class="dropdown profile_log dropdown">
                        <div data-toggle="dropdown" aria-haspopup="true" class="" aria-expanded="false">
                            <div class="user icon-menu active"><span><i class="ri-user-line"></i></span></div>
                        </div>
                        <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu dropdown-menu-right">
                            <div class="user-email">
                                <div class="user">
                                <span class="thumb"><img src="images/profile/3.png" alt=""></span>
                                <div class="user-info">
                                    <h5>{{name}}</h5>
                                    <span>{{email}}</span}>
                                </div>
                                </div>
                            </div>
                            <a class="dropdown-item" href="profile.php"><span><i class="ri-user-line"></i></span>Profile</a>
                            <!-- <a class="dropdown-item" href="wallet.php"><span><i class="ri-wallet-line"></i></span>Wallet</a> -->
                            <a class="dropdown-item" href="payment.php"><span><i class="ri-secure-payment-line"></i></span>Payments</a>
                            <a class="dropdown-item logout" v-on:click="doSignOut"><i class="ri-logout-circle-line"></i>Logout</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>