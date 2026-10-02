document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


const filters = document.querySelectorAll('.project-filter span');

filters.forEach(filter => {
    filter.addEventListener('click', function () {

        filters.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');
    });
});
