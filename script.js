/* ============================================================
   Jackson Portfolio — Main JavaScript
   ============================================================
   File: script.js
   Purpose: All interactivity for the Jackson portfolio site.
   Sections:
     1. AOS Animation Init
     2. Mobile Sidebar Toggle
     3. Accordion (Education)
     4. Counter Animation (triggered on scroll)
     5. Portfolio Filter Buttons
   ============================================================ */

/* ─── 1. AOS Animation Init ──────────────────────────────── */
AOS.init({
    duration: 800,
    once: true
});

/* ─── 2. Mobile Sidebar Toggle ───────────────────────────── */
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

/* ─── 3. Accordion Interactive Logic (Single-Open & Smooth Slide) ── */
const accordionItems = document.querySelectorAll('.accordion-item');

const openAccordion = (item) => {
    item.classList.add('active');
    const body = item.querySelector('.accordion-body');
    if (body) {
        body.style.maxHeight = body.scrollHeight + 'px';
    }
};

const closeAccordion = (item) => {
    item.classList.remove('active');
    const body = item.querySelector('.accordion-body');
    if (body) {
        body.style.maxHeight = body.scrollHeight + 'px';
        void body.offsetHeight; // Force reflow so transition smoothly animates to 0
        body.style.maxHeight = '0px';
    }
};

// 1. Initial Page Load: Ensure ALL items start closed
accordionItems.forEach(item => {
    item.classList.remove('active');
    const body = item.querySelector('.accordion-body');
    if (body) {
        body.style.maxHeight = '0px';
    }
});

// 2. Click behavior: Single-open accordion with toggle & smooth slide
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
        const isCurrentlyOpen = item.classList.contains('active');

        // Close any other open accordion item smoothly
        accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                closeAccordion(otherItem);
            }
        });

        // Toggle clicked item
        if (isCurrentlyOpen) {
            closeAccordion(item);
        } else {
            openAccordion(item);
        }
    });
});

// 3. Keep open item height accurate on window resize
window.addEventListener('resize', () => {
    const activeItem = document.querySelector('.accordion-item.active');
    if (activeItem) {
        const body = activeItem.querySelector('.accordion-body');
        if (body) {
            body.style.maxHeight = body.scrollHeight + 'px';
        }
    }
});

/* ─── 4. Counter Numbers Dynamic Animation ───────────────── */
const counters = document.querySelectorAll('.counter-val');
let started = false;

const startCount = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 50;

        const update = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(update, 30);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
};

window.addEventListener('scroll', () => {
    const counterSec = document.getElementById('counters');
    if (counterSec) {
        const topPos = counterSec.getBoundingClientRect().top;
        if (topPos < window.innerHeight && !started) {
            startCount();
            started = true;
        }
    }
});

/* ─── 5. Portfolio Filter Buttons ────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        // Show / hide items
        workItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    });
});

/* ─── 6. Active Nav Link on Scroll & Click ────────────────── */
const navLinks = document.querySelectorAll('.sidebar-nav ul li a');
const sections = document.querySelectorAll('section[id]');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.sidebar-nav ul li').forEach(li => li.classList.remove('active'));
        link.parentElement.classList.add('active');
        if (window.innerWidth <= 992 && sidebar) {
            sidebar.classList.remove('show');
        }
    });
});

window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset + 250;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.sidebar-nav ul li').forEach(li => {
                li.classList.remove('active');
                if (li.querySelector(`a[href="#${id}"]`)) {
                    li.classList.add('active');
                }
            });
        }
    });
});

/* ─── 7. Contact Form Submission (Web3Forms & Instant Fallback) */
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const btnSubmit = document.getElementById('btn-submit');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nameInput = contactForm.querySelector('[name="name"]');
        const emailInput = contactForm.querySelector('[name="email"]');
        const subjectInput = contactForm.querySelector('[name="subject_input"]') || contactForm.querySelector('[name="subject"]');
        const messageInput = contactForm.querySelector('[name="message"]');
        const accessKeyInput = contactForm.querySelector('[name="access_key"]');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Message';
        const message = messageInput ? messageInput.value.trim() : '';
        const accessKey = accessKeyInput ? accessKeyInput.value.trim() : '';

        // If Web3Forms access key is still the default placeholder, fallback to direct email compose
        if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
            const mailtoUrl = `mailto:mehdi313hassan@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;

            if (formStatus) {
                formStatus.className = 'form-status success';
                formStatus.innerHTML = '<i class="fas fa-paper-plane"></i> Launching your email to send directly to <strong>mehdi313hassan@gmail.com</strong>...<br><span style="font-size:12.5px; opacity:0.85;">(To enable 1-click background delivery without opening email app, add your free key from <a href="https://web3forms.com" target="_blank">web3forms.com</a> to index.html)</span>';
                formStatus.style.display = 'block';
            }

            setTimeout(() => {
                window.location.href = mailtoUrl;
            }, 600);
            return;
        }

        // Web3Forms API submission
        const originalBtnHtml = btnSubmit ? btnSubmit.innerHTML : 'Send Message';
        if (btnSubmit) {
            btnSubmit.disabled = true;
            btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
        }

        if (formStatus) {
            formStatus.style.display = 'none';
            formStatus.className = 'form-status';
        }

        try {
            const formData = new FormData(contactForm);
            if (subject) {
                formData.set('subject', subject + ' (via Mehdi Hassan Portfolio)');
            }
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const result = await response.json().catch(() => ({}));

            if (response.ok && (result.success || result.status === 200)) {
                if (formStatus) {
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully to Mehdi Hassan. I will respond to you soon.';
                    formStatus.style.display = 'block';
                }
                contactForm.reset();
            } else {
                throw new Error(result.message || 'Submission failed');
            }
        } catch (error) {
            // If AJAX is blocked (such as opening via file:// protocol), submit natively
            if (formStatus) {
                formStatus.className = 'form-status success';
                formStatus.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting your message to Mehdi Hassan...';
                formStatus.style.display = 'block';
            }
            contactForm.submit();
        } finally {
            if (btnSubmit) {
                btnSubmit.disabled = false;
                btnSubmit.innerHTML = originalBtnHtml;
            }
        }
    });
}

