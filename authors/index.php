<!DOCTYPE html>
<html lang="en">
        <title>PHOTU - Authors</title>
        <meta name="description" content="View our Authors!">

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/loadinstyles.php' ); ?>

<body class="">

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/header.php' ); ?>

    <div id="main-content" class="mb-20">

        <div class="wrapper">

          <img src="/images/authors/authors.png">

            <div class="row">

                <div class="kopa-main-col">

                    <div class="widget kopa-masonry-6-widget">
                        <ul class="kopa-masonry-wrap">


                    <!-- ADD ENTRIES HERE -->
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/authors/adam-burdass.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/authors/matty-gale.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/authors/adam-burdass.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/authors/adam-burdass.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/authors/adam-burdass.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/authors/adam-burdass.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/authors/adam-burdass.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/authors/adam-burdass.php' ); ?>
                            <?php include( $_SERVER['DOCUMENT_ROOT'] . '/authors/adam-burdass.php' ); ?>

                    <!-- END OF ENTRIES LIST -->


                        </ul>
                    </div>

                </div>
                <!-- kopa-main-col -->


                <!-- SHOW THE TOP-MOST SOCIAL STATS? -->
                <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/categorysocialstats.php' ); ?>


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
