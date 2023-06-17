function changeImage() {
    var img = document.getElementById('pic');
    var x = Math.floor(Math.random() * 11)
    var y = img.src
    var link = ''
    switch(x){
        case 0: link = 'Pics/met/met.jpg'
        break
        case 1: link = 'Pics/met/met2.jpg'
        break
        case 2: link = 'Pics/met/met3.jpg'
        break
        case 3: link = 'Pics/met/met4.jpg'
        break
        case 4: link = 'Pics/met/met5.jpg'
        break
        case 5: link = 'Pics/met/met6.jpg'
        break
        case 6: link = 'Pics/met/met7.jpg'
        break
        case 7: link = 'Pics/met/met8.jpg'
        break
        case 8: link = 'Pics/met/met9.jpg'
        break
        case 9: link = 'Pics/met/met10.jpg'
        break
        case 10: link = 'Pics/met/met11.jpg'
        break
    }
    img.src = link;
    if (y == img.src) {
        var x = Math.floor(Math.random() * 11)
        switch(x){
            case 0: link = 'Pics/met/met.jpg'
            break
            case 1: link = 'Pics/met/met2.jpg'
            break
            case 2: link = 'Pics/met/met3.jpg'
            break
            case 3: link = 'Pics/met/met4.jpg'
            break
            case 4: link = 'Pics/met/met5.jpg'
            break
            case 5: link = 'Pics/met/met6.jpg'
            break
            case 6: link = 'Pics/met/met7.jpg'
            break
            case 7: link = 'Pics/met/met8.jpg'
            break
            case 8: link = 'Pics/met/met9.jpg'
            break
            case 9: link = 'Pics/met/met10.jpg'
            break
            case 10: link = 'Pics/met/met11.jpg'
            break
        }
    }
    img.src = link;
}