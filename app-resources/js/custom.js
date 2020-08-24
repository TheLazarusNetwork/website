function currencyToggle(){
  $('.currency-toggle').on('change', function(){
    let dpe = $(this).data('price-element');
    dpe = $('.' + dpe);

    let is_checked = $(this).is(':checked');
    let period = $(this).data('period');

    let parentEle = $(this).parents('.container');

    let durationToggleEle = parentEle.find('.duration-toggle');
    let pricingCurrencyEle = parentEle.find('.pricing-currency');
    let pricingCostEle = parentEle.find('.pricing-cost');
    let pricingPeriodEle = parentEle.find('.pricing-period');

    dpe.each(function(){
      if(is_checked){
        pricingCurrencyEle.text(function(){
          return $(this).data('inr');
        });
        durationToggleEle.data('currency', 'inr');

        if('mo' == period){
          pricingCostEle.text(function(){
            return $(this).data('inr-mo');
          });
          pricingPeriodEle.text(function(){
            return $(this).data('mo');
          });
        } else {
          pricingCostEle.text(function(){
            return $(this).data('inr-yr');
          });
          pricingPeriodEle.text(function(){
            return $(this).data('yr');
          });
        }
      } else {
        pricingCurrencyEle.text(function(){
          return $(this).data('usd');
        });
        durationToggleEle.data('currency', 'usd');

        if('mo' == period){
          pricingCostEle.text(function(){
            return $(this).data('usd-mo');
          });
          pricingPeriodEle.text(function(){
            return $(this).data('mo');
          });
        } else {
          pricingCostEle.text(function(){
            return $(this).data('usd-yr');
          });
          pricingPeriodEle.text(function(){
            return $(this).data('yr');
          });
        }
      }
    });
  });
}

function durationToggle(){
  $('.duration-toggle').on('change', function(){
    let dpe = $(this).data('price-element');
    dpe = $('.' + dpe);

    let is_checked = $(this).is(':checked');
    let currency = $(this).data('currency');

    let parentEle = $(this).parents('.container');

    let currencyToggleEle = parentEle.find('.currency-toggle');
    let pricingCurrencyEle = parentEle.find('.pricing-currency');
    let pricingCostEle = parentEle.find('.pricing-cost');
    let pricingPeriodEle = parentEle.find('.pricing-period');

    dpe.each(function(){
      if(is_checked){
        pricingPeriodEle.text(function(){
          return $(this).data('yr');
        });
        currencyToggleEle.data('period', 'yr');

        if('usd' == currency){
          pricingCurrencyEle.text(function(){
            return $(this).data('usd');
          });
          pricingCostEle.text(function(){
            return $(this).data('usd-yr');
          });
        } else {
          pricingCurrencyEle.text(function(){
            return $(this).data('inr');
          });
          pricingCostEle.text(function(){
            return $(this).data('inr-yr');
          });
        }
      } else {
        pricingPeriodEle.text(function(){
          return $(this).data('mo');
        });
        currencyToggleEle.data('period', 'mo');

        if('usd' == currency){
          pricingCurrencyEle.text(function(){
            return $(this).data('usd');
          });
          pricingCostEle.text(function(){
            return $(this).data('usd-mo');
          });
        } else {
          pricingCurrencyEle.text(function(){
            return $(this).data('inr');
          });
          pricingCostEle.text(function(){
            return $(this).data('inr-mo');
          });
        }
      }
    });
  });
}


