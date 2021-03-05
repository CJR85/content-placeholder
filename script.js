const header = document.getElementById('header'),
  title = document.getElementById('title'),
  excerpt = document.getElementById('excerpt'),
  profile_img = document.getElementById('profile_img'),
  name = document.getElementById('name'),
  date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg'),
  animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1667&q=80"alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, et.';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = 'John Doe';
  date.innerHTML = 'Mar 05, 2021';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
