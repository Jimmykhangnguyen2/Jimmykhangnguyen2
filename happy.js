function changeImage() {
    var img = document.getElementById('pic');
    var x = Math.floor(Math.random() * 11)
    var y = img.src
    var link = ''
    switch(x){
        case 0: link = 'Pics/vui/vui.jpg'
        break
        case 1: link = 'Pics/vui/vui2.jpg'
        break
        case 2: link = 'Pics/vui/vui3.jpg'
        break
        case 3: link = 'Pics/vui/vui4.jpg'
        break
        case 4: link = 'Pics/vui/vui5.jpg'
        break
        case 5: link = 'Pics/vui/vui6.jpg'
        break
        case 6: link = 'Pics/vui/vui7.jpg'
        break
        case 7: link = 'Pics/vui/vui8.jpg'
        break
        case 8: link = 'Pics/vui/vui9.jpg'
        break
        case 9: link = 'Pics/vui/vui10.jpg'
        break
        case 10: link = 'Pics/vui/vui11.jpg'
        break
    }
    img.src = link;
    if (y == img.src) {
        var x = Math.floor(Math.random() * 11)
        switch(x){
            case 0: link = 'Pics/vui/vui.jpg'
            break
            case 1: link = 'Pics/vui/vui2.jpg'
            break
            case 2: link = 'Pics/vui/vui3.jpg'
            break
            case 3: link = 'Pics/vui/vui4.jpg'
            break
            case 4: link = 'Pics/vui/vui5.jpg'
            break
            case 5: link = 'Pics/vui/vui6.jpg'
            break
            case 6: link = 'Pics/vui/vui7.jpg'
            break
            case 7: link = 'Pics/vui/vui8.jpg'
            break
            case 8: link = 'Pics/vui/vui9.jpg'
            break
            case 9: link = 'Pics/vui/vui10.jpg'
            break
            case 10: link = 'Pics/vui/vui11.jpg'
            break
        }
    }
    img.src = link;
}