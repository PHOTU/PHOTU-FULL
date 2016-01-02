<!DOCTYPE html>
<html lang="en">
        <title>PHOTU - Turn Up The Music</title>
        <meta name="description" content="Turn up the music with our latest favourites!">

    <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/loadinstyles.php' ); ?>

<body class="kopa-home-page">

    <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/header.php' ); ?>

<!-- ADD IN THE BREADCRUMB LINKS -->

<div class="kopa-breadcrumb">
        <div class="wrapper clearfix">
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                <a itemprop="url" href="/">
                    <span itemprop="title">Home</span>
                </a>
            </span>
            &nbsp;|&nbsp;
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                <a itemprop="url" href="/categories/music">
                    <span itemprop="title">Music</span>
                </a>
            </span>
            &nbsp;|&nbsp;
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                <a itemprop="url" class="current-page">
                    <span itemprop="title">Turn Up The Music</span>
                </a>
            </span>
        </div>
    </div>

<!-- END THE BREADCRUMB LINKS -->

    <div id="main-content" class="mb-20">

        <div class="wrapper">

            <div class="row">
            
                <div class="col-md-12 col-sm-12 col-xs-12">

                    <div class="widget">
                        <div class="pd-20 kopa-entry-post">
                            <article class="entry-item">
                                <p class="entry-categories style-s"><a href="/categories/music">music</a></p>
                                <h4 class="entry-title">Turn Up The Music - Here's our latest favourites!</h4>
                                <div class="entry-meta mb-20">
                                    <a href="#">
                                    <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/entries/author-adam.php' ); ?> 
                                    </a>
                                    &nbsp;|&nbsp;
                                    <span class="entry-date"><i class="fa fa-clock-o"></i>Jan 2, 2016</span>
                                </div>
                                <div class="entry-thumb">
                                    <img src="/images/categories/music/turn-up-the-music/turn-up-the-music.png" alt="">
                                </div>  



                                <!-- Add Content -->

                                <p>Sigh, although we all wish it was summer time it isn't unfortunately, so let's make do with some tunes to shrug off those winter blues.</p>

                        <div class="col-md-12 col-sm-12 col-xs-12">

                            <h6 class="txt-up">Pick through our selections..</h6>
                            <div class="kopa-tab style1">
                                <ul class="nav nav-tabs">
                                    <li class="active"><a href="#1" data-toggle="tab">Hip Hop</a></li>
                                    <li><a href="#e-2" data-toggle="tab">Screamo</a></li>
                                    <li><a href="#e-3" data-toggle="tab">Electronic</a></li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="2">
                                        <p>
                                        <ul class="kopa-e-list list-order">
                                            <li><i class="order-num">01</i>.</li>
                                            <li><i class="order-num">02</i>.</li>
                                            <li><i class="order-num">03</i>.</li>
                                            <li><i class="order-num">04</i>.</li>
                                            <li><i class="order-num">05</i>.</li>
                                        </ul>
                                            .</p>     
                                    </div>
                                    <div class="tab-pane" id="2">
                                        <p>.</p>
                                    </div>
                                    <div class="tab-pane" id="3">
                                        <p>.</p>     
                                    </div>
                                </div>
                            </div>

                        </div>

                                <!-- End Content -->



                            </article> 
                            <!-- single-other-post -->




<!-- ADD COMMENTS -->

                        <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/comments.php' ); ?> 

<!-- END COMMENTS -->



<!-- AUTHOR INFO -->
                     
                       <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/authors/adam-burdass.php' ); ?>     

<!-- END AUTHOR INFO -->






<!-- ADD IN REVELANT ARTICLES -->

                    <div class="widget kopa-article-list-widget article-list-23">
                        <h3 class="widget-title style3"> related <span>entries</span></h3>
                        <div class="pd-20">
                            <ul class="clearfix">
                                
                                <!-- BEGIN TO LIST THEM HERE -->

                                <?php include( $_SERVER['DOCUMENT_ROOT'] . '' ); ?>


                                <!-- END THE LIST HERE -->
                                
                            </ul>
                        </div>
                    </div>
                    <!-- widget --> 

<!-- END RELEVANT ARTICLES -->


                    </div>
                    <!-- widget -->
            
                </div>
                <!-- kopa-main-col -->

            </div>
            <!-- row --> 
        
        </div>
        <!-- wrapper -->

    </div>
    <!-- main-content -->

    <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/footer.php' ); ?>
    
</body>

</html>
