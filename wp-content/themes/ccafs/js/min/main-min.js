jQuery(document).ready(function(){jQuery(".nav-trigger").click(function(){jQuery("#nav-search").fadeToggle(100,"linear")}),jQuery(".show-hide-trigger").click(function(){jQuery(".show-hide-wrapper").fadeToggle(300,function(){jQuery(".show-hide-trigger").text(function(e,r){return"Close"===r?"Show More":"Close"})})}),jQuery(".mm-caret").click(function(){jQuery(this).next(".mm-subnav").fadeToggle(200),jQuery(this).toggleClass("open")})});