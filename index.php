<!DOCTYPE html>
<html lang="en">
        <title>PHOTU</title>
        <meta name="description" content="Welcome to PHOTU - Entries and updates submitted by you.">

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/loadinstyles.php' ); ?>

<body class="kopa-home-page">

    <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/header.php' ); ?>

    <div id="main-content" class="mb-20">

        <div class="wrapper">

            <div class="widget-area-5">

                <div class="widget kopa-masonry-widget" align="centre">
                    <ul class="">


                        <li class="1">
                            <article class="">
                                <div class="">
                                    <a href="/categories/music/"><img src="/images/index/top-most/discover.jpg" alt=""></a>
                                </div>
                            </article>
                        </li>

                    </ul>
                </div>

            </div>


            <!-- Flexible Entries Area -->
                        <div class="widget-area-8">

                            <div class="widget kopa-categories-widget">
                                <h3 class="widget-title style3">Featured Entries</span></h3>
                                <div class="pd-20">
                                    <div class="owl-carousel owl-carousel-1">


            <!-- Add content here -->

            <a href="/categories/music/discover/17-01-2016"><img src="/images/categories/music/discover/17-01-2016/indexlisting.jpg" alt=""></a>

            <a href="/categories/technology/matty-gale-youtube/"><img src="/images/categories/technology/matty-gale-youtube.png" alt=""></a>

            <!-- End content here -->


                                    </div>
                                    <!-- owl-carousel-1 -->
                                </div>
                            </div>
                            <!-- widget -->

            <!-- End Flexible -->



            <div class="widget-area-8">

                <div class="widget kopa-categories-widget">
                    <h3 class="widget-title style3">Browse our categories</h3>
                    <div class="pd-20">
                        <div class="owl-carousel owl-carousel-1">


<!-- LOAD IN CATEGORIES FROM /PHP/INDEX-CATEGORIES -->

                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/index-categories/music.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/index-categories/technology.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/index-categories/reviews.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/index-categories/general.php' ); ?>


<!-- END CATEGORIES FROM /PHP/INDEX-CATEGORIES -->


                        </div>
                        <!-- owl-carousel-1 -->
                    </div>
                </div>
                <!-- widget -->





            </div>

            </div>
            <!-- row -->


                <!-- kopa-main-col -->


                </div>
                <!-- sidebar -->

            </div>
            <!-- row -->

        </div>
        <!-- wrapper -->

    </div>
    <!-- main-content -->

    <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/footer.php' ); ?>

</body>

</html>
