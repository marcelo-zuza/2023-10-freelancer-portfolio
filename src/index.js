//carrossel
$(document).ready(function () {
    const $carousel = $('.carousel-fade');
    const $items = $carousel.find('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
        $items.eq(currentIndex).removeClass('opacity-100').addClass('opacity-0');
        $items.eq(index).removeClass('opacity-0').addClass('opacity-100');
        currentIndex = index;
    }

    function nextItem() {
        const nextIndex = (currentIndex + 1) % $items.length;
        showItem(nextIndex);
    }

    function prevItem() {
        const prevIndex = (currentIndex - 1 + $items.length) % $items.length;
        showItem(prevIndex);
    }
    //temporizador
    function startAutoSlide() {
        setInterval(nextItem, 3000); 
    }

    // Iniciar o carousel
    showItem(currentIndex);

    // Lidar com os botões de próxima e anterior
    $('.carousel-next').on('click', nextItem);
    $('.carousel-prev').on('click', prevItem);
    startAutoSlide();
});

// Scrol suave
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
  
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 700);
        }
    });
  });

// Fade-in de elementos
  $(document).ready(function() {
    $('.fade-in-element').css('opacity', 0);
  
    $('.first-element').waypoint(function() {
        $(this.element).animate({ opacity: 1 }, 750);
    }, {
        offset: '75%',
    });
  
    $('.second-element').waypoint(function() {
        $(this.element).animate({ opacity: 1 }, 1200);
    }, {
        offset: '95%', 
        delay: 1000,   
    });
  
    $('.third-element').waypoint(function() {
      $(this.element).animate({ opacity: 0.75 }, 2000);
  }, {
      offset: '75%', 
      delay: 0,  
  });
  });

