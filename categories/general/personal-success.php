<!DOCTYPE html>
<html lang="en">
        <title>PHOTU - Personal Success</title>
        <meta name="description" content="How do you judge personal success?">

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
                <a itemprop="url" href="/categories/general">
                    <span itemprop="title">General</span>
                </a>
            </span>
            &nbsp;|&nbsp;
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                <a itemprop="url" class="current-page">
                    <span itemprop="title">Personal Success</span>
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
                                <p class="entry-categories style-s"><a href="/categories/general">General</a></p>
                                <h4 class="entry-title">How do you judge your own personal success and how it defines you?</h4>
                                <div class="entry-meta mb-20">
                                    <a href="#">
                                    <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/entries/author-adam.php' ); ?> 
                                    </a>
                                    &nbsp;|&nbsp;
                                    <span class="entry-date"><i class="fa fa-clock-o"></i>Jan 1, 2016</span>
                                </div>
                                <div class="entry-thumb">
                                    <img src="/images/categories/general/personal-success/personal-success.png" alt="">
                                </div> 


                                <h1>This is the sound of chasing dreams..</h1> 
                                <p>..</p>
                            

                        <p>
                            
                        </p>


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
