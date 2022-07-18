(function($) {
  Drupal.behaviors.cocoonPreprocess = {
    attach: function(context, settings) {
      $(document).ready(function() {
        /*        if ($("#ccn-darker-blue").length) {
                  $("body").addClass("darker-blue");
                }
                $(".subscribe-wrapper form").addClass("group");
                $(".subscribe-wrapper form .form-item").each(function() {
                  $(this).append("<span class='highlight'></span><span class='bar'></span>");
                  $(this).find("label").insertAfter($(this).find('.bar'));
                });
                $(".subscribe-wrapper form #edit-subscribe").addClass("dream-btn");
                $(".subscribe-wrapper form #edit-subscribe").attr("value", "Go");
                $(".contact_form .webform-submission-form .row > .form-item:nth-child(1)").wrap("<div class='col-12 col-md-6'><div class='group wow fadeInUp' data-wow-delay='0.2s'></div></div>");
                $(".contact_form .webform-submission-form .row > .form-item:nth-child(2)").wrap("<div class='col-12 col-md-6'><div class='group wow fadeInUp' data-wow-delay='0.3s'></div></div>");
                $(".contact_form .webform-submission-form .row > .form-item:nth-child(3)").wrap("<div class='col-12'><div class='group wow fadeInUp' data-wow-delay='0.4s'></div></div>");
                $(".contact_form .webform-submission-form .row > .form-item:nth-child(4)").wrap("<div class='col-12'><div class='group wow fadeInUp' data-wow-delay='0.5s'></div></div>");
                $(".contact_form .webform-submission-form .row > .form-actions").wrap("<div class='col-12 text-center wow fadeInUp' data-wow-delay='0.6s'></div>");
                $(".contact_form .webform-submission-form .button").addClass("btn dream-btn").removeClass("button");
                $(".contact_form .webform-submission-form .form-item").each(function() {
                  $(this).append("<span class='highlight'></span><span class='bar'></span>");
                  $(this).find("label").insertAfter($(this).find('.bar'));
                });
                $(".contact_form .webform-submission-form textarea").unwrap();
                $('#scrollUp').addClass('ccn--lb-tagged'); */
        $(".tab-content > .tab-pane:first-child, ul.nav > li.nav-item:first-child > a.nav-link").addClass("active show");
        $(".tab-content > .tab-pane").each(function() {
          var $tabicon = $(this).find(".ccn--tab-icon");
          var $tabclass = $(this).attr("id");
          $(this).find(".ccn--tab-icon").appendTo($(".nav-item." + $tabclass).find(".item-icon"));
        });
        if ($(".ccn--identify--home-page-7").length) {
          $("body").addClass("home-page-7");
        }
        if ($(".ccn--identify--home-page-10").length) {
          $("body").addClass("home-page-10");
        }
        if ($(".ccn--identify--home-page-3").length) {
          $("body").addClass("home-page-3");
        }
        $(".ccn--identify--work-process-col-1 > .process-item:nth-child(4),.ccn--identify--work-process-col-1 > .process-item:nth-child(3)").appendTo(".ccn--identify--work-process-col-2");
        $(".block-simplenews").each(function(){
          $(this).find(".form-email").attr("placeholder", "Your Email Address");
          $(this).find("label").remove();
          $(this).find("button").text("Get Started").addClass("form-item-btn bg-default-blue").removeClass("custom-btn mb-30").appendTo($(this).find("#edit-mail-wrapper .form-item"));
        });
        $(".first-item .block-simplenews, .sass-banner-1 .block-simplenews, .sass-banner-2 .block-simplenews").each(function(){
          $(this).find("button").addClass("submit-btn bg-default-blue").removeClass("custom-btn mb-30").appendTo($(this).find("#edit-mail-wrapper .form-item"));
        });
        $("#sidebar-menu #ccn-nav").addClass("menu-list mb-60 list-unstyled components clearfix");
        $("#sidebar-menu #ccn-nav").find(".clearfix.sub-menu").addClass("sub-menu collapse list-unstyled");
        $("#sidebar-menu #ccn-nav .menu-item-has-child").each(function(index){
          $(this).find("> a").attr("href", "#"+index).attr("data-toggle", "collapse").attr("aria-expanded", "false");
          $(this).find("> .sub-menu").attr("id", index);
        });
        $(".form-textarea-wrapper").addClass("form-textarea");
      });
    }
  };
}(jQuery));
