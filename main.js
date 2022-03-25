import posts from './posts.js'

const postsEl = document.querySelector('.posts'); // 글목록 컨테이너
const pagePerposts = 3; // 페이지당 글목록 수
// 총 페이지수(총 글수 / 페이지당 글 수)
const pages = posts.length / pagePerposts;  
// 총 POST수가 9개고 한 화면에 POST가 3개씩 출력되면 페이지수는 3개
console.log(pages);
const pager = document.querySelector('.pager');

// POST 출력
function showItem(num) {
  postsEl.innerHTML = '';
  for(let i = pagePerposts*num; i < pagePerposts*num+3;i++) {
    const {title, text, date} = posts[i];
    const html = `
      <li>
        <p>No: ${i}</p>
        <h4>${title}</h4>
        <p>${text}</p>
        <p class="date">${date.toLocaleDateString()}</p>
      </li>
    `    
    postsEl.innerHTML += html
  }
}

// PAGER
for(let i = 0; i < pages; i++) {
  const span = document.createElement('span');
  span.addEventListener('click', ()=> {
    showItem(i);
  })
  span.innerHTML = `[${i+1}]`
  document.querySelector('.pager').appendChild(span);
}

// 최초 글목록 표시
showItem(0)

