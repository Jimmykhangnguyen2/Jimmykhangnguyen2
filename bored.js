function changeImage() {
    var img = document.getElementById('pic');
    var x = Math.floor(Math.random() * 10)
    var y = img.src
    var link = ''
    switch(x){
        case 0: link = 'Pics/chan/bored.jpg'
        break
        case 1: link = 'Pics/chan/bored2.jpg'
        break
        case 2: link = 'Pics/chan/bored3.jpg'
        break
        case 3: link = 'Pics/chan/bored4.jpg'
        break
        case 4: link = 'Pics/chan/bored5.jpg'
        break
        case 5: link = 'Pics/chan/bored6.jpg'
        break
        case 6: link = 'Pics/chan/bored7.jpg'
        break
        case 7: link = 'Pics/chan/bored8.png'
        break
        case 8: link = 'Pics/chan/bored9.png'
        break
        case 9: link = 'Pics/chan/bored10.jpg'
        break
        case 10: link= 'Pics/chan/bored11.jpg'
    }
    img.src = link;
    if (y == img.src) {
        var x = Math.floor(Math.random() * 11)
        switch(x){
            case 0: link = 'Pics/chan/bored.jpg'
            break
            case 1: link = 'Pics/chan/bored2.jpg'
            break
            case 2: link = 'Pics/chan/bored3.jpg'
            break
            case 3: link = 'Pics/chan/bored4.jpg'
            break
            case 4: link = 'Pics/chan/bored5.jpg'
            break
            case 5: link = 'Pics/chan/bored6.jpg'
            break
            case 6: link = 'Pics/chan/bored7.jpg'
            break
            case 7: link = 'Pics/chan/bored8.png'
            break
            case 8: link = 'Pics/chan/bored9.png'
            break
            case 9: link = 'Pics/chan/bored10.jpg'
            break
            case 10: link= 'Pics/chan/bored11.jpg'
        }
    }
    img.src = link;
    console.log(img.src)
}