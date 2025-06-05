<script setup>
import Header from './components/Header.vue'
import MainSlider from './components/MainSlider.vue'
</script>

<template>
  <div class="custom-cursor__cursor"></div>
  <div class="custom-cursor__cursor-two"></div>

  <div class="preloader">
    <div class="preloader__image" style="background-image: url(/images/loader.png)"></div>
  </div>
  <div class="page-wrapper">
    <header class="main-header main-header--three sticky-header sticky-header--normal">
      <Header />
      <!-- /.container-fluid -->
    </header>
    <!-- /.main-header -->

    <!-- main slider start -->
    <section class="main-slider-three hero-slider">
      <MainSlider />
    </section>
    <!-- /.main-slider-three -->
    <!-- main slider end -->

    <!-- about start -->
    <section class="about-three section-space" id="about">
      <div class="container">
        <div class="row gutter-y-60">
          <div class="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
            <div class="about-three__image">
              <div class="about-three__image__inner">
                <img
                  src="/images/about/about-3-1-1.jpg"
                  alt="about"
                  class="about-three__image__one"
                />

                <div class="about-three__image__shape"></div>
                <!-- /.about-three__image__shape -->
              </div>
              <!-- /.about-three__image__inner -->
            </div>
            <!-- /.about-three__image -->
          </div>
          <!-- /.col-lg-6 -->
          <div class="col-lg-6">
            <div class="about-three__content">
              <div class="sec-title @@extraClassName">
                <h6 class="sec-title__tagline">about us</h6>
                <!-- /.sec-title__tagline -->

                <h3 class="sec-title__title">Your Trusted Partner in Quartz Surfaces</h3>
                <!-- /.sec-title__title -->
              </div>
              <!-- /.sec-title -->

              <p class="about-three__text wow fadeInUp" data-wow-duration="1500ms">
                At Fion Exim, we're more than just suppliers of premium quartz; we strive to be your
                trusted partner in bringing your vision for beautiful and resilient spaces to life.
                Since our establishment in 2021, founder Mr. Anand Panchal has instilled a
                commitment to integrity, quality, and personalized service at the core of our
                operations.
              </p>
              <p class="about-three__text wow fadeInUp" data-wow-duration="1500ms">
                We understand that choosing the perfect quartz surface is a significant decision,
                and we're here to guide you every step of the way with expert advice, exceptional
                products, and a dedication to ensuring your complete satisfaction. With Fion Exim,
                you can be confident you're collaborating with a team that values your trust and is
                dedicated to delivering surfaces that perfectly blend enduring style with lasting
                performance.
              </p>
              <!-- /.about-three__text -->

              <div class="about-three__button wow fadeInUp" data-wow-duration="1500ms">
                <a href="about.html" class="floens-btn about-three__btn">
                  <span>more about us</span>
                  <i class="icon-right-arrow"></i> </a
                ><!-- /.floens-btn about-three__btn -->
              </div>
              <!-- /.about-three__button -->
            </div>
            <!-- /.about-three__content -->
          </div>
          <!-- /.col-lg-6 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
      <img src="/images/shapes/about-shape-3-1.png" alt="shapes" class="about-three__shape-image" />
    </section>
    <!-- /.about-three section-space -->
    <!-- about end -->

    <!-- projects start -->
    <section class="projects-three" id="projects">
      <div
        class="projects-three__bg floens-jarallax"
        data-jarallax
        data-speed="0.3"
        style="background-image: url(/images/backgrounds/projects-bg-3.jpg)"
      ></div>
      <!-- /.projects-three__bg -->
      <div class="container">
        <div class="projects-three__top">
          <div class="row gutter-y-50 align-items-center">
            <div class="col-lg-8 col-md-10">
              <div class="sec-title @@extraClassName">
                <h6 class="sec-title__tagline">collections</h6>
                <!-- /.sec-title__tagline -->

                <h3 class="sec-title__title">
                  A Spectrum of Style: <br />
                  The Collections
                </h3>
                <!-- /.sec-title__title -->
              </div>
              <!-- /.sec-title -->
            </div>
            <!-- /.col-lg-8 -->
            <div class="col-lg-4">
              <div class="projects-three__top__button">
                <a href="work.html" class="floens-btn floens-btn--border">
                  <span>View All</span>
                  <i class="icon-right-arrow"></i> </a
                ><!-- /.floens-btn floens-btn--border -->
              </div>
              <!-- /.projects-three__top__button -->
            </div>
            <!-- /.col-lg-4 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.projects-three__top -->
        <div class="projects-three__grid">
          <div class="projects-three__card projects-three__card--one">
            <div
              class="projects-three__card__bg"
              style="background-image: url(/images/works/project-3-1-1.png)"
            ></div>
            <!-- /.projects-three__card__bg -->
            <div class="projects-three__card__content">
              <div class="projects-three__card__top">
                <h3 class="projects-three__card__tagline">Green Sparkle</h3>
                <!-- /.projects-three__card__tagline -->
              </div>
              <!-- /.projects-three__card__top -->
              <h4 class="projects-three__card__title">
                <a href="work-details.html">Green Sparkle</a>
              </h4>
              <!-- /.projects-three__card__title -->
            </div>
            <!-- /.projects-three__card__content -->
          </div>
          <!-- /.projects-three__card -->
          <div class="projects-three__card projects-three__card--two">
            <div
              class="projects-three__card__bg"
              style="background-image: url(/images/works/project-3-2-2.png)"
            ></div>
            <!-- /.projects-three__card__bg -->
            <div class="projects-three__card__content">
              <div class="projects-three__card__top">
                <h3 class="projects-three__card__tagline">Grey Sparkle</h3>
                <!-- /.projects-three__card__tagline -->
              </div>
              <!-- /.projects-three__card__top -->
              <h4 class="projects-three__card__title">
                <a href="work-details.html">Grey Sparkle</a>
              </h4>
              <!-- /.projects-three__card__title -->
            </div>
            <!-- /.projects-three__card__content -->
          </div>
          <!-- /.projects-three__card -->
          <div class="projects-three__card projects-three__card--three">
            <div
              class="projects-three__card__bg"
              style="background-image: url(/images/works/project-3-3-1.png)"
            ></div>
            <!-- /.projects-three__card__bg -->
            <div class="projects-three__card__content">
              <div class="projects-three__card__top">
                <h3 class="projects-three__card__tagline">Calcutta</h3>
                <!-- /.projects-three__card__tagline -->
              </div>
              <!-- /.projects-three__card__top -->
              <h4 class="projects-three__card__title">
                <a href="work-details.html">Calcutta</a>
              </h4>
              <!-- /.projects-three__card__title -->
            </div>
            <!-- /.projects-three__card__content -->
          </div>
          <!-- /.projects-three__card -->
          <div class="projects-three__card projects-three__card--four">
            <div
              class="projects-three__card__bg"
              style="background-image: url(/images/works/project-3-4-1.png)"
            ></div>
            <!-- /.projects-three__card__bg -->
            <div class="projects-three__card__content">
              <div class="projects-three__card__top">
                <h3 class="projects-three__card__tagline">Carrara Black</h3>
                <!-- /.projects-three__card__tagline -->
              </div>
              <!-- /.projects-three__card__top -->
              <h4 class="projects-three__card__title">
                <a href="work-details.html">Carrara Black</a>
              </h4>
              <!-- /.projects-three__card__title -->
            </div>
            <!-- /.projects-three__card__content -->
          </div>
          <!-- /.projects-three__card -->
          <div class="projects-three__card projects-three__card--five">
            <div
              class="projects-three__card__bg"
              style="background-image: url(/images/works/project-3-5-1.png)"
            ></div>
            <!-- /.projects-three__card__bg -->
            <div class="projects-three__card__content">
              <div class="projects-three__card__top">
                <h3 class="projects-three__card__tagline">Brown Sparkle</h3>
                <!-- /.projects-three__card__tagline -->
              </div>
              <!-- /.projects-three__card__top -->
              <h4 class="projects-three__card__title">
                <a href="work-details.html">Brown Sparkle</a>
              </h4>
              <!-- /.projects-three__card__title -->
            </div>
            <!-- /.projects-three__card__content -->
          </div>
          <!-- /.projects-three__card -->
        </div>
        <!-- /.projects-three__grid -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.projects-three -->
    <!-- projects end -->

    <!-- testimonials start -->
    <section class="testimonials-three section-space">
      <div class="container">
        <div class="testimonials-three__wrapper">
          <div class="sec-title sec-title--center">
            <h6 class="sec-title__tagline">testimonial</h6>
            <!-- /.sec-title__tagline -->

            <h3 class="sec-title__title">
              What People are Talking <br />
              About Floens
            </h3>
            <!-- /.sec-title__title -->
          </div>
          <!-- /.sec-title -->

          <div
            class="testimonials-three__carousel floens-owl__carousel floens-owl__carousel--basic-nav owl-carousel owl-theme"
            data-owl-options='{
					"items": 1,
					"margin": 0,
					"loop": true,
					"smartSpeed": 700,
					"nav": true,
					"navText": ["<span class=\"icon-slide-left-arrow\"></span>","<span class=\"icon-slide-right-arrow\"></span>"],
					"dots": false,
					"autoplay": 600,
					"responsive": {
						"0": {
							"items": 1,
							"margin": 10
						},
						"576": {
							"items": 1,
							"margin": 10
						},
						"768": {
							"items": 1,
							"margin": 10
						},
						"992": {
							"items": 1,
							"margin": 10
						},
						"1200": {
							"items": 1,
							"margin": 10
						}
					}
				}'
          >
            <div class="item">
              <div class="testimonials-card-three">
                <div class="testimonials-card-three__left">
                  <div class="testimonials-card-three__image">
                    <img src="/images/testimonials/testimonials-3-1.jpg" alt="Michael G. Ware" />
                  </div>
                  <!-- /.testimonials-card-three__image -->
                  <div class="testimonials-card-three__quotes">
                    <svg
                      class="testimonials-card-three__quotes__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 145 106"
                      fill="none"
                    >
                      <path
                        d="M0 66.712H29.2013L9.73361 105.647H38.9349L58.4026 66.712V8.30945H0V66.712Z"
                        fill="#8A5133"
                      />
                      <path
                        d="M77.8696 8.30945V66.712H107.071L87.6032 105.647H116.805L136.272 66.712V8.30945H77.8696Z"
                        fill="#8A5133"
                      />
                      <path
                        d="M37.5109 57.9026H8.80957V0.5H66.2121V58.2845L46.9354 96.8374H18.8522L37.9581 58.6262L38.3199 57.9026H37.5109Z"
                        stroke="#C7844F"
                      />
                      <path
                        d="M115.381 57.9026H86.6797V0.5H144.082V58.2845L124.806 96.8374H96.7223L115.828 58.6262L116.19 57.9026H115.381Z"
                        stroke="#C7844F"
                      />
                    </svg>
                  </div>
                  <!-- /.testimonials-card-three__quotes -->
                </div>
                <!-- /.testimonials-card-three__left -->
                <div class="testimonials-card-three__right">
                  <div class="floens-ratings @@extraClassName">
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                  </div>
                  <!-- /.product-ratings -->
                  <p class="testimonials-card-three__text">
                    "I recently worked with
                    <a href="about.html" class="testimonials-card-three__text__highlight">Floens</a>
                    for my home renovation project, and I couldn't be happier with the results. From
                    the moment I walked into their showroom, I was impressed by the extensive
                    selection
                  </p>
                  <!-- /.testimonials-card-three__text -->
                  <div class="testimonials-card-three__info">
                    <h4 class="testimonials-card-three__name">Michael G. Ware</h4>
                    <!-- /.testimonials-card-three__name -->
                    <span class="testimonials-card-three__designation">managing director</span
                    ><!-- /.testimonials-card-three__designation -->
                  </div>
                  <!-- /.testimonials-card-three__info -->
                </div>
                <!-- /.testimonials-card-three__right -->
              </div>
              <!-- /.testimonials-card-three -->
            </div>
            <!-- /.item -->
            <div class="item">
              <div class="testimonials-card-three">
                <div class="testimonials-card-three__left">
                  <div class="testimonials-card-three__image">
                    <img
                      src="/images/testimonials/testimonials-3-2.jpg"
                      alt="Anthony B. Castillo"
                    />
                  </div>
                  <!-- /.testimonials-card-three__image -->
                  <div class="testimonials-card-three__quotes">
                    <svg
                      class="testimonials-card-three__quotes__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 145 106"
                      fill="none"
                    >
                      <path
                        d="M0 66.712H29.2013L9.73361 105.647H38.9349L58.4026 66.712V8.30945H0V66.712Z"
                        fill="#8A5133"
                      />
                      <path
                        d="M77.8696 8.30945V66.712H107.071L87.6032 105.647H116.805L136.272 66.712V8.30945H77.8696Z"
                        fill="#8A5133"
                      />
                      <path
                        d="M37.5109 57.9026H8.80957V0.5H66.2121V58.2845L46.9354 96.8374H18.8522L37.9581 58.6262L38.3199 57.9026H37.5109Z"
                        stroke="#C7844F"
                      />
                      <path
                        d="M115.381 57.9026H86.6797V0.5H144.082V58.2845L124.806 96.8374H96.7223L115.828 58.6262L116.19 57.9026H115.381Z"
                        stroke="#C7844F"
                      />
                    </svg>
                  </div>
                  <!-- /.testimonials-card-three__quotes -->
                </div>
                <!-- /.testimonials-card-three__left -->
                <div class="testimonials-card-three__right">
                  <div class="floens-ratings @@extraClassName">
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                  </div>
                  <!-- /.product-ratings -->
                  <p class="testimonials-card-three__text">
                    "I recently worked with
                    <a href="about.html" class="testimonials-card-three__text__highlight">Floens</a>
                    for my home renovation project, and I couldn't be happier with the results. From
                    the moment I walked into their showroom, I was impressed by the extensive
                    selection
                  </p>
                  <!-- /.testimonials-card-three__text -->
                  <div class="testimonials-card-three__info">
                    <h4 class="testimonials-card-three__name">Anthony B. Castillo</h4>
                    <!-- /.testimonials-card-three__name -->
                    <span class="testimonials-card-three__designation">managing director</span
                    ><!-- /.testimonials-card-three__designation -->
                  </div>
                  <!-- /.testimonials-card-three__info -->
                </div>
                <!-- /.testimonials-card-three__right -->
              </div>
              <!-- /.testimonials-card-three -->
            </div>
            <!-- /.item -->
          </div>
          <!-- /.testimonials-three__carousel -->
        </div>
        <!-- /.testimonials-three__wrapper -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.testimonials-three section-space -->
    <!-- testimonials end -->

    <footer class="main-footer">
      <div
        class="main-footer__bg"
        style="background-image: url(/images/shapes/footer-bg-1-1.png)"
      ></div>
      <!-- /.main-footer__bg -->
      <div class="main-footer__top">
        <div class="container">
          <div class="row">
            <div
              class="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div class="footer-widget footer-widget--about">
                <a href="index.html" class="footer-widget__logo">
                  <img src="/images/logo-fion.png" width="123" alt="Floens HTML Template" />
                </a>
                <p class="footer-widget__about-text">
                  Discover quality quartz for inspired living with Fion Exim, where every surface is
                  designed for life.
                </p>
                <!-- /.footer-widget__about-text -->
              </div>
              <!-- /.footer-widget -->
            </div>
            <!-- /.col-xl-4 col-lg-6 -->
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div class="footer-widget footer-widget--links footer-widget--links-one">
                <div class="footer-widget__top">
                  <div class="footer-widget__title-box"></div>
                  <!-- /.footer-widget__title-box -->
                  <h2 class="footer-widget__title">Explore</h2>
                  <!-- /.footer-widget__title -->
                </div>
                <!-- /.footer-widget__top -->
                <ul class="list-unstyled footer-widget__links">
                  <li><a href="about.html">Home</a></li>
                  <li><a href="services.html">About Us</a></li>
                  <li><a href="team.html">Our Collections</a></li>

                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
                <!-- /.list-unstyled footer-widget__links -->
              </div>
              <!-- /.footer-widget -->
            </div>
            <!-- /.col-xl-2 col-lg-3 col-md-3 col-sm-6 -->
            <div
              class="col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div class="footer-widget footer-widget--links footer-widget--links-two">
                <div class="footer-widget__top">
                  <div class="footer-widget__title-box"></div>
                  <!-- /.footer-widget__title-box -->
                  <h2 class="footer-widget__title">Services</h2>
                  <!-- /.footer-widget__title -->
                </div>
                <!-- /.footer-widget__top -->
                <ul class="list-unstyled footer-widget__links">
                  <li><a href="services.html">flooring service</a></li>
                  <li><a href="services.html">wooden Services</a></li>
                  <li><a href="services.html">corporate tiles</a></li>
                  <li><a href="services.html">carpet setup</a></li>
                  <li><a href="services.html">tiles setup</a></li>
                </ul>
                <!-- /.list-unstyled footer-widget__links -->
              </div>
              <!-- /.footer-widget -->
            </div>
            <!-- /.col-xl-3 col-lg-3 col-md-4 col-sm-6 -->
            <div
              class="col-xl-3 col-lg-6 col-md-5 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div class="footer-widget footer-widget--contact">
                <div class="footer-widget__top">
                  <div class="footer-widget__title-box"></div>
                  <!-- /.footer-widget__title-box -->
                  <h2 class="footer-widget__title">Get inTouch</h2>
                  <!-- /.footer-widget__title -->
                </div>
                <!-- /.footer-widget__top -->
                <ul class="list-unstyled footer-widget__info">
                  <li>
                    <a href="https://www.google.com/maps"
                      >304- Anand Plaza, Anand Bunglow Chowk, Mavdi Main Road, Rajkot - 360004</a
                    >
                  </li>
                  <li>
                    <span class="icon-paper-plane"></span>
                    <a href="mailto:info@fionexim.com">info@fionexim.com</a>
                  </li>
                  <li>
                    <span class="icon-phone-call"></span>
                    <a href="tel:+919879791993">+91 987 979 1993</a>
                  </li>
                </ul>
                <!-- /.list-unstyled -->
              </div>
              <!-- /.footer-widget -->
            </div>
            <!-- /.col-xl-3 col-lg-6 col-md-5 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.main-footer__top -->
      <div class="main-footer__bottom">
        <div class="container">
          <div class="main-footer__bottom__inner">
            <div class="row gutter-y-30 align-items-center">
              <div class="col-md-5 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                <div class="main-footer__social floens-social">
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
                <!-- /.main-footer__social -->
              </div>
              <!-- /.col-md-5 -->
              <div class="col-md-7 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                <div class="main-footer__bottom__copyright">
                  <p class="main-footer__copyright">
                    &copy; Copyright <span class="dynamic-year"></span> by Fion Exim. Created By:
                    <a href="https://uncoredigital.com/" target="_blank">UNCORE DIGITAL</a>
                  </p>
                </div>
                <!-- /.main-footer__bottom__copyright -->
              </div>
              <!-- /.col-md-7 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.main-footer__inner -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.main-footer__bottom -->
    </footer>
    <!-- /.main-footer -->
  </div>
  <!-- /.page-wrapper -->

  <div class="mobile-nav__wrapper">
    <div class="mobile-nav__overlay mobile-nav__toggler"></div>
    <!-- /.mobile-nav__overlay -->
    <div class="mobile-nav__content">
      <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

      <div class="logo-box">
        <a href="index.html" aria-label="logo image"
          ><img src="/images/logo-light.png" width="155" alt="logo-light"
        /></a>
      </div>
      <!-- /.logo-box -->
      <div class="mobile-nav__container"></div>
      <!-- /.mobile-nav__container -->

      <ul class="mobile-nav__contact list-unstyled">
        <li>
          <i class="fa fa-envelope"></i>
          <a href="mailto:needhelp@floens.com">needhelp@floens.com</a>
        </li>
        <li>
          <i class="fa fa-phone-alt"></i>
          <a href="tel:+9156980036420">+91 5698 0036 420</a>
        </li>
      </ul>
      <!-- /.mobile-nav__contact -->
      <div class="mobile-nav__social">
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
      <!-- /.mobile-nav__social -->
    </div>
    <!-- /.mobile-nav__content -->
  </div>
  <!-- /.mobile-nav__wrapper -->

  <aside class="sidebar-one">
    <div class="sidebar-one__overlay sidebar-btn__toggler"></div>
    <!-- /.siderbar-ovarlay -->
    <div class="sidebar-one__content">
      <span class="sidebar-one__close sidebar-btn__toggler"><i class="fa fa-times"></i></span>
      <div class="sidebar-one__logo sidebar-one__item">
        <a href="index.html" aria-label="logo image"
          ><img src="/images/logo-light.png" width="123" alt="logo-dark"
        /></a>
      </div>
      <!-- /.sidebar-one__logo -->
      <div class="sidebar-one__about sidebar-one__item">
        <p class="sidebar-one__about__text">
          Tiles company, also known as a tile manufacturer or distributor, specializes in the
          production and distri
        </p>
      </div>
      <!-- /.sidebar-one__about -->
      <div class="sidebar-one__info sidebar-one__item">
        <h4 class="sidebar-one__title">Information</h4>
        <ul class="sidebar-one__info__list">
          <li>
            <span class="icon-location-2"></span>
            <address>85 Ketch Harbour Road Bensal PA 19020</address>
          </li>
          <li>
            <span class="icon-paper-plane"></span>
            <a href="mailto:needhelp@company.com">needhelp@company.com</a>
          </li>
          <li>
            <span class="icon-phone-call"></span>
            <a href="tel:+9156980036420">+91 5698 0036 420</a>
          </li>
        </ul>
        <!-- /.sidebar-one__info__list -->
      </div>
      <!-- /.sidebar-one__info -->
      <div class="sidebar-one__social floens-social sidebar-one__item">
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
      <!-- /sidebar-one__social -->
      <div class="sidebar-one__newsletter sidebar-one__item">
        <label class="sidebar-one__title" for="sidebar-email">Newsletter Subscribe</label>
        <form
          action="#"
          class="sidebar-one__newsletter__inner mc-form"
          data-url="MAILCHIMP_FORM_URL"
        >
          <input
            type="email"
            name="sidebar-email"
            id="sidebar-email"
            class="sidebar-one__newsletter__input"
            placeholder="Email Address"
          />
          <button type="submit" class="sidebar-one__newsletter__btn">
            <span class="icon-email" aria-hidden="true"></span>
          </button>
        </form>
        <div class="mc-form__response"></div>
        <!-- /.mc-form__response -->
      </div>
      <!-- /.sidebar-one__form -->
    </div>
    <!-- /.sidebar__content -->
  </aside>
  <!-- /.sidebar-one -->

  <a href="#" data-target="html" class="scroll-to-target scroll-to-top">
    <span class="scroll-to-top__text">back top</span>
    <span class="scroll-to-top__wrapper"><span class="scroll-to-top__inner"></span></span>
  </a>
</template>
