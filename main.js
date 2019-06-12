const sideDrawerMenu = document.querySelector('.side-drawer__menu');
const sideDrawer = document.querySelector('.side-drawer');

const backdrop = document.getElementById('backdrop');

const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');

const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');
const content3 = document.getElementById('content-3');

let activeItem = null;

function getClickedMenuItemId(e) {
  let { id } = e.target;

  if (!id) {
    id = e.target.parentNode.id;
  }

  return id;
}

function toggleSideDrawer(e) {
  const id = getClickedMenuItemId(e);

  if (!activeItem) {
    activeItem = id;
    sideDrawer.classList.remove('closed');
    backdrop.classList.add('backdrop');
    document.querySelector('body').style.overflow = 'hidden';
  } else if (activeItem === id) {
    activeItem = null;
    sideDrawer.classList.add('closed');
    backdrop.classList.remove('backdrop');
    document.querySelector('body').style.overflow = 'auto';
  } else {
    activeItem = id;
  }

  console.log(id, activeItem);
}

function toggleSideDrawerContent(e) {
  const id = getClickedMenuItemId(e);

  console.log(id);

  switch (id) {
    case 'menu-item-1':
      content1.classList.remove('display-none');
      content2.classList.add('display-none');
      content3.classList.add('display-none');
      break;
    case 'menu-item-2':
      content1.classList.add('display-none');
      content2.classList.remove('display-none');
      content3.classList.add('display-none');
      break;
    case 'menu-item-3':
      content1.classList.add('display-none');
      content2.classList.add('display-none');
      content3.classList.remove('display-none');
      break;
  }
}

sideDrawerMenu.addEventListener('click', toggleSideDrawer);

menuItem1.addEventListener('click', (e) => toggleSideDrawerContent(e, 1));
menuItem2.addEventListener('click', (e) => toggleSideDrawerContent(e, 2));
menuItem3.addEventListener('click', (e) => toggleSideDrawerContent(e, 3));

