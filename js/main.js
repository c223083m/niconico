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

  // 汎用コメント（スライド切り替え時にランダムで流す）
  const burstComments = [
    'うぽつ', '88888888', 'おおおお', 'すげえええ', 'きれい', 
    '見入ってしまう', 'これはいいものだ', 'GJ', '期待', 'wktk',
    '神動画', 'マイリス余裕', 'もっと評価されるべき', '才能の無駄遣い',
    '野生のプロ', 'ニコニコ技術部', 'これは伸びる', '初見', '！？',
    '雰囲気あるなぁ', '配色すき', '動きがなめらか', '詳細プリーズ'
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
  
  function addDanmaku(text) {
    if (!player) return;
    const danmakuElement = document.createElement('span');
    danmakuElement.className = 'danmaku';
    danmakuElement.textContent = escapeHTML(text);
    const playerHeight = player.clientHeight;
    
    // 配置位置（高さ）をランダムに
    danmakuElement.style.top = `${Math.random() * (playerHeight - 40)}px`;
    
    // 流れる速度を少しランダムに（7s 〜 12s）
    const duration = 7 + Math.random() * 5;
    danmakuElement.style.animationDuration = `${duration}s`;

    danmakuElement.addEventListener('animationend', () => {
      danmakuElement.remove();
    });
    player.appendChild(danmakuElement);
  }

  // スライド切り替え時にコメントをまとめて流す
  function flowCommentsBurst() {
    // 3〜6個のコメントをランダムに選んで流す
    const count = 3 + Math.floor(Math.random() * 4);
    
    for (let i = 0; i < count; i++) {
        const text = burstComments[Math.floor(Math.random() * burstComments.length)];
        // タイミングをずらして流す (0ms 〜 2000ms の遅延)
        setTimeout(() => {
            addDanmaku(text);
        }, Math.random() * 2000);
    }
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
    addDanmaku(newComment.text); // 即座に流す
    
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
      // data.js に新しく書いた「thumbnail」のパスと、作品詳細ページへのリンク、タイトルを渡す
      const sliderItems = works.map(work => ({
        src: work.thumbnail,
        link: `works/work.html?id=${work.id}`,
        title: work.title
      }));
      
      const topSlider = new SimpleSlider('top-slideshow', sliderItems, {
        // スライド切り替え時のコールバック
        onSlideChange: (index, item) => {
            flowCommentsBurst();
        }
      });
      
      // 初回のコメント流し
      flowCommentsBurst();

      setInterval(() => {
        topSlider.next();
      }, 5000);
    }
  }

  // --- イベントリスナーの設定 ---
  if (commentForm) {
    commentForm.addEventListener('submit', handleCommentSubmit);
  }

  // --- 初期化処理の実行 ---
  loadComments();
  initializeTopSlideshow();
  // initializeDanmakuLoop(); // 初期ループは廃止し、スライド連動に統合

});