$(document).ready(function () {
  currencyToggle();
  durationToggle();

  'use strict';

  var locations = $('.location');
  var domainSlider = $('.pricing-2 .owl-carousel');
  var testimonialsSlider = $('#testimonials .owl-carousel');
  var videoModal = $(".about-player__icon");

  if (locations.length) {
    locations.tooltip({
      template: '<div class="tooltip tooltip-location" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
  }

  if (videoModal.length) {
    videoModal.modalVideo();
  }

  if (domainSlider.length) {
    domainSlider.owlCarousel({
      items: 4,
      margin: 15,
      autoplay: true,
      loop: true,
      dots: true,
      mouseDrag: false,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        992: {
          items: 4
        }
      }
    });
  }

  if (testimonialsSlider.length) {
    testimonialsSlider.owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      dots: false
    });
  }

  $('.testimonials-card__next-button').on('click', function () {
    testimonialsSlider.trigger('next.owl.carousel');
  });

  $('.testimonials-card__prev-button').on('click', function () {
    testimonialsSlider.trigger('prev.owl.carousel');
  });

  $('main .navbar li a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function (event) {
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: document.querySelector(this.hash).offsetTop - 72
        }, 1000);
      }
    }
  });

  var options = {
    layout: {
      padding: {
        top: 20
      }
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          color: "#edf0f2"
        },
        ticks: {
          beginAtZero: true,
          callback: function (value) {
            return value + '.00';
          }
        },
        afterFit: function (scaleInstance) {
          scaleInstance.width = 65; // sets the width to 65px
        }
      }]
    },
    events: false,
    tooltips: {
      enabled: false
    },
    hover: {
      animationDuration: 0
    },
    animation: {
      duration: 1,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;
        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.names[index];
            ctx.fillText(data, bar._model.x, bar._model.y - 5);
          });
        });
      }
    }
  };

  var options2 = {
    layout: {
      padding: {
        top: 20
      }
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          color: "#edf0f2"
        },
        ticks: {
          beginAtZero: true,
          callback: function (value) {
            return value + ' MB/s';
          }
        },
        afterFit: function (scaleInstance) {
          scaleInstance.width = 65; // sets the width to 65px;
        }
      }]
    },
    events: false,
    tooltips: {
      enabled: false
    },
    hover: {
      animationDuration: 0
    },
    animation: {
      duration: 1,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;
        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.names[index];
            ctx.fillText(data, bar._model.x, bar._model.y - 5);
          });
        });
      }
    }
  };

  var ctx = $("#myChart");

  if (ctx.length) {

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["768MB", "1GB", "C3 Large"],
        datasets: [{
          label: '# of Votes',
          data: [1500, 1250, 750],
          names: ['Austin', 'DataScience', 'AWS'],
          backgroundColor: [
            '#00b4ff',
            '#e6e9eb',
            '#e6e9eb'
          ]
        }]
      },
      options: options
    });
  }

  var ctx2 = $("#myChart2");

  if (ctx2.length) {

    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ["768MB", "1GB", "C3 Large"],
        datasets: [{
          label: '# of Votes',
          data: [300, 75, 25],
          names: ['Austin', 'DataScience', 'AWS'],
          backgroundColor: [
            '#00b4ff',
            '#e6e9eb',
            '#e6e9eb'
          ]
        }]
      },
      options: options
    });
  }

  var ctx3 = $("#myChart3");

  if (ctx3.length) {

    new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: ["768MB", "1GB", "C3 Large"],
        datasets: [{
          label: '# of Votes',
          data: ['450', '160', '100'],
          names: ['Austin', 'DataScience', 'AWS'],
          backgroundColor: [
            '#00b4ff',
            '#e6e9eb',
            '#e6e9eb'
          ]
        }]
      },
      options: options2
    });
  }
});

$(document).scroll(function () {

  var navbar = $('.navbar');
  var modal = $('#newsletterModal');

  if ($(document).scrollTop() >= 250) {
    navbar.addClass('top-fixed');
  } else {
    navbar.removeClass('top-fixed');
  }

  if ($(document).scrollTop() >= 1600) {

    if (!localStorage.getItem("done")) {
      setTimeout(function () {
        modal.modal('show');
      }, 1400);
    }
    localStorage.setItem("done", true);
  }

});

//form-submission
function send_message(event){  //ye parameter kyou liy fir? parameter delete kar do
  event.preventDefault(); // So that page will not reload ok // local host mai check karo  //function not coming yes ????

  var name = $('#name-field').val();  // Now we need to get the value, to get the value you don't need to know the
  var email = $('#email-field').val();  //email ka likho aur message ka field bhi
  var message = $('#message-field').val(); // now we will test that we are getting the values correctly

  // console.log(name + " " + email + " " + message); // no commas, in php we use . in JS we use + to concatenate string

  //  ye kaise hua muje samaj nahi aa rhah
  //  hum jo input field me value dalenge vo is variable me store hogi?
  //  yes, jab hum "send_message" function call karniangai toh
  //  1. send message function run hoga
  //   2. jquery input fields ka balue variable mai store kardega
  //   3. hum vriable ko log kardengai aur consloe maicheck karingai we are not connected - it doesnot matter okay

  $.ajax({
    type: "POST",
    url: homeURL + "/api/connect/",
    data: {
      "name": name, // should be small
      "email": email,
      "message": message
    }
  }).done(function(result){
    if(result.status){
      window.location.href = homeURL + "/thank-you/";
    } else {
      console.log(result);
    }
  });

  return false;
}

      /**
       * Created a variable homeURL in footer.php
       * 
       * coz, we needed home url, and we can get home url from PHP
       * php is not creating but our data can go to mail.php and in return we can show thankyou page what is the need for homepage in between
       * 
       * how will you send the user to thankyou page
       * 
       * homepage + thanyou page directory will be thanyou page URL
       * 
       * "http://localhost/lazarus" => home page "/thank-you/" => thank you page directory = by adding it will create a URL
       * 
       * 
       * Yes we did it several times please explain this to me tomorrow on VC remember to explain it
       * Okay i will remember now do fast so that you can work on chase and me on static login html yes yes
       */ 