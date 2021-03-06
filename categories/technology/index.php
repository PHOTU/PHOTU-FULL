<!DOCTYPE html>
<html lang="en">
        <title>PHOTU - Technology</title>
        <meta name="description" content="Browse our Technology Entries">

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/loadinstyles.php' ); ?>

<body class="">

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/header.php' ); ?>


    <div id="main-content" class="mb-20">

        <div class="wrapper">

          <img class="category-cover" src="/images/categories/technology/technology.jpg">

            <div class="row">

                <div class="kopa-main-col">

                    <div class="widget kopa-masonry-6-widget">
                        <ul class="kopa-masonry-wrap">


                    <!-- ADD ENTRIES HERE -->
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/categories/technology/entry-list/dev-blog/22-01-2016.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/categories/technology/entry-list/developerproblems.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/categories/technology/entry-list/matty-gale-youtube.php' ); ?>

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
                <!-- END PAGINATION -->

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
