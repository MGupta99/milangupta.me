$(document).ready(function() {

  // Type introduction
  var intro = new TypeIt('#introduction', {
    speed: 80,
    breakLines: false,
    startDelay: 1500,
    afterComplete: function (instance) {
      [].forEach.call(instance.elements, function (element) {
        element.removeChild(element.querySelector('.ti-cursor'));
      });
    }
  }).type('HI, ').pause(800).type("I'M MILAN GUPTA");

  // Scroll effect
  $("nav a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top-80
      }, 800);
    }
  });

  $('.navbar-toggler').click(function(){
		$('#toggle-icon').toggleClass('open');
	});

  $('.nav-link').click(function() {
    $('#toggle-icon').removeClass('open');
    $('#navbar-links').removeClass('show');
  })

  $(window).resize(function() {
    if ($(window).width() <= 992){
  		$('.offset').addClass('offset-md-2').removeClass('offset-md-3');
      $('#about-img').addClass('col-md-4').removeClass('col-md-3');
      $('#about-descrip').addClass('col-md-4').removeClass('col-md-3');
  	} else {
      $('.offset').addClass('offset-md-3').removeClass('offset-md-2');
      $('#about-img').addClass('col-md-3').removeClass('col-md-4');
      $('#about-descrip').addClass('col-md-3').removeClass('col-md-4');
    }
  })

  // Pause carousel
  $('.carousel').carousel('pause');

  function get_labels() {
    var skills = []
    $('.skill').each(function() {
      var words = $(this).attr('data-skill').split(" ")
      if (words.length == 1) {
        skills.push(words[0])
      } else {
        skills.push(words)
      }
    })
    return skills
  }

  function get_graph_data() {
    var data = []
    $('.skill').each(function() {
      data.push(parseInt($(this).attr('data-proficiency')))
    })
    return data
  }

  // Check when sections enter view
  $(window).scroll(function() {

    // Load graph when user scrolls to skills
    if ($(window).scrollTop() + $(window).height() >= $('#skills-graph').offset().top) {

      if(!$('#skills-graph').attr('loaded')) {

        background_colors = [
          'rgba(167, 0, 250, 0.4)',
          'rgba(245, 250, 10, 0.4)',
          'rgba(61, 236, 255, 0.4)',
          'rgba(161, 255, 61, 0.4)',
          'rgba(255, 10, 145, 0.4)',
        ]

        border_colors = [
          'rgba(167, 0, 250, 1)',
          'rgba(245, 250, 10, 1)',
          'rgba(61, 236, 255, 1)',
          'rgba(161, 255, 61, 1)',
          'rgba(255, 10, 145, 1)',
        ]

        yKey = {1 : "Just Getting Started", 2 : "Familiar", 3 : "Proficient", 4 : "Professional"}

        Chart.defaults.global.defaultFontFamily = "-apple-system, 'Roboto', sans-serif";
        Chart.defaults.global.animation.duration = 2000;

        var skills_graph = $("#skills-graph");
        let skills = new Chart(skills_graph, {
          type: 'bar',
          data: {
            // labels: ["Programming", ["Web", "Development"],  ["Data", "Analysis"], ["Problem", "Solving"], ["Tech", "Savviness"]],
            labels: get_labels(),
            yLabels: ["Just Getting Started", "Familiar", "Proficient", "Professional"],
            datasets: [{
              data: get_graph_data(),
              backgroundColor: background_colors,
              borderColor: border_colors,
              borderWidth: 1
            }],
          },
          options: {
            scales: {
              yAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  beginAtZero: true,
                  callback: function(value, index, values) {
                    return yKey[value];
                  }
                }
              }],
              xAxes: [{
                gridLines: {
                  display: false
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: false
            }
        }
        });

        $('#skills-graph').attr('loaded', true);
      }
    }

    // Begin carousel once it is in view
    if ($(window).scrollTop() + $(window).height() >= $('#places-carousel').offset().top) {
      $('.carousel').carousel('cycle');
    }

  });


});
