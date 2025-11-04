// 标签切换功能
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // 标签切换事件
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // 添加活动状态到当前标签
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            // 保存用户选择到localStorage
            localStorage.setItem('selectedTab', targetTab);

            // 平滑滚动到页面顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // 从localStorage恢复用户之前的选择
    const savedTab = localStorage.getItem('selectedTab');
    if (savedTab) {
        const savedButton = document.querySelector(`[data-tab="${savedTab}"]`);
        if (savedButton) {
            savedButton.click();
        }
    }

    // 代码块复制功能（可选）
    addCopyButtonsToCodeBlocks();
});

// 为代码块添加复制按钮
function addCopyButtonsToCodeBlocks() {
    const codeBlocks = document.querySelectorAll('.code-block');

    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.innerHTML = '📋 复制';
        copyButton.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 4px 12px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 4px;
            color: #e6e6e6;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s ease;
        `;

        // 让代码块容器支持相对定位
        block.style.position = 'relative';

        copyButton.addEventListener('click', function() {
            const code = block.querySelector('pre').textContent;
            copyToClipboard(code);

            // 显示复制成功提示
            copyButton.innerHTML = '✅ 已复制';
            copyButton.style.background = 'rgba(82, 196, 26, 0.3)';

            setTimeout(() => {
                copyButton.innerHTML = '📋 复制';
                copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
            }, 2000);
        });

        copyButton.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });

        copyButton.addEventListener('mouseleave', function() {
            if (this.innerHTML === '📋 复制') {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });

        block.appendChild(copyButton);
    });
}

// 复制到剪贴板函数
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(err => {
            console.error('复制失败:', err);
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

// 备用复制方法
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('复制失败:', err);
    }

    document.body.removeChild(textArea);
}

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 为折叠面板添加动画效果
document.querySelectorAll('.collapse').forEach(collapse => {
    collapse.addEventListener('toggle', function() {
        if (this.open) {
            const content = this.querySelector('.collapse-content');
            content.style.animation = 'slideDown 0.3s ease';
        }
    });
});

// 添加滑动动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            max-height: 0;
        }
        to {
            opacity: 1;
            max-height: 1000px;
        }
    }
`;
document.head.appendChild(style);
