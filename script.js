function toggleFaq(element) {
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
            item.querySelector('.faq-answer').classList.remove('active');
            // Reset icon rotation
            const icon = item.querySelector('.faq-icon');
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
            }
        }
    });

    // Toggle current FAQ
    element.classList.toggle('active');
    const answer = element.querySelector('.faq-answer');
    answer.classList.toggle('active');

    // Rotate icon
    const icon = element.querySelector('.faq-icon');
    if (icon) {
        if (element.classList.contains('active')) {
            icon.style.transform = 'rotate(180deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
    }
}