document.addEventListener('DOMContentLoaded', () => {
  // --- DOM要素の取得 ---
  const worksListContainer = document.getElementById('works-list-container');
  const worksListTitle = document.getElementById('works-list-title');
  const clearFilterLink = document.getElementById('clear-filter-link');

  // --- クエリパラメータからタグを取得 ---
  const params = new URLSearchParams(window.location.search);
  const selectedTag = params.get('tag');

  /**
   * 作品カードのHTMLを生成する
   * @param {object} work - 作品オブジェクト
   * @returns {string} - 作品カードのHTML文字列
   */
  function createWorkCardHTML(work) {
    // タグのHTMLを生成 (最大5つ)
    const tagsHTML = work.tags.slice(0, 5).map(tag => 
      `<a href="works.html?tag=${encodeURIComponent(tag)}" class="work-card-tag">${escapeHTML(tag)}</a>`
    ).join('');

    // 説明文は削除 (要望により)
    
    return `
      <div class="work-card">
        <a href="works/work.html?id=${work.id}" class="work-card-thumbnail">
          <img src="${escapeHTML(work.thumbnail)}" alt="${escapeHTML(work.title)}" loading="lazy">
          <div class="work-card-overlay">
            <svg class="play-icon" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
          </div>
        </a>
        <div class="work-card-info">
          <a href="works/work.html?id=${work.id}">
            <h3 class="work-card-title">${escapeHTML(work.title)}</h3>
          </a>
          <div class="work-card-meta">
            <span>${work.postedAt}</span>
            <span>再生: ${work.views.toLocaleString()}</span>
            <span>コメント: ${work.comments.toLocaleString()}</span>
          </div>
          <!-- Description removed -->
          <div class="work-card-tags">
            ${tagsHTML}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * 作品リストを描画する
   * @param {Array<object>} worksToRender - 表示する作品の配列
   */
  function renderWorks(worksToRender) {
    if (!worksListContainer) return;

    if (worksToRender.length > 0) {
      worksListContainer.innerHTML = worksToRender.map(createWorkCardHTML).join('');
    } else {
      worksListContainer.innerHTML = '<p class="no-results">該当する作品はありません。</p>';
    }
  }

  /**
   * HTMLエスケープ用のヘルパー関数
   */
  function escapeHTML(str) {
    if (!str) return '';
    return str.toString().replace(/[&<>"']/g, match => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[match]));
  }


  // --- メイン処理 ---
  
  // 絞り込み処理
  const filteredWorks = selectedTag
    ? works.filter(work => work.tags.includes(selectedTag))
    : works;

  // タイトルと「解除」リンクの表示を更新
  if (selectedTag) {
    if (worksListTitle) {
      worksListTitle.textContent = `タグ: ${selectedTag}`;
    }
    if (clearFilterLink) {
      clearFilterLink.classList.remove('hidden');
    }
  }

  // 画面に描画
  renderWorks(filteredWorks);
});