const getDayName = days => {
  if (typeof days !== 'number') {
    console.log('err')
  }
  if (days > 0 && days < 8 === true) {
    let days = ['tus', 'wed', 'thr', 'frd', 'sut', 'sun', 'mon'];
    console.log ('все верно')
  } else {
    console.log('не верные данные')

  }
}

getDayName('tus')