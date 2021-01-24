'use strict'

for (var i = 0; i <= 100; i++) {
    if ((i % 7 === 0)) {
        console.log('boom')
    } else if ((i + '').indexOf('7') > -1) {
        console.log('boom!!!!')
    } else {
        console.log(i)
    }

}

