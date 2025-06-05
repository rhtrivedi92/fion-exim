<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container-fluid">
    <div class="main-header__inner">
      <div class="main-header__logo">
        <a href="index.html">
          <img
            src="/images/logo-fion.png"
            alt="Floens HTML"
            width="100"
            class="main-header__logo__one"
          />
          <img
            src="/images/logo-fion.png"
            alt="Floens HTML"
            width="100"
            class="main-header__logo__two"
          />
        </a>
      </div>
      <!-- /.main-header__logo -->
      <div class="main-header__right">
        <nav class="main-header__nav main-menu">
          <ul class="main-menu__list">
            <li>
              <router-link to="/">Home</router-link>
            </li>

            <li>
              <router-link to="/about">About Us</router-link>
            </li>

            <li>
              <a href="#">Collections</a>
            </li>

            <li>
              <a href="contact.html">Contact Us</a>
            </li>
          </ul>
        </nav>
        <!-- /.main-header__nav -->
        <div class="mobile-nav__btn mobile-nav__toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <!-- /.mobile-nav__toggler -->

        <a href="contact.html" class="floens-btn main-header__btn">
          <span>get a quote</span>
          <i class="icon-right-arrow"></i> </a
        ><!-- /.thm-btn main-header__btn -->
      </div>
      <!-- /.main-header__right -->
    </div>
    <!-- /.main-header__inner -->
  </div>
</template>
