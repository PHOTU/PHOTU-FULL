<!DOCTYPE html>
<html lang="en">
        <title>PHOTU - Contact Us</title>
        <meta name="description" content="Get in touch with the team with ease!">

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/loadinstyles.php' ); ?>

<body class="">

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/header.php' ); ?>

        <div id="main-content" class="mb-20">

        <div class="wrapper">

          <img src="/images/contact/contact.png">

            <div class="row">

                <div class="kopa-main-col">
                    <div class="bg-white">
                        <h3 class="widget-title style3">Contact The Team</h3>
                        <div class="pd-20">
                            <p><i>Your email address will not be published.<br>Required fields are marked *</i></p>
                            <div class="contact-box">
                                <form class="contact-form clearfix" action="/php/processForm.php" method="post" novalidate="novalidate">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4 col-xs-4">
                                            <p class="input-label">Your Name (required)</p>
                                            <p class="input-block">
                                                <input type="text" value="" onfocus="if(this.value=='')this.value='';" onblur="if(this.value=='')this.value='';" id="contact_name" name="name" class="valid">
                                            </p>
                                        </div>
                                        <!-- col-md-4 -->

                                        <div class="col-md-4 col-sm-4 col-xs-4">
                                            <p class="input-label">Your Email (required)</p>
                                            <p class="input-block">
                                                <input type="text" value="" onfocus="if(this.value=='')this.value='';" onblur="if(this.value=='')this.value='';" id="contact_email" name="email" class="valid">
                                            </p>
                                        </div>
                                        <!-- col-md-4 -->

                                        <div class="col-md-4 col-sm-4 col-xs-4">
                                            <p class="input-label">Subject</p>
                                            <p class="input-block">
                                                <input type="text" value="" onfocus="if(this.value=='')this.value='';" onblur="if(this.value=='')this.value='';" id="contact_ws-link" name="website" class="invalid">
                                            </p>
                                        </div>
                                        <!-- col-md-4 -->

                                    </div>
                                    <!-- row -->
                                    <p class="textarea-block">
                                        <textarea name="message" id="contact_message" onfocus="if(this.value=='Your comment *')this.value='';" onblur="if(this.value=='')this.value='Your comment *';" cols="88" rows="8"></textarea>
                                    </p>
                                    <p class="contact-button clearfix">
                                        <span><input type="submit" value="Send Message" id="submit-contact"></span>
                                    </p>
                                </form>
                                <div id="response"></div>
                            </div>
                            <!-- contact-box -->
                        </div>
                    </div>
                </div>
                <!-- kopa-main-col -->


                <!-- SHOW THE TOP-MOST SOCIAL STATS? -->
                <?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/categorysocialstats.php' ); ?>

            </div>
            <!-- row -->

        </div>
        <!-- wrapper -->

    </div>
    <!-- main-content -->
</div>


<?php include( $_SERVER['DOCUMENT_ROOT'] . '/php/footer.php' ); ?>

</body>

</html>