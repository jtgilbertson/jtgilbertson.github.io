// Draggable Containers
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
const dragableHeaderBtn = document.querySelectorAll('.draggable-header-btn')

// Container Content
var containerContent1 = document.getElementById('cc1')
var containerContent2 = document.getElementById('cc2')
var containerContent3 = document.getElementById('cc3')
var containerContent4 = document.getElementById('cc4')
var containerContent5 = document.getElementById('cc5')
var containerContent6 = document.getElementById('cc6')
var containerContent7 = document.getElementById('cc7')
var containerContent8 = document.getElementById('cc8')

// Container Headers
var draggableHeaderButton1 = document.getElementById('dhb1')
var draggableHeaderButton2 = document.getElementById('dhb2')
var draggableHeaderButton3 = document.getElementById('dhb3')
var draggableHeaderButton4 = document.getElementById('dhb4')
var draggableHeaderButton5 = document.getElementById('dhb5')
var draggableHeaderButton6 = document.getElementById('dhb6')
var draggableHeaderButton7 = document.getElementById('dhb7')
var draggableHeaderButton8 = document.getElementById('dhb8')

// Pop Up
var popUp = document.getElementById('pop-up')

// Dropdown Navigations Divs
var navDiv1 = document.getElementById('nav-div-1')
var navDiv2 = document.getElementById('nav-div-2')
var navDiv3 = document.getElementById('nav-div-3')
var navDiv4 = document.getElementById('nav-div-4')





// Changes opacity of the draggable elements while dragging
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

// Gives elements the ability to be dragged/dropped
containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

// Allows you to drag/drop precisely above or under each element in container
function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

// Opens & Closes Container 1
function closeContainer() {
  if (containerContent1.style.display !== 'none') {
    containerContent1.style.display = 'none'
    draggableHeaderButton1.textContent = '+'
  } else {
    containerContent1.style.display = 'block';
    draggableHeaderButton1.textContent = '-'
  }
}

// Opens & Closes Container 2
function closeContainer2() {
  if (containerContent2.style.display !== 'none') {
    containerContent2.style.display = 'none'
    draggableHeaderButton2.textContent = '+'
  } else {
    containerContent2.style.display = 'block';
    draggableHeaderButton2.textContent = '-'
  }
}

// Opens & Closes Container 3
function closeContainer3() {
  if (containerContent3.style.display !== 'none') {
    containerContent3.style.display = 'none'
    draggableHeaderButton3.textContent = '+'
  } else {
    containerContent3.style.display = 'block';
    draggableHeaderButton3.textContent = '-'
  }
}

// Opens & Closes Container 4
function closeContainer4() {
  if (containerContent4.style.display !== 'block') {
    containerContent4.style.display = 'block'
    draggableHeaderButton4.textContent = '-'
  } else {
    containerContent4.style.display = 'none';
    draggableHeaderButton4.textContent = '+'
  }
}

// Opens & Closes Container 5
function closeContainer5() {
  if (containerContent5.style.display !== 'none') {
    containerContent5.style.display = 'none'
    draggableHeaderButton5.textContent = '+'
  } else {
    containerContent5.style.display = 'block';
    draggableHeaderButton5.textContent = '-'
  }
}

// Opens & Closes Container 6
function closeContainer6() {
  if (containerContent6.style.display !== 'none') {
    containerContent6.style.display = 'none'
    draggableHeaderButton6.textContent = '+'
  } else {
    containerContent6.style.display = 'block';
    draggableHeaderButton6.textContent = '-'
  }
}

// Opens & Closes Container 7
function closeContainer7() {
  if (containerContent7.style.display !== 'none') {
    containerContent7.style.display = 'none'
    draggableHeaderButton7.textContent = '+'
  } else {
    containerContent7.style.display = 'block';
    draggableHeaderButton7.textContent = '-'
  }
}

// Opens & Closes Container 8
function closeContainer8() {
  if (containerContent8.style.display !== 'block') {
    containerContent8.style.display = 'block'
    draggableHeaderButton8.textContent = '-'
  } else {
    containerContent8.style.display = 'none';
    draggableHeaderButton8.textContent = '+'
  }
} 





// Opens & Closes Change Theme PopUp
function popUpDisplay() {
  if (popUp.style.display !== 'block') {
    popUp.style.display = 'block'
    document.getElementById('filter').style.visibility = 'visible'
    document.querySelector('*').style.overflow = 'hidden'
  } else {
    popUp.style.display = 'none';
    document.getElementById('filter').style.visibility = 'hidden'
    document.querySelector('*').style.overflow = 'auto'
  }
}

// Detects background selection value from Change Theme PopUp
function bgVal() {
  backgroundValue = document.getElementById('background-value').value
  console.log(backgroundValue)
}

