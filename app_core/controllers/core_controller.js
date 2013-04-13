$.Controller('App.Core', {
    
}, {
    init: function() {
        $('body > div').html( $.View('./app_core/views/core.ejs') );   
    }
    
    'div.login button click': function( el, ev ) {
        console.log('@todo handle login');
    }
})