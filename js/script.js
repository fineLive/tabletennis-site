// ================================
// 导航栏功能
// ================================

// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // 点击链接后关闭菜单（移动端）
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(135deg, #c0392b, #e74c3c)';
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ================================
// 滚动动画
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为所有卡片添加初始样式并观察
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll(
        '.card, .rule-item, .equipment-item, .stat-item, ' +
        '.player-detail-card, .tournament-detail-card, .tech-detail-card, ' +
        '.tournament-card-alt, .accessory-card, .grand-slam-card'
    );
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// ================================
// 数字计数动画
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    const numberObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.getAttribute('data-target'));
                
                let current = 0;
                const increment = finalNumber / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= finalNumber) {
                        current = finalNumber;
                        clearInterval(timer);
                    }
                    target.textContent = Math.floor(current);
                }, 30);
                
                numberObserver.unobserve(target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(num => numberObserver.observe(num));
});

// ================================
// 平滑滚动（用于站内锚点链接）
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            const headerOffset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// 表格行高亮
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.querySelectorAll('.stats-table tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.background = '#f8f9fa';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.background = '';
        });
    });
});

// ================================
// 页面加载完成提示
// ================================
window.addEventListener('load', function() {
    console.log('🏓 乒乓球世界网站已加载完成！');
});

// ================================
// 添加回到顶部按钮
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // 创建回到顶部按钮
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #e74c3c, #c0392b);
        color: white;
        font-size: 1.5rem;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
        z-index: 999;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(backToTop);
    
    // 滚动时显示/隐藏按钮
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // 点击回到顶部
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 悬停效果
    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ================================
// 运动员卡片特殊效果
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const playerCards = document.querySelectorAll('.player-detail-card');
    
    playerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
});

// ================================
// 赛事冠军标签点击效果
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const champions = document.querySelectorAll('.champion');
    
    champions.forEach(champion => {
        champion.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
