   // conditionizr.com
    document.addEventListener("DOMContentLoaded", function() {
        /*
            #1
            .add()

            add a test (returns true or false)
            List of detects: https://github.com/conditionizr/conditionizr/tree/master/detects
        */
        conditionizr.add('chrome', function () {
          return window.chrome && /google/i.test(navigator.vendor);
        });
         /* 
            #2)
            .config()

            conditionally load a script, stylesheet, and add a class to <html> tag 'chrome'
        */
        conditionizr.config({
            // script will load from this folder
            assets: '<?php echo get_template_directory_uri(); ?>/',
            tests: {
                'chrome': ['script', 'style', 'class']
            }
        });
        /*
            #3)
            Object Tests
            Execute javascript if condition is true
        */
        if (conditionizr.safari) {
            // code just for safari
        } else if (conditionizr.chrome) {
            // code just for chrome
            console.log("Chrome")
        }
        else if(conditionizr.firefox){
            console.log("firefox")
        }
 
        /*
            #4)
            .polyfill() || .load()
        */
        conditionizr.polyfill('//html5shiv.googlecode.com/svn/trunk/IE.js', ['ie6', 'ie7', 'ie8']);
    });