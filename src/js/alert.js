$('.alert').html('Saved!').addClass('alert-info').show().delay(1500).fadeOut();

var prompt = function (message, style, time)
{
    style = (style === undefined) ? 'alert-info' : style;
    time = (time === undefined) ? 1200 : time;
    $('<div>')
        .appendTo('body')
        .addClass('alert ' + style)
        .html(message)
        .show()
        .delay(time)
        .fadeOut();
};


// // success
// var success_prompt = function(message, time)
// {
//     prompt(message, 'alert-success', time);
// };


// // fail
// var fail_prompt = function(message, time)
// {
//     prompt(message, 'alert-danger', time);
// };

// reminder
// var warning_prompt = function(message, time)
// {
//     prompt(message, 'alert-warning', time);
// };

var info_prompt = function(message, time)
{
    prompt(message, 'alert-info', time);
};