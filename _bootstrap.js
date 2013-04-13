steal(
    'jquery/jquery.js'
).then(
    'public/public.js',
    'app_core/app_core.js',
    'app_private/app_private.js',
    'app_public/app_public.js'
).then(function() {
    new App.Core( $('body').children('div') );
})