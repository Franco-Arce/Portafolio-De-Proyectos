document.addEventListener('DOMContentLoaded', function () {
    // 1. Mouse Move Effect for Cards (Glow)
    const cards = document.querySelectorAll('.project-card');

    document.getElementById('projects').onmousemove = e => {
        for (const card of cards) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };
    }

    // 2. Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category.includes(filter)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 3. Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            // Update active nav state
            document.querySelectorAll('.nav a').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. Parallax Hero Effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const heroTitle = document.querySelector('.hero-title');
        const heroBadge = document.querySelector('.hero-badge');

        if (heroTitle) {
            heroTitle.style.transform = `translate(${mouseX * -20}px, ${mouseY * -20}px)`;
        }
        if (heroBadge) {
            heroBadge.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
        }
    });

    console.log('✨ Premium Portfolio Loaded - Dark Violet Theme');
});