// This uses the value detected in the function above and sets the background
function changeBg() {
  console.log(backgroundValue)
  if (backgroundValue == 1) {
    document.body.style.backgroundImage="none";
    document.getElementById('main-container-header').style.background = '#192743'
    document.getElementById('first-link').style.background = '#192743'
    document.getElementById('pop-up-btn').style.background = '#192743'
    document.getElementById('close-btn').style.background = '#192743'
    document.getElementById('footer').style.background = '#192743'
  } else if (backgroundValue == 2) {
      document.body.style.backgroundImage="url(images/background-image-2.jpg)";
      document.getElementById('main-container-header').style.background = '#8D5301'
      document.getElementById('first-link').style.background = '#8D5301'
      document.getElementById('pop-up-btn').style.background = '#8D5301'
      document.getElementById('close-btn').style.background = '#8D5301'
      document.getElementById('footer').style.background = '#8D5301'
  } else if (backgroundValue == 3) {
      document.body.style.backgroundImage="url(images/background-image-3.jpg)";
      document.getElementById('main-container-header').style.background = '#3B5C4B'
      document.getElementById('first-link').style.background = '#3B5C4B'
      document.getElementById('pop-up-btn').style.background = '#3B5C4B'
      document.getElementById('close-btn').style.background = '#3B5C4B'
      document.getElementById('footer').style.background = '#3B5C4B'
  } else if (backgroundValue == 4) {
      document.body.style.backgroundImage="url(images/background-image-4.jpg)";
      document.getElementById('main-container-header').style.background = '#BE4903'
      document.getElementById('first-link').style.background = '#BE4903'
      document.getElementById('pop-up-btn').style.background = '#BE4903'
      document.getElementById('close-btn').style.background = '#BE4903'
      document.getElementById('footer').style.background = '#BE4903'
  } else if (backgroundValue == 5) {
      document.body.style.backgroundImage="url(images/background-image-5.jpg)";
      document.getElementById('main-container-header').style.background = '#8F1723'
      document.getElementById('first-link').style.background = '#8F1723'
      document.getElementById('pop-up-btn').style.background = '#8F1723'
      document.getElementById('close-btn').style.background = '#8F1723'
      document.getElementById('footer').style.background = '#8F1723'
  } else if (backgroundValue == 6) {
      document.body.style.backgroundImage="url(images/background-image-6.jpg)";
      document.getElementById('main-container-header').style.background = '#024868'
      document.getElementById('first-link').style.background = '#024868'
      document.getElementById('pop-up-btn').style.background = '#024868'
      document.getElementById('close-btn').style.background = '#024868'
      document.getElementById('footer').style.background = '#024868'
  } else if (backgroundValue == 7) {
      document.body.style.backgroundImage="url(images/background-image-7.jpg)";
      document.getElementById('main-container-header').style.background = '#044542'
      document.getElementById('first-link').style.background = '#044542'
      document.getElementById('pop-up-btn').style.background = '#044542'
      document.getElementById('close-btn').style.background = '#044542'
      document.getElementById('footer').style.background = '#044542'
  } else if (backgroundValue == 8) {
      document.body.style.backgroundImage="url(images/background-image-1.jpg)";
      document.getElementById('main-container-header').style.background = '#192743'
      document.getElementById('first-link').style.background = '#192743'
      document.getElementById('pop-up-btn').style.background = '#192743'
      document.getElementById('close-btn').style.background = '#192743'
      document.getElementById('footer').style.background = '#192743'
  } else if (backgroundValue == 9) {
      document.body.style.backgroundImage="url(images/background-image-8.jpg)";
      document.getElementById('main-container-header').style.background = '#B30137'
      document.getElementById('first-link').style.background = '#B30137'
      document.getElementById('pop-up-btn').style.background = '#B30137'
      document.getElementById('close-btn').style.background = '#B30137'
      document.getElementById('footer').style.background = '#B30137'
    } else if (backgroundValue == 10) {
      document.body.style.backgroundImage="url(images/background-image-9.jpg)";
      document.getElementById('main-container-header').style.background = '#C09563'
      document.getElementById('first-link').style.background = '#C09563'
      document.getElementById('pop-up-btn').style.background = '#C09563'
      document.getElementById('close-btn').style.background = '#C09563'
      document.getElementById('footer').style.background = '#C09563'
    }
}





//Display NAV MAIN Block
function displayNavMenu1() {
  navDiv1.style.visibility = 'visible'
  navDiv2.style.visibility = 'hidden'
  navDiv3.style.visibility = 'hidden'
  navDiv4.style.visibility = 'hidden'
}

//Display NAV STUDENT SERVICES Block
function displayNavMenu2() {
  navDiv1.style.visibility = 'hidden'
  navDiv2.style.visibility = 'visible'
  navDiv3.style.visibility = 'hidden'
  navDiv4.style.visibility = 'hidden'
}

//Display NAV RESEARCH Block
function displayNavMenu3() {
  navDiv1.style.visibility = 'hidden'
  navDiv2.style.visibility = 'hidden'
  navDiv3.style.visibility = 'visible'
  navDiv4.style.visibility = 'hidden'
}

//Display NAV MY INFO Block
function displayNavMenu4() {
  navDiv1.style.visibility = 'hidden'
  navDiv2.style.visibility = 'hidden'
  navDiv3.style.visibility = 'hidden'
  navDiv4.style.visibility = 'visible'
}

// Closes NAV Blocks
function closeNavMenu() {
  navDiv1.style.visibility = 'hidden'
  navDiv2.style.visibility = 'hidden'
  navDiv3.style.visibility = 'hidden'
  navDiv4.style.visibility = 'hidden'
}





// Countdown Timer For Inactivity
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 60,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};
