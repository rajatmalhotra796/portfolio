import '../../assets/core.scss'
import './app.scss';
import '../../assets/responsive.scss';
import '../../assets/variables.scss';
import * as $ from 'jquery';
window.$ = $;

var currentContentId = '';
    $('#slider_top').addClass("slide_top");
    $('#loader').css("display", "none");

// $(window).on('load', function(event) {
//     setTimeout(() => {
//         $('#slider_top').addClass("slide_top");
//     }, 0);
//     setTimeout(() => {
//         $('#loader').css("display", "none");
//     }, 0);
// });

$('.menu_block').on('click', function (event) {
    const clickedELID = event.currentTarget.id;
    showContentBlockByID(clickedELID);
});

// var i = 0;
// var images = ['images.jpeg', 'mac1.jpeg'];
// setInterval(() => {
//     if (i > images.length - 1) { i = 0; }
//     $('.home').css("background-image", `url(./img/${images[i]})`);
//     i++;
// }, 5000);

function showContentBlockByID(id) {
    currentContentId = id;
    const contentBlockEl = $(`#${id + '_content'}`);
    contentBlockEl.addClass('show');
    $('.menu_blocks').addClass('hide');
    $('#menu_tabs').addClass('show_menu_tabs');
    $('.name_block').addClass('straight');
    $(`#${id + '_link'}`).addClass('active');
}

$('#closeContent').on('click', function(event) {
    $(`#${currentContentId + '_content'}`).removeClass('show');
    $(`#${currentContentId + '_link'}`).removeClass('active');
    $('.menu_blocks').removeClass('hide');
    $('#menu_tabs').removeClass('show_menu_tabs');
    $('.name_block').removeClass('straight');
});

$('#about_link').on('click', function(event) {
    removeActiveFromLinks();
    changeContentBlock('about');
    $('#about_link').addClass('active');
});
$('#portfolio_link').on('click', function(event) {
    removeActiveFromLinks();
    changeContentBlock('portfolio');
    $('#portfolio_link').addClass('active');
});
$('#contact_link').on('click', function(event) {
    removeActiveFromLinks();
    changeContentBlock('contact');
    $('#contact_link').addClass('active');
});

function removeActiveFromLinks() {
    $('#about_link').removeClass('active');
    $('#portfolio_link').removeClass('active');
    $('#contact_link').removeClass('active');
}

function changeContentBlock(id) {
    $(`#${currentContentId + '_content'}`).removeClass('show');
    currentContentId = id;
    $(`#${currentContentId + '_content'}`).addClass('show');
}