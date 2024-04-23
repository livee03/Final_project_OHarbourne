document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-item-header');

    accordionHeaders.forEach(header => {
      header.addEventListener('click', function () {
        const accordionItem = this.parentElement;
        const accordionBody = accordionItem.querySelector('.accordion-item-body');

        if (accordionBody.classList.contains('active')) {
          accordionBody.classList.remove('active');
        } else {
          const activeAccordionBody = document.querySelector('.accordion-item-body.active');
          if (activeAccordionBody) {
            activeAccordionBody.classList.remove('active');
          }
          accordionBody.classList.add('active');
        }
      });
    });
  });