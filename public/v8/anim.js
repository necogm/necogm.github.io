const
  ANIM_SPEED = 50,
  MAX_ANIMS = 50

function main() {
  nextIcon()
}

let iconList = [
  'address-card',
  'angle-double-up',
  'arrow-alt-circle-up',
  'asterisk',
  'barcode',
  'chart-line',
  'chart-bar',
  'bullhorn',
  'chart-area',
  'chevron-circle-up',
  'clipboard-list',
  'comment',
  'database',
  'bolt',
  'check-square',
  'cube',
  'dice-five'
]

// function anim() {
//   console.log('anim')
//   let elem = document.getElementById("icon1")
//   elem.classList.remove('fa-arrow-circle-up')
//   elem.classList.add('fa-arrow-circle-down')
// }

let counter = 0
let fullCount = 0
let lastIcon

function nextIcon() {
  let elem = document.getElementById("icon1")
  if (lastIcon) {
    elem.classList.remove(lastIcon)
  }
  counter += 1
  fullCount += 1
  if (counter >= iconList.length) {
    counter = 0
  }
  lastIcon = iconList[counter]
  lastIcon = 'fa-' + lastIcon
  elem.classList.add(lastIcon)
  // console.log(counter, lastIcon)

  // let klasses = elem.classList
  // klasses.map( klass => {
  //   if (k.match(/^fa-/) {
  //     elem.classList.remove(klass)
  //   })
  // }

  if (fullCount > MAX_ANIMS) {
    endAnim()
  } else {
    setTimeout(nextIcon, ANIM_SPEED)
  }

}

function endAnim() {
  let elem = document.getElementById("icon1")
  elem.classList.remove(lastIcon)
  elem.classList.add('fa-chevron-circle-up')
}
