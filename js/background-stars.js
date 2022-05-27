function starsBackgroundInit() {
    let background = document.getElementById("background-stars");

    // 设置背景属性
    background.style.setProperty('position', 'relative');
    background.style.setProperty('width', '100%');
    background.style.setProperty('height', '100%');
    background.style.setProperty('background-color', 'black');
    // 设置动画
    let keyframes = '@keyframes blinking {0%, 100% { opacity:0.2;} 50% {/*星星大小放大1.5倍，旋转45度成菱形*/ transform:scale(1.2) rotate(45deg); opacity:1;}}'
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = keyframes;
    background.appendChild(style);
    // 
    // 添加星星
    let starNum = 2000;
    let starWidth = 0.06; // 星星宽度（px）
    let starHeight = 0.06; // 星星高度（px）
    let blinkingSec = 5; // 闪烁间隔（秒）
    for (let i = 0; i < starNum; i++) {
        let starId = 'background-star-' + i;
        let top = Math.ceil(Math.random() * 100);
        let left = Math.ceil(Math.random() * 100);
        let delay = Math.ceil(Math.random() * 100);
        let star = document.createElement("span");
        let starColorR = Math.ceil(Math.random() * 255);
        let starColorG = Math.ceil(Math.random() * 255);
        let starColorB = Math.ceil(Math.random() * 255);
        star.id = starId;
        star.style.setProperty('top', top + '%');
        star.style.setProperty('left', left + '%');
        star.style.setProperty('display', 'inline-block');
        star.style.setProperty('position', 'fixed');
        star.style.setProperty('width', starWidth + 'rem');
        star.style.setProperty('height', starHeight + 'rem');
        star.style.setProperty('background-color', 'rgb(' + starColorR + ',' + starColorG + ',' + starColorB + ')');
        star.style.setProperty('transform', 'rotate(45deg)');
        star.style.setProperty('opacity', '0.2');
        star.style.setProperty('animation', 'blinking ' + blinkingSec + 's linear var(--d) infinite');
        star.style.setProperty('--d', delay + 's');

        background.appendChild(star);
    }
}