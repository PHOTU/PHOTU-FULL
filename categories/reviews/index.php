<!DOCTYPE html>
<html lang="en">
        <title>PHOTU - Reviews</title>
        <meta name="description" content="Browse our Reviews">

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/loadinstyles.php' ); ?>

<body class="">

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/header.php' ); ?>

    <div id="main-content" class="mb-20">

        <div class="wrapper">

          <img src="/images/categories/reviews/reviews.png">

            <div class="row">

                <div class="kopa-main-col">

                    <div class="widget kopa-masonry-6-widget">
                        <ul class="kopa-masonry-wrap">


                    <!-- ADD ENTRIES HERE -->
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/' ); ?>

                    <!-- END OF ENTRIES LIST -->


                    <!-- ADD PAGINATION IF NEEDED -->
                        </ul>
                        <!--<div class="kopa-pagination">
                            <ul class="clearfix">
                                <li><span class="current">1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><span>...</span></li>
                                <li><a href="#">11</a></li>
                                <li><a href="#" class="next fa fa-chevron-right"></a></li>
                            </ul>
                        </div>-->
                    </div>
                    <!-- widget -->

                </div>
                <!-- kopa-main-col -->


                <!-- SHOW THE TOP-MOST SOCIAL STATS? -->
                <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/categorysocialstats.php' ); ?>


                <!-- SUBMIT AN ENTRY SHOW? -->
                <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/entries/submit-entry-category.php' ); ?>

                <!-- SHOW ANY EDITORS PICKS? -->
                <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/categories/editor-picks/reviews.php' ); ?>


                </div>
                <!-- kopa-col-2 -->

            </div>
            <!-- row -->

        </div>
        <!-- wrapper -->

    </div>
    <!-- main-content -->


<?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/footer.php' ); ?>

</body>

</html>
