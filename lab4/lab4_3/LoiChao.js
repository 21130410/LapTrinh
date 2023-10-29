

// var sites = ['chào bạn', 'hi', 'chúc bạn một ngày vui','bạn khỏe không','chào bạn đã đến với website của mình'];

// var randomUrl = sites[Math.floor(Math.random() * sites.length )];
// window.location.reload = randomUrl;

// document.write(alert(randomUrl));
var sites = ['Chào bạn', 'Hi', 'Chúc bạn một ngày vui', 'Bạn khỏe không', 'Chào bạn đã đến với website của mình'];

var randomGreeting = sites[Math.floor(Math.random() * sites.length)];
alert(randomGreeting); // Hiển thị một thông báo chứa câu chào ngẫu nhiên

// Tải lại trang
window.location.reload();