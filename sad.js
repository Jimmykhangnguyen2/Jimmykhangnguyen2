function changeImage() {
    var img = document.getElementById('pic');
    var x = Math.floor(Math.random() * 11)
    var y = img.src
    var link = ''
    switch(x){
        case 0: link = 'Pics/sad/sad.jpg'
        break
        case 1: link = 'Pics/sad/sad2.jpg'
        break
        case 2: link = 'Pics/sad/sad3.jpg'
        break
        case 3: link = 'Pics/sad/sad4.jpg'
        break
        case 4: link = 'Pics/sad/sad5.jpg'
        break
        case 5: link = 'Pics/sad/sad6.jpg'
        break
        case 6: link = 'Pics/sad/sad7.jpg'
        break
        case 7: link = 'Pics/sad/sad8.jpg'
        break
        case 8: link = 'Pics/sad/sad9.jpg'
        break
        case 9: link = 'Pics/sad/sad10.jpg'
        break
        case 10: link = 'Pics/sad/sad11.jpg'
        break
    }
    img.src = link;
    if (y == img.src) {
        var x = Math.floor(Math.random() * 11)
        switch(x){
            case 0: link = 'Pics/sad/sad.jpg'
            break
            case 1: link = 'Pics/sad/sad2.jpg'
            break
            case 2: link = 'Pics/sad/sad3.jpg'
            break
            case 3: link = 'Pics/sad/sad4.jpg'
            break
            case 4: link = 'Pics/sad/sad5.jpg'
            break
            case 5: link = 'Pics/sad/sad6.jpg'
            break
            case 6: link = 'Pics/sad/sad7.jpg'
            break
            case 7: link = 'Pics/sad/sad8.jpg'
            break
            case 8: link = 'Pics/sad/sad9.jpg'
            break
            case 9: link = 'Pics/sad/sad10.jpg'
            break
            case 10: link = 'Pics/sad/sad11.jpg'
            break
        }
    }
    img.src = link;
}