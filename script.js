
        // Scroll animations
        const observers = {
            testimonialObserver: new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                },
                { threshold: 0.2 }
            ),
            bestsellerObserver: new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                },
                { threshold: 0.2 }
            ),
            footerObserver: new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                },
                { threshold: 0.2 }
            ),
            newsletterObserver: new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                },
                { threshold: 0.2 }
            ),
            aboutObserver: new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                },
                { threshold: 0.2 }
            )
        };

        document.querySelectorAll('.testimonial-card').forEach((card) => observers.testimonialObserver.observe(card));
        document.querySelectorAll('.bestseller-card').forEach((card) => observers.bestsellerObserver.observe(card));
        document.querySelectorAll('.footer-column').forEach((column) => observers.footerObserver.observe(column));
        document.querySelector('.newsletter-content')?.classList && observers.newsletterObserver.observe(document.querySelector('.newsletter-content'));
        document.querySelectorAll('.about-content, .about-image').forEach((element) => observers.aboutObserver.observe(element));

        // Carousel functionality
        const carousel = document.getElementById('carousel');
        const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function showItem(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
                item.classList.toggle('hidden', i !== index);
            });
        }

        document.getElementById('nextBtn').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showItem(currentIndex);
        });

        // Initialize first item
        showItem(currentIndex);

        // Smooth scroll for nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
            });
        });
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        
   