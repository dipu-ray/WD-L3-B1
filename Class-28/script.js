$(function () {

    const $nav = $('#mainNav')
    const $bar = $('#progress-bar')
    const $backTop = $('#back-top')
    const $navLinks = $('#mainNav .nav-link')
    const $modal = $('#project-modal')
    const $modalContent = $('.modal-content')

    // ── 1. Sticky + scroll style ──────────────────────────────
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop()
        const docHeight = $(document).height() - $(this).height()

        if (scrollY > 60) {
            $nav.addClass('scrolled')
            $backTop.css('display', 'flex')
        } else {
            $nav.removeClass('scrolled')
            $backTop.hide()
        }

        const pct = (scrollY / docHeight) * 100
        $bar.css('width', pct + '%')

        // ── 2. Active link highlight on scroll ─────────────────
        const sections = ['home', 'work', 'about', 'services', 'contact']
        sections.forEach(function (id) {
            const $section = $('#' + id)
            if (!$section.length) return
            const top = $section.offset().top - 100
            const bottom = top + $section.outerHeight()
            if (scrollY >= top && scrollY < bottom) {
                $navLinks.removeClass('active-link')
                $navLinks.filter('[href="#' + id + '"]').addClass('active-link')
            }
        })
    })

    // ── 3. Smooth scroll on nav link click ───────────────────
    $navLinks.on('click', function (e) {
        const href = $(this).attr('href')
        if (href.startsWith('#')) {
            e.preventDefault()
            const $target = $(href)
            if ($target.length) {
                $('html, body').animate({ scrollTop: $target.offset().top - 60 }, 600, 'swing')
            }
            $('#navMenu').collapse('hide')
        }
    })

    // ── 4. Back to top button ─────────────────────────────────
    $backTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600, 'swing')
    })

    // ── 5. Navbar hide/show on scroll direction ───────────────
    let lastScroll = 0
    $(window).on('scroll', function () {
        const current = $(this).scrollTop()
        if (current > lastScroll && current > 300) {
            $nav.css('transform', 'translateY(-100%)')
        } else {
            $nav.css('transform', 'translateY(0)')
        }
        lastScroll = current
    })

    // ── 6. Typewriter effect for hero sub ─────────────────────
    const heroText = "Design-driven digital experiences that leave a mark. Strategy, craft, and code — all in one place."
    let i = 0
    function typeWriter() {
        if (i < heroText.length) {
            $('#hero-sub').append(heroText.charAt(i))
            i++
            setTimeout(typeWriter, 30)
        } else {
            $('#hero-sub').append('<span class="typed-cursor">|</span>')
        }
    }
    // Start typing after a delay
    setTimeout(typeWriter, 500)

    // ── 7. Work card modal with project data ────────────────
    const projectData = {
        nexus: {
            title: "Nexus Corp Rebrand",
            description: "Complete brand overhaul for a Fortune 500 tech company. Delivered new visual identity, brand guidelines, and digital strategy that increased brand recognition by 85%."
        },
        bloom: {
            title: "Bloom Web App",
            description: "A progressive web app for sustainable living. Features include carbon tracking, community challenges, and personalized eco-tips. Reached 50K users in 3 months."
        },
        stride: {
            title: "Stride Campaign",
            description: "Multi-channel campaign for a fitness startup. Combined influencer marketing, interactive web experiences, and data-driven targeting to achieve 300% ROI."
        },
        aurum: {
            title: "Aurum Product Design",
            description: "End-to-end product design for a luxury watch brand. Created digital experience, AR try-on feature, and e-commerce platform with 4.8/5 user rating."
        }
    }

    $('.work-card').on('click', function () {
        const projectId = $(this).data('project')
        const project = projectData[projectId]
        if (project) {
            $('#modal-title').text(project.title)
            $('#modal-description').text(project.description)
            $modal.fadeIn(300, function () {
                $modalContent.addClass('show')
            })
        }
    })

    // Close modal
    function closeModal() {
        $modalContent.removeClass('show')
        setTimeout(() => $modal.fadeOut(200), 200)
    }
    $('#modal-close').on('click', closeModal)
    $modal.on('click', function (e) {
        if (e.target === this) closeModal()
    })

    // ── 8. Service item expansion ─────────────────────────────
    $('.service-item').on('click', function () {
        const serviceId = $(this).data('service')
        const $detail = $('#service-' + serviceId)
        const $arrow = $(this).find('.service-arrow')

        // Close others
        $('.service-detail').not($detail).slideUp(200)
        $('.service-arrow').not($arrow).css('transform', 'rotate(0deg)')

        // Toggle current
        $detail.slideToggle(300)
        $arrow.css('transform', $detail.is(':visible') ? 'rotate(90deg)' : 'rotate(0deg)')
    })

    // ── 9. Contact form submission ────────────────────────────
    $('#contact-form').on('submit', function (e) {
        e.preventDefault()
        const $form = $(this)
        const $submitBtn = $form.find('.btn-submit')
        const $feedback = $('#form-feedback')

        // Disable button with loading effect
        $submitBtn.prop('disabled', true).text('Sending...')

        // Simulate API call
        setTimeout(() => {
            // Show success message
            $feedback.removeClass('error').addClass('success')
                .text('Thanks! We\'ll get back to you within 24 hours.')
                .fadeIn()

            // Reset form
            $form[0].reset()
            $submitBtn.prop('disabled', false).text('Send Message')

            // Hide feedback after 5 seconds
            setTimeout(() => $feedback.fadeOut(), 5000)
        }, 1500)
    })

    // ── 10. Newsletter form ───────────────────────────────────
    $('#newsletter-form').on('submit', function (e) {
        e.preventDefault()
        const $form = $(this)
        const $feedback = $('#newsletter-feedback')
        const email = $form.find('input[type="email"]').val()

        // Simple validation
        if (!email.includes('@')) {
            $feedback.removeClass('success').addClass('error')
                .text('Please enter a valid email.').fadeIn()
            return
        }

        // Simulate subscription
        $feedback.removeClass('error').addClass('success')
            .text('Subscribed! Check your inbox for confirmation.').fadeIn()
        $form[0].reset()

        setTimeout(() => $feedback.fadeOut(), 4000)
    })

    // ── 11. Animated counters when in view ───────────────────
    const $counters = $('.stat-block strong')
    let countersAnimated = false
    function animateCounters() {
        if (countersAnimated) return
        const scrollY = $(window).scrollTop()
        const $about = $('#about')
        if ($about.length && scrollY > $about.offset().top - 400) {
            countersAnimated = true
            $counters.each(function () {
                const $this = $(this)
                const target = parseInt($this.data('count'))
                const duration = 2000
                const step = target / (duration / 16)
                let current = 0
                const timer = setInterval(() => {
                    current += step
                    if (current >= target) {
                        current = target
                        clearInterval(timer)
                    }
                    $this.text(Math.floor(current) + (target > 50 ? '+' : ''))
                }, 16)
            })
        }
    }
    $(window).on('scroll', animateCounters)

    // ── 12. Social links coming soon ──────────────────────────
    $('.social-link').on('click', function (e) {
        e.preventDefault()
        const platform = $(this).data('platform')
        alert(`${platform} page coming soon! We're building something awesome.`)
    })

    // ── 13. Ripple effect on buttons ──────────────────────────
    $('.btn-submit, .nav-cta, #back-top').on('click', function (e) {
        const $this = $(this)
        const rect = this.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        const $ripple = $('<span class="ripple"></span>').css({
            width: size, height: size, left: x, top: y
        })
        $this.append($ripple)
        setTimeout(() => $ripple.remove(), 600)
    })

    // ── 14. Keyboard navigation ───────────────────────────────
    $(document).on('keydown', function (e) {
        // ESC to close modal or mobile menu
        if (e.key === 'Escape') {
            if ($modal.is(':visible')) {
                closeModal()
            } else {
                $('#navMenu').collapse('hide')
            }
        }
    })

    // ── 15. Parallax hero effect ──────────────────────────────
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop()
        $('#home::before').css('transform', `translateY(${scrollY * 0.5}px)`) // CSS pseudos can't be targeted, so we add:
    })
    // Add parallax element
    $('#home').append('<div class="hero-parallax" style="position:absolute;inset:0;pointer-events:none;z-index:-1"></div>')
    $('.hero-parallax').css({
        background: $('#home::before').css('background')
    })
})