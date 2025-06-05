<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="hero-slider__social">
    <a href="https://facebook.com/">
      <i class="icon-facebook" aria-hidden="true"></i>
      <span class="sr-only">Facebook</span>
    </a>
    <a href="https://twitter.com/">
      <i class="icon-twitter" aria-hidden="true"></i>
      <span class="sr-only">Twitter</span>
    </a>
    <a href="https://instagram.com/">
      <i class="icon-instagram" aria-hidden="true"></i>
      <span class="sr-only">Instagram</span>
    </a>
    <a href="https://youtube.com/">
      <i class="icon-youtube" aria-hidden="true"></i>
      <span class="sr-only">Youtube</span>
    </a>
  </div>
  <!-- /.hero-slider__social -->
  <div class="main-slider-three__border-top"></div>
  <!-- /.main-slider-three__border-top -->
  <div class="main-slider-three__border-right"></div>
  <!-- /.main-slider-three__border-right -->
  <div class="main-slider-three__border-left"></div>
  <!-- /.main-slider-three__border-left -->
  <div class="main-slider-three__border-bottom">
    <div class="main-slider-three__border-bottom__inner"></div>
    <!-- /.main-slider-three__border-bottom__inner -->
  </div>
  <!-- /.main-slider-three__border-bottom -->
  <div
    class="main-slider-three__carousel floens-slick__carousel--with-counter"
    data-slick-options='{
		"slidesToShow": 1,
		"slidesToScroll": 1,
		"autoplay": true,
		"autoplaySpeed": 3000,
		"speed": 2000,
		"infinite": true,
		"fade": true,
		"dots": false,
		"arrows": true,
		"prevArrow": "<button class=\"hero-slider__slick-button hero-slider__slick-button--prev\"><i class=\"icon-left-arrow\"><i></button>",
		"nextArrow": "<button class=\"hero-slider__slick-button hero-slider__slick-button--next\"><i class=\"icon-right-arrow\"><i></button>"

	}'
  >
    <div class="main-slider-three__item">
      <div
        class="main-slider-three__bg"
        style="background-image: url(/images/backgrounds/slider-3-1-1.jpg)"
      ></div>
      <!-- /.main-slider-three__bg -->
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-8 mx-auto">
            <div class="main-slider-three__content">
              <h2 class="main-slider-three__title">The Art of Surface. The Heart of Your Home.</h2>
              <!-- /.main-slider-three__title -->
              <a href="about.html" class="main-slider-three__btn floens-btn">
                <span>discover more</span>
                <i class="icon-right-arrow"></i> </a
              ><!-- /.main-slider-three__btn floens-btn -->
            </div>
            <!-- /.main-slider-three__content -->
          </div>
          <!-- /.col-md-10 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /..container -->
    </div>
    <!-- /.main-slider-three__item -->
    <div class="main-slider-three__item">
      <div
        class="main-slider-three__bg"
        style="background-image: url(/images/backgrounds/slider-3-2-1.jpg)"
      ></div>
      <!-- /.main-slider-three__bg -->
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-8 mx-auto">
            <div class="main-slider-three__content">
              <h2 class="main-slider-three__title">
                Imagine the Possibilities. Experience Quartz.
              </h2>
              <!-- /.main-slider-three__title -->
              <a href="about.html" class="main-slider-three__btn floens-btn">
                <span>discover more</span>
                <i class="icon-right-arrow"></i> </a
              ><!-- /.main-slider-three__btn floens-btn -->
            </div>
            <!-- /.main-slider-three__content -->
          </div>
          <!-- /.col-md-10 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /..container -->
    </div>
    <!-- /.main-slider-three__item -->
    <div class="main-slider-three__item">
      <div
        class="main-slider-three__bg"
        style="background-image: url(/images/backgrounds/slider-3-3.jpg)"
      ></div>
      <!-- /.main-slider-three__bg -->
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-8 mx-auto">
            <div class="main-slider-three__content">
              <!-- /.main-slider-three__circle-text -->
              <h2 class="main-slider-three__title">Timeless Design. Modern Durability.</h2>
              <!-- /.main-slider-three__title -->
              <a href="about.html" class="main-slider-three__btn floens-btn">
                <span>discover more</span>
                <i class="icon-right-arrow"></i> </a
              ><!-- /.main-slider-three__btn floens-btn -->
            </div>
            <!-- /.main-slider-three__content -->
          </div>
          <!-- /.col-md-10 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /..container -->
    </div>
    <!-- /.main-slider-three__item -->
  </div>
  <!-- /.main-slider-three__carousel -->
</template>
