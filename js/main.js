document.addEventListener('DOMContentLoaded', () => {

  // --- DOM要素の取得 ---
  const player = document.getElementById('player');
  const commentForm = document.getElementById('comment-form');
  const nicknameInput = document.getElementById('nickname-input');
  const commentInput = document.getElementById('comment-input');
  const commentList = document.getElementById('comment-list');
  const commentCountSpan = document.getElementById('comment-count');

  // --- 定数と変数 ---
  const COMMENTS_KEY = 'niconico-portfolio-comments';
  let comments = [];

  // --- サンプルコメント ---
  const sampleComments = [
    { id: 1, nickname: '名無しさん', text: 'wktk' },
    { id: 2, nickname: '名無しさん', text: 'うぽつ' },
    { id: 3, nickname: '名無しさん', text: '8888888888888888' },
    { id: 4, nickname: '名無しさん', text: '河合ゼミ' },
    { id: 5, nickname: '名無しさん', text: 'ぬるぬる動くよ' },
  ];

  // --- 関数定義 ---

  function loadComments() {
    let storedComments;
    try {
      storedComments = localStorage.getItem(COMMENTS_KEY);
    } catch (e) {
      console.error('localStorageへのアクセスがブロックされている可能性があります。', e);
      comments = [...sampleComments];
      renderCommentList();
      updateCommentCount();
      return;
    }
    
    if (storedComments) {
      comments = JSON.parse(storedComments);
    } else {
      comments = [...sampleComments];
      saveComments();
    }
    renderCommentList();
    updateCommentCount();
  }

  function saveComments() {
    try {
      localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
    } catch (e) {
      console.error('localStorageへの保存に失敗しました。', e);
    }
  }

  function renderCommentList() {
    if (!commentList) return;
    commentList.innerHTML = '';
    comments.slice().reverse().forEach(comment => {
      const commentElement = document.createElement('div');
      commentElement.className = 'comment-item';
      commentElement.innerHTML = `
        <span class="comment-nickname">${escapeHTML(comment.nickname)}:</span>
        <span class="comment-text">${escapeHTML(comment.text)}</span>
      `;
      commentList.appendChild(commentElement);
    });
  }
  
  function addDanmaku(comment) {
    if (!player) return;
    const danmakuElement = document.createElement('span');
    danmakuElement.className = 'danmaku';
    danmakuElement.textContent = escapeHTML(comment.text);
    const playerHeight = player.clientHeight;
    danmakuElement.style.top = `${Math.random() * (playerHeight - 40)}px`;
    danmakuElement.addEventListener('animationend', () => {
      danmakuElement.remove();
    });
    player.appendChild(danmakuElement);
  }

  function updateCommentCount() {
    if (commentCountSpan) {
      commentCountSpan.textContent = comments.length;
    }
  }

  function handleCommentSubmit(e) {
    e.preventDefault();
    const nickname = nicknameInput.value.trim() || '名無しさん';
    const text = commentInput.value.trim();
    if (!text) return;
    const newComment = { id: Date.now(), nickname, text };
    
    comments.push(newComment);
    addDanmaku(newComment);
    
    const commentElement = document.createElement('div');
    commentElement.className = 'comment-item';
    commentElement.innerHTML = `
      <span class="comment-nickname">${escapeHTML(newComment.nickname)}:</span>
      <span class="comment-text">${escapeHTML(newComment.text)}</span>
    `;
    commentList.prepend(commentElement);

    updateCommentCount();
    saveComments();
    commentInput.value = '';
  }

  function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"']/g, match => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[match]));
  }

  function initializeTopSlideshow() {
    if (typeof works !== 'undefined' && works.length > 0) {
      // data.js に新しく書いた「thumbnail」のパスをそのまま使う
      const thumbnailUrls = works.map(work => work.thumbnail);
      
      const topSlider = new SimpleSlider('top-slideshow', thumbnailUrls);
      
      setInterval(() => {
        topSlider.next();
      }, 5000);
    }
  }

  function initializeDanmakuLoop() {
    // ページ読み込み時に既存のコメントを一度だけ、少しずつずらして流す
    comments.forEach((comment, index) => {
        setTimeout(() => {
            addDanmaku(comment);
        }, index * 2500); // 2.5秒ずつずらす
    });
  }

  // --- イベントリスナーの設定 ---
  if (commentForm) {
    commentForm.addEventListener('submit', handleCommentSubmit);
  }

  // --- 初期化処理の実行 ---
  loadComments();
  initializeTopSlideshow();
  initializeDanmakuLoop();

});