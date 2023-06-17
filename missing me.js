function changeImage() {
    var img = document.getElementById('pic');
    var x = Math.floor(Math.random() * 12)
    var y = img.src
    var link = ''
    switch(x){
        case 0: link = 'Pics/us/us.jpeg'
        break
        case 1: link = 'Pics/us/us2.jpg'
        break
        case 2: link = 'Pics/us/us3.png'
        break
        case 3: link = 'Pics/us/us4.jpg'
        break
        case 4: link = 'Pics/us/us5.jpg'
        break
        case 5: link = 'Pics/us/us6.jpg'
        break
        case 6: link = 'Pics/us/us7.jpg'
        break
        case 7: link = 'Pics/us/us8.jpg'
        break
        case 8: link = 'Pics/us/us9.jpg'
        break
        case 9: link = 'Pics/us/us10.jpg'
        break
        case 10: link = 'Pics/us/us11.png'
        break
        case 11: link = 'Pics/us/us12.jpg'
        break
    }
    img.src = link;
    if (y == img.src) {
        var x = Math.floor(Math.random() * 12)
        switch(x){
            case 0: link = 'Pics/us/us.jpeg'
            break
            case 1: link = 'Pics/us/us2.jpg'
            break
            case 2: link = 'Pics/us/us3.png'
            break
            case 3: link = 'Pics/us/us4.jpg'
            break
            case 4: link = 'Pics/us/us5.jpg'
            break
            case 5: link = 'Pics/us/us6.jpg'
            break
            case 6: link = 'Pics/us/us7.jpg'
            break
            case 7: link = 'Pics/us/us8.jpg'
            break
            case 8: link = 'Pics/us/us9.jpg'
            break
            case 9: link = 'Pics/us/us10.jpg'
            break
            case 10: link = 'Pics/us/us11.png'
            break
            case 11: link = 'Pics/us/us12.jpg'
            break
        }
    }
    img.src = link;
}