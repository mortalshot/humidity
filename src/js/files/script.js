// Подключение функционала 
import { isMobile, } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const spollersTitles = document.querySelectorAll('.spollers__title');
if (spollersTitles.length > 0) {
  spollersTitles.forEach(element => {
    element.addEventListener('click', function () {
      setTimeout(() => {
        ScrollTrigger.refresh();
        ScrollTrigger.update();
      }, 500);
    })
  });
}

// Выводим в DOM высоту шапки страницы
window.addEventListener('DOMContentLoaded', showHeaderHeight);
window.addEventListener('resize', showHeaderHeight);

function showHeaderHeight() {
  const header = document.querySelector('header.header');
  document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
}

// Masonry сетка для template7-gallery
var template7Gallery = document.querySelector('.template7-gallery');
if (template7Gallery) {
  var msnry = new Masonry(template7Gallery, {
    itemSelector: '.template7-gallery__item',
    gutter: '.template7-gallery__gutter'
  });
}

window.addEventListener('DOMContentLoaded', gsapAnimations);
window.addEventListener("load", function (e) {
  ScrollTrigger.refresh();
})

function gsapAnimations() {
  // .template1 ====================================================================================================
  const template1 = document.querySelector('.template1');
  if (template1) {
    const template1Bg = template1.querySelector('.template1__bg img');
    const template1Left = template1.querySelector('.template1__left');
    const template1Right = template1.querySelector('.template1__right');
    const template1Title = template1.querySelector('.template1__title');
    const template1Text = template1.querySelector('.template1__text');
    const template1TextContent = template1Text.querySelector('._content');
    const template1TextLink = template1Text.querySelector('.template1__link');
    const template1Features = template1.querySelectorAll('.template1__feature');

    const template1LeftTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: template1Left,
        start: 'top 80%',
        end: 'bottom top',
      },
    })

    if (template1Bg) {
      template1LeftTimeline.from(template1Bg, {
        opacity: 0,
        scale: 1.5,
        filter: 'blur(15px)',
        duration: 2,
        ease: 'power2.out',
      })
    }

    if (template1Title) {
      template1LeftTimeline.from(template1Title, {
        opacity: 0,
        xPercent: -100,
        duration: 0.5,
        ease: 'power2.out',
      }, "-=1.5")
    }

    if (template1TextContent) {
      template1LeftTimeline.from(template1TextContent, {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: 'power2.out',
      }, "-=1")
    }

    if (template1TextLink) {
      template1LeftTimeline.from(template1TextLink, {
        opacity: 0,
        xPercent: 100,
        duration: 0.5,
        ease: 'power2.out',
      }, "-=0.5")
    }

    if (template1Right && window.innerWidth > 767.98) {
      const captionWords = template1Right.querySelectorAll('.animation-caption__item');
      const captionWordsLastElement = captionWords[captionWords.length - 1];

      captionWords.forEach((element) => {
        template1LeftTimeline.to(element, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        })

        const words = element.querySelectorAll('div');

        let j = 0;
        words.forEach(word => {
          if (j % 2 == 0) {
            template1LeftTimeline.from(word, {
              yPercent: 100,
              duration: 0.5,
              ease: 'power2.out',
            })
          } else {
            template1LeftTimeline.from(word, {
              yPercent: -100,
              duration: 0.5,
              ease: 'power2.out',
            })
          }

          j++;
        });


        if (element != captionWordsLastElement) {
          j = 0;
          words.forEach(word => {
            let yPercent;
            if (j % 2 == 0) {
              yPercent = -100;
            } else {
              yPercent = 100;
            }

            template1LeftTimeline.to(word, {
              yPercent: yPercent,
              opacity: 0,
              duration: 0.5,
              ease: 'power2.out',
            })

            j++;
          });
        }
      });
    }

    if (template1Features.length > 0) {
      template1Features.forEach(element => {
        template1LeftTimeline.from(element, {
          opacity: 0,
          yPercent: 50,
          duration: 0.5,
          ease: 'power2.out',
        })
      });
    }
  }

  // .template2 ====================================================================================================
  const template2 = document.querySelector('.template2');
  if (template2) {
    const template2Heading = template2.querySelector('.template2__heading');

    if (template2Heading) {
      const template2HeadingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: template2Heading,
          start: 'top 80%',
          end: 'bottom top',
        },
      })

      template2HeadingTimeline.from(template2Heading, {
        opacity: 0,
        xPercent: -10,
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    const template2ItemsWrapper = template2.querySelectorAll('.template2__items');
    const template2Items = template2.querySelectorAll('.template2-item');
    if (template2Items.length > 0) {
      let j = 0;

      const elementTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: template2ItemsWrapper,
          start: 'top 80%',
          end: 'bottom top',
        },
      })

      template2Items.forEach(element => {
        if (j % 2 == 0) {
          elementTimeline.from(element, {
            opacity: 0,
            yPercent: 10,
            duration: 0.75,
            ease: 'power2.out',
          }, "-=0.1");
        } else {
          elementTimeline.from(element, {
            opacity: 0,
            yPercent: -10,
            duration: 0.75,
            ease: 'power2.out',
          }, "-=0.1");
        }

        j++;
      });

      const template2Words = template2.querySelectorAll(".template2__words");
      if (template2Words.length > 0) {
        template2Words.forEach(element => {
          elementTimeline.from(element, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
          }, "-=0.1");
        });
      }
    }
  }

  // .template3 ====================================================================================================
  const template3 = document.querySelector('.template3');
  const template3Cards = document.querySelectorAll('.template3__card');

  // Высота всей секции
  let template3Height = 0;
  // Высота одного блока
  let cardHeight = 0;

  if (template3 && window.innerWidth > 767.98) {
    // Указываем высоту секции
    template3Cards.forEach(card => {
      cardHeight = card.offsetHeight;
      template3Height += card.offsetHeight;
    });

    gsap.to(template3, {
      scrollTrigger: {
        trigger: template3,
        start: "top top",
        end: `${template3Height}px bottom`,
        scrub: true,
        pin: true,

        onUpdate: function (self) {
          const numCards = template3Cards.length;
          const opacityValues = Array(numCards).fill(0);
          const opacityIndex = Math.floor(self.progress * numCards);
          opacityValues[opacityIndex] = 1;

          template3Cards.forEach((card, index) => {
            card.style.opacity = opacityValues[index];


            if (opacityValues[index] === 1) {
              card.classList.add('_active-card');

              // Процент прокрутки каждого блока
              let progressPercentage = ((self.progress - index / numCards) / ((index + 1) / numCards) * 100) * (index + 1);

              // console.log(progressPercentage);

              if (card.classList.contains('template3-layout1')) {
                const template3Layout1Logo = card.querySelector('.template3-layout1__logo');

                if (template3Layout1Logo) {
                  if (progressPercentage > 50) {
                    if (index != numCards - 1) {
                      gsap.to(template3Layout1Logo, { opacity: `${1 - progressPercentage / 100}` })
                    }
                  } else {
                    gsap.to(template3Layout1Logo, { opacity: 1 })
                  }
                }
              }

              if (card.classList.contains('template3-layout2')) {
                const template3Layout2Text = card.querySelector('.template3-layout2__text');

                if (template3Layout2Text) {
                  if (progressPercentage < 25) {
                    gsap.to(template3Layout2Text, { opacity: `${(progressPercentage * 4) / 100}`, xPercent: `${progressPercentage * 4 - 100}` })
                  }
                  if (progressPercentage > 75) {
                    gsap.to(template3Layout2Text, { opacity: `${(100 - progressPercentage) / 100}`, xPercent: `${progressPercentage * 1.333 - 100}` })
                  }
                }
              }

              if (card.classList.contains('template3-layout3')) {
                const template3Layout3Image = card.querySelector('.template3-layout3__image');
                const template3Layout3Text = card.querySelector('.template3-layout3__text');

                if (progressPercentage < 20) {
                  if (template3Layout3Image) {
                    gsap.to(template3Layout3Image, { opacity: `${(progressPercentage * 5) / 100}`, xPercent: `${progressPercentage * 5 - 100}` })
                  }
                }
                if (progressPercentage < 30) {
                  if (template3Layout3Text) {
                    gsap.to(template3Layout3Text, { opacity: `${(progressPercentage * 3.333) / 100}`, xPercent: `${progressPercentage * 3.333 - 100}` })
                  }
                }
                if (progressPercentage > 70) {
                  if (template3Layout3Image) {
                    const imageWidth = template3Layout3Image.offsetWidth;
                    const windowWidth = window.innerWidth;

                    gsap.to(template3Layout3Image, { scaleX: (windowWidth * (progressPercentage / 100) / imageWidth * (progressPercentage / 100)), scaleY: (windowWidth * (progressPercentage / 100) / imageWidth * (progressPercentage / 100)) })
                  }
                  if (template3Layout3Text) {
                    gsap.to(template3Layout3Text, { opacity: `${(100 - progressPercentage) / 100}`, xPercent: `${20}` })
                  }
                }
                else if (progressPercentage < 70 && progressPercentage > 20) {
                  if (template3Layout3Image) {
                    gsap.to(template3Layout3Image, { scaleX: 1, scaleY: 1 })
                  }

                  if (progressPercentage > 30) {
                    if (template3Layout3Text) {
                      gsap.to(template3Layout3Text, { opacity: 1, xPercent: 0 })
                    }
                  }
                }
              }

              if (card.classList.contains('template3-layout4')) {
                const template3Layout4Text = card.querySelector('.template3-layout4__text');
                const template3Layout4Image = card.querySelector('.template3-layout4__image');

                if (progressPercentage < 25) {
                  if (template3Layout4Image) {
                    gsap.to(template3Layout4Image, { opacity: `${(progressPercentage * 4) / 100}`, scale: `${progressPercentage * 0.04}` })
                  }
                  if (template3Layout4Text) {
                    gsap.to(template3Layout4Text, { opacity: `${(progressPercentage * 4) / 100}`, xPercent: `${progressPercentage * 4 - 100}` })
                  }
                }

                if (progressPercentage > 70) {
                  if (template3Layout4Image) {
                    const object = template3Layout4Image.querySelector('#template3-layout4-object-1');
                    gsap.to(template3Layout4Image, { scaleX: 3 * (progressPercentage / 100), scaleY: 3 * (progressPercentage / 100) })
                  }
                  if (template3Layout4Text) {
                    gsap.to(template3Layout4Text, { opacity: `${(100 - progressPercentage) / 100}`, xPercent: `${20}` })
                  }
                }
              }
            } else {
              card.classList.remove('_active-card');
            }

            if (self.progress == 1) {
              template3Cards[numCards - 1].style.opacity = 1;
              template3Cards[numCards - 1].classList.add('_active-card');
            }
          });
        },

        onEnterBack: function () {
          template3.classList.add('_active');
        },
      },

      onStart: function () {
        template3.classList.add('_active');
      },

      onReverseComplete: function () {
        template3.classList.remove('_active');
      },

      onComplete: function () {
        template3.classList.remove('_active');
      },
    });
  }

  // .template4 ====================================================================================================
  const template4 = document.querySelector('.template4');
  if (template4) {
    const template4Items = template4.querySelectorAll('.template4-item');

    if (template4Items.length > 0) {
      let j = 0;

      template4Items.forEach(element => {
        const elementTitle = element.querySelector('.template4-item__title');
        const elementText = element.querySelectorAll('.template4-item__text > *');
        const elementImageThumb = element.querySelector('.template4-item__image-thumb');

        const elementTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom top',
          },
        })

        if (elementTitle) {
          let xPercent;
          if (j % 2 == 0) {
            xPercent = -10;
          } else {
            xPercent = 10;
          }

          elementTimeline.from(elementTitle, {
            opacity: 0,
            xPercent: xPercent,
            duration: 0.5,
            ease: 'power2.out',
          })
        }

        if (elementText.length > 0) {
          let xPercent;
          if (j % 2 == 0) {
            xPercent = -10;
          } else {
            xPercent = 10;
          }

          elementText.forEach(item => {
            elementTimeline.from(item, {
              opacity: 0,
              xPercent: xPercent,
              duration: 0.5,
              ease: 'power2.out',
            })
          });
        }

        if (elementImageThumb) {
          elementTimeline.to(elementImageThumb, {
            yPercent: -100,
            height: 0,
            duration: 1.5,
            ease: 'power2.out',
          }, "-=0.5")
        }

        j++;
      });
    }
  }

  // .template5-slide ====================================================================================================
  const template5Slide = document.querySelector('.template5-slide');
  if (template5Slide) {
    const slideImageThumb = template5Slide.querySelector('.image-thumb');

    const slideImageThumbTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: slideImageThumb,
        start: 'top 80%',
        end: 'bottom top',
      },
    })

    if (slideImageThumb) {
      slideImageThumbTimeline.to(slideImageThumb, {
        yPercent: -100,
        height: 0,
        duration: 1.5,
        ease: 'power2.out',
      })
    }
  }

  // .template6__item ====================================================================================================
  const template6Items = document.querySelectorAll('.template6__item');

  if (template6Items.length > 0) {
    template6Items.forEach(element => {
      const elementImageThumb = element.querySelector('.image-thumb');
      const elementBody = element.querySelector('.template6-item__body');
      const elementSpace = element.querySelector('.template6-item__space');
      const elementLetter = element.querySelector('.template6-item__letter');

      const elementTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom top',
        },
      })

      if (elementImageThumb) {
        elementTimeline.to(elementImageThumb, {
          yPercent: -100,
          height: 0,
          duration: 1.5,
          ease: 'power2.out',
        })
      }

      if (elementBody) {
        elementTimeline.from(elementBody, {
          opacity: 0,
          yPercent: 5,
          duration: 0.75,
          ease: 'power2.out',
        }, "-=1")
      }

      if (elementSpace) {
        elementTimeline.from(elementSpace, {
          opacity: 0,
          yPercent: 5,
          duration: 0.75,
          ease: 'power2.out',
        }, "-=0.75")
      }

      if (elementLetter) {
        elementTimeline.from(elementLetter, {
          opacity: 0,
          yPercent: 5,
          duration: 0.75,
          ease: 'power2.out',
        }, "-=0.75")
      }
    });
  }

  // .template7__item ====================================================================================================
  const template7Items = document.querySelectorAll('.template7__item');
  if (template7Items.length > 0) {
    template7Items.forEach(element => {
      const elementTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom top',
        },
      })

      elementTimeline.from(element, {
        yPercent: 10,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      })
    });
  }

  // .seo__text
  const seoText = document.querySelectorAll('.seo__text > *');
  if (seoText.length > 0) {
    seoText.forEach(element => {
      const elementTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom top',
        },
      })

      elementTimeline.from(element, {
        xPercent: -10,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    });
  }

  // .footer
  const footer = document.querySelector('.footer');
  if (footer && window.innerWidth > 767.98) {
    const footerContacts = document.querySelector('.footer__contacts')

    if (footerContacts) {
      const contactsItems = footerContacts.querySelectorAll('.contacts__item');

      const footerContactsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: footerContacts,
          start: 'top 80%',
          end: 'bottom top',
        },
      })

      contactsItems.forEach(element => {
        footerContactsTimeline.from(element, {
          yPercent: 20,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      });
    }

    const footerBottom = footer.querySelector('.footer-bottom__wrapper')
    const captionWords = footer.querySelectorAll('.animation-caption__item');
    const captionWordsLastElement = captionWords[captionWords.length - 1];
    const footerBottomBg = footer.querySelector('.footer-bottom__bg img')
    const footerBottomRow = footer.querySelector('.footer-bottom__row')


    const footerBottomTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: footerBottom,
        start: 'top 80%',
        end: 'bottom top',
      },
    })

    if (footerBottomBg) {
      footerBottomTimeline.from(footerBottomBg, {
        opacity: 0,
        scale: 1.5,
        filter: 'blur(15px)',
        duration: 2,
        ease: 'power2.out',
      })
    }

    if (captionWords.length > 0) {
      captionWords.forEach(element => {
        footerBottomTimeline.to(element, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        }, "-=1.5")

        const words = element.querySelectorAll('div');

        let j = 0;
        words.forEach(word => {
          let yPercent;
          if (j % 2 == 0) {
            yPercent = -100;
          } else {
            yPercent = 100;
          }

          footerBottomTimeline.from(word, {
            xPercent: yPercent,
            duration: 0.5,
            ease: 'power2.out',
          })

          j++;
        });


        if (element != captionWordsLastElement) {
          j = 0;
          words.forEach(word => {
            if (j % 2 == 0) {
              footerBottomTimeline.to(word, {
                xPercent: -100,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out',
              })
            } else {
              footerBottomTimeline.to(word, {
                xPercent: 100,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out',
              })
            }

            j++;
          });
        }
      });
    }

    if (footerBottomRow) {
      footerBottomTimeline.from(footerBottomRow, {
        opacity: 0,
        yPercent: 10,
        duration: 0.5,
        ease: 'power2.out',
      })
    }
  }

  // .template8 ====================================================================================================
  const template8 = document.querySelector('.template8');

  if (template8) {
    const template8Row = template8.querySelector('.template8__row');
    const template8Media = template8.querySelector('.template8__media');
    const template8Main = template8.querySelector('.template8__main');

    const template8Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: template8,
        start: 'top 80%',
        end: 'bottom top',
      },
    })

    if (template8Media) {
      template8Timeline.from(template8Media, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    }
    if (template8Main) {
      template8Timeline.from(template8Main, {
        opacity: 0,
        xPercent: 100,
        duration: 0.5,
        ease: 'power2.out',
      })
    }
  }

  // .template9-item ====================================================================================================
  const template9Items = document.querySelectorAll('.template9-item');
  if (template9Items.length > 0) {
    template9Items.forEach(element => {
      const elementImageThumb = element.querySelector('.image-thumb');
      const elementLine = element.querySelector('.template9-item__line');
      const elementMain = element.querySelector('.template9-item__main');

      const elementTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom top',
        },
      })

      if (elementImageThumb) {
        elementTimeline.to(elementImageThumb, {
          yPercent: -100,
          height: 0,
          duration: 1.5,
          ease: 'power2.out',
        })
      }

      if (elementLine) {
        elementTimeline.from(elementLine, {
          opacity: 0,
          duration: 0.75,
          ease: 'power2.out',
        }, "-=1")
      }

      if (elementMain) {
        elementTimeline.from(elementMain, {
          opacity: 0,
          duration: 0.75,
          ease: 'power2.out',
        }, "-=1")
      }
    });
  }

  // .template10-item ====================================================================================================
  const template10Items = document.querySelectorAll('.template10-item');
  if (template10Items.length > 0) {
    template10Items.forEach(element => {
      const elementTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom top',
        },
      })

      elementTimeline.from(element, {
        yPercent: 10,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      })
    });
  }

  // .template11-item ====================================================================================================
  const template11Items = document.querySelectorAll('.template11-item');
  if (template11Items.length > 0) {
    template11Items.forEach(element => {
      const elementTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom top',
        },
      })

      elementTimeline.from(element, {
        yPercent: 10,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      })
    });
  }

  // .template12 ====================================================================================================
  const template12 = document.querySelectorAll('.template12');
  if (template12) {
    const elementTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: template12,
        start: 'top 80%',
        end: 'bottom top',
      },
    })

    elementTimeline.from(template12, {
      yPercent: 10,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    })
  }

  // .template13 ====================================================================================================
  const template13 = document.querySelector('.template13');
  if (template13) {
    const template13Rows = template13.querySelectorAll('.template13__row');

    template13Rows.forEach(row => {
      const template13Steps = row.querySelectorAll('.template13-step');

      const rowTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: 'top 80%',
          end: 'bottom top',
        },
      })

      template13Steps.forEach(step => {
        rowTimeline.from(step, {
          opacity: 0,
          yPercent: 50,
          duration: 0.5,
          ease: 'power2.out',
        })
      });

      rowTimeline.add(() => {
        row.classList.add('_active');
      })
    });
  }

  // .template14 ====================================================================================================
  const template14 = document.querySelector('.template14');
  if (template14) {
    const template14Items = template14.querySelectorAll('.template14-item');

    const template14Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: template14,
        start: 'top 80%',
        end: 'bottom top',
      },
    })

    template14Items.forEach(element => {
      template14Timeline.from(element, {
        yPercent: 10,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    });
  }

  // .template15-item ====================================================================================================
  const template15Items = document.querySelectorAll('.template15-item');
  if (template15Items.length > 0) {
    template15Items.forEach(element => {
      const elementYear = element.querySelector('.template15-item__year');
      const elementRow = element.querySelector('.template15-item__row');
      const elementImageThumb = element.querySelector('.image-thumb');
      const elementText = element.querySelectorAll('.template15-item__text > *');

      if (elementYear) {
        const elementYearTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: elementYear,
            start: 'top 80%',
            end: 'bottom top',
          },
        })

        elementYearTimeline.from(elementYear, {
          yPercent: 10,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        })
      }

      const elementRowTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: elementRow,
          start: 'top 80%',
          end: 'bottom top',
        },
      })

      if (elementImageThumb) {
        elementRowTimeline.to(elementImageThumb, {
          yPercent: -100,
          height: 0,
          duration: 1.5,
          ease: 'power2.out',
        })
      }

      if (elementText.length > 0) {
        let j = 0;
        let xPercent;

        if (j % 2 == 0) {
          xPercent = 10;
        } else {
          xPercent = -10;
        }

        elementText.forEach(item => {
          elementRowTimeline.from(item, {
            opacity: 0,
            xPercent: xPercent,
            duration: 0.5,
            ease: 'power2.out',
          })
        });
      }
    });
  }

  // .template16-item ====================================================================================================
  const template16 = document.querySelector('.template16');
  if (template16) {
    const template16Items = template16.querySelectorAll('.template16-item');
    const template16Words = template16.querySelectorAll(".template2__words");

    const template16Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: template16,
        start: 'top 80%',
        end: 'bottom top',
      },
    })

    template16Items.forEach(element => {
      template16Timeline.from(element, {
        yPercent: 10,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    });

    if (template16Words.length > 0) {
      template16Words.forEach(element => {
        template16Timeline.from(element, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    }
  }

  // .articles-item ====================================================================================================
  const articlesItems = document.querySelectorAll('.articles-item');
  if (articlesItems.length > 0) {
    let j = 0;

    articlesItems.forEach(element => {
      const elementImageThumb = element.querySelector('.image-thumb');
      const elementImageBody = element.querySelector('.articles-item__body');

      const articlesItemsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom top',
          markers: true,
        },
      })

      if (elementImageThumb) {
        articlesItemsTimeline.to(elementImageThumb, {
          yPercent: -100,
          height: 0,
          duration: 1.5,
          ease: 'power2.out',
        })
      }

      if (elementImageBody) {
        articlesItemsTimeline.from(elementImageBody, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        }, "-0.5")
      }
    });
  }
}