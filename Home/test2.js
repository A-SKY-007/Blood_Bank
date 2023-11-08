class Slideshow {
    constructor(el) {
      this.DOM = { el: el };
  
      this.config = {
        slideshow: {
          delay: 3000, // Delay between slide transitions (in milliseconds)
          pagination: {
            duration: 3, // Duration of pagination animation (in seconds)
          },
        },
      };
  
      this.init();
    }
  
    init() {
      const self = this;
  
      // Initialize charming for the slide titles
      this.DOM.slideTitle = this.DOM.el.querySelectorAll('.slide-title');
      this.DOM.slideTitle.forEach((slideTitle) => {
        charming(slideTitle);
      });
  
      this.slideshow = new Swiper(this.DOM.el, {
        loop: true,
        autoplay: {
          delay: this.config.slideshow.delay,
          disableOnInteraction: false,
        },
        speed: 500,
        preloadImages: true,
        updateOnImagesReady: true,
        pagination: {
          el: '.slideshow-pagination',
          clickable: true,
          bulletClass: 'slideshow-pagination-item',
          bulletActiveClass: 'active',
          clickableClass: 'slideshow-pagination-clickable',
          modifierClass: 'slideshow-pagination-',
          renderBullet: function (index, className) {
            const slideIndex = index;
            const number = index <= 8 ? `0${slideIndex + 1}` : `${slideIndex + 1}`;
            const paginationItem = `<span class="slideshow-pagination-item">
              <span class="pagination-number">${number}</span>
              ${
                index <= 8
                  ? '<span class="pagination-separator"><span class="pagination-separator-loader"></span></span>'
                  : ''
              }
            </span>`;
            return paginationItem;
          },
        },
        navigation: {
          nextEl: '.slideshow-navigation-button.next',
          prevEl: '.slideshow-navigation-button.prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        on: {
          init: function () {
            self.animate('next');
          },
          slideNextTransitionStart: function () {
            self.animate('next');
          },
          slidePrevTransitionStart: function () {
            self.animate('prev');
          },
          paginationUpdate: function (swiper, paginationEl) {
            self.animatePagination(swiper, paginationEl);
          },
        },
      });
  
      this.initEvents();
    }
  
    initEvents() {
      // You can handle additional events here if needed.
    }
  
    animate(direction = 'next') {
      // Add your slide animation code here.
    }
  
    animatePagination(swiper, paginationEl) {
      // Add your pagination animation code here.
    }
  }
  
  // Initialize the slideshow using the specified HTML element.
  const slideshow = new Slideshow(document.querySelector('.slideshow'));
  