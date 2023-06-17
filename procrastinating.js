function changeImage() {
    var img = document.getElementById('pic');
    var x = Math.floor(Math.random() * 15)
    var y = img.src
    var link = ''
    switch(x){
        case 0: link = 'Pics/hocbai/hanhocbai.jpg'
        break
        case 1: link = 'Pics/hocbai/hanhocbai2.jpg'
        break
        case 2: link = 'Pics/hocbai/hanhocbai3.jpg'
        break
        case 3: link = 'Pics/hocbai/hanhocbai4.jpg'
        break
        case 4: link = 'Pics/hocbai/hanhocbai5.jpg'
        break
        case 5: link = 'Pics/hocbai/hanhocbai6.jpg'
        break
        case 6: link = 'Pics/hocbai/hanhocbai7.jpg'
        break
        case 7: link = 'Pics/hocbai/hanhocbai8.jpg'
        break
        case 8: link = 'Pics/hocbai/hanhocbai9.jpg'
        break
        case 9: link = 'Pics/hocbai/hanhocbai10.jpg'
        break
        case 10: link = 'Pics/hocbai/hanhocbai11.jpg'
        break
        case 11: link = 'Pics/hocbai/hanhocbai12.jpg'
        break
        case 12: link = 'Pics/hocbai/hanhocbai13.jpg'
        break
        case 13: link = 'Pics/hocbai/hanhocbai14.jpg'
        break
        case 14: link = 'Pics/hocbai/hanhocbai15.jpg'
        break
    }
    img.src = link;
    if (y == img.src) {
        var x = Math.floor(Math.random() * 15)
        switch(x){
            case 0: link = 'Pics/hocbai/hanhocbai.jpg'
            break
            case 1: link = 'Pics/hocbai/hanhocbai2.jpg'
            break
            case 2: link = 'Pics/hocbai/hanhocbai3.jpg'
            break
            case 3: link = 'Pics/hocbai/hanhocbai4.jpg'
            break
            case 4: link = 'Pics/hocbai/hanhocbai5.jpg'
            break
            case 5: link = 'Pics/hocbai/hanhocbai6.jpg'
            break
            case 6: link = 'Pics/hocbai/hanhocbai7.jpg'
            break
            case 7: link = 'Pics/hocbai/hanhocbai8.jpg'
            break
            case 8: link = 'Pics/hocbai/hanhocbai9.jpg'
            break
            case 9: link = 'Pics/hocbai/hanhocbai10.jpg'
            break
            case 10: link = 'Pics/hocbai/hanhocbai11.jpg'
            break
            case 11: link = 'Pics/hocbai/hanhocbai12.jpg'
            break
            case 12: link = 'Pics/hocbai/hanhocbai13.jpg'
            break
            case 13: link = 'Pics/hocbai/hanhocbai14.jpg'
            break
            case 14: link = 'Pics/hocbai/hanhocbai15.jpg'
            break
        }
    }
    img.src = link;
}