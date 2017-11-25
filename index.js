function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target')

}

function deepestChild() {
  let grand = document.querySelector('#grand-node')

  while (grand.querySelector('div')!== null) {
    grand = grand.querySelector('div')
  }
  return grand
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li')

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n
  }
  return lis
}
