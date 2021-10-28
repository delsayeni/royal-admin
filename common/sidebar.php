<div id="sidebar_common" class="sidebar">
        <div class="brand-logo"><a class="full-logo" href="index.php"><img src="images/logoi.png" alt="" width="30"></a></div>
        <div class="menu">
            <ul>
                <li><a href="index.php">
                        <span><i class="ri-home-5-line"></i></span>
                        <span class="nav-text">Dashboard</span>
                    </a>
                </li>
                <!-- <li><a href="wallet.php">
                        <span><i class="ri-wallet-line"></i></span>
                        <span class="nav-text">Wallet</span>
                    </a>
                </li> -->
                <li><a href="payment.php">
                        <span><i class="ri-secure-payment-line"></i></span>
                        <span class="nav-text">Payment</span>
                    </a>
                </li>
                <li><a href="profile.php">
                        <span><i class="ri-user-fill"></i></span>
                        <span class="nav-text">Profile</span>
                    </a>
                </li>
                <li v-show="isAdmin"><a href="royals-admin.php">
                        <span><i class="ri-settings-3-line"></i></span>
                        <span class="nav-text">Admin</span>
                    </a>
                </li>
                <li class="logout">
                    <a v-on:click="doSidebarSignOut">
                        <span><i class="ri-logout-circle-line"></i></span>
                        <span class="nav-text">Signout</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>