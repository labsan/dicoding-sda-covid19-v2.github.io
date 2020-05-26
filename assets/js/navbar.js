function toggle() {
    var x = document.getElementById('id-toggle');
    if (x.className === 'class-toggle') {
        x.className += ' responsive';
    } else {
        x.className = 'class-toggle';
    }
}
