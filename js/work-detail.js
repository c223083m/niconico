document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const workId = params.get('id');
  const work = works.find(w => w.id === workId);

  const mainContent = document.getElementById('work-detail-main-content');
  const pageTitle = document.getElementById('work-title');

  if (work) {
    // Set the page title
    pageTitle.textContent = `${work.title} - みづこのポートフォリオ`;

    // Create the HTML structure
    const workHTML = `
      <div class="breadcrumb">
        <a href="../index.html">トップ</a> &gt; <a href="../works.html">動画一覧</a> &gt; <span>${work.title}</span>
      </div>
      <h2 class="work-detail-title">${work.title}</h2>

      <div class="main-layout-container">
        <section class="player-section">
          <div id="slideshow" class="player">
            <!-- Slideshow will be generated here -->
          </div>
        </section>
        <section id="comment-section" class="comment-section">
          <h3>作品概要</h3>
          <div id="comment-list" class="comment-list">
            <div class="work-detail-main">
              <h3>作品説明</h3>
              <p>${work.description}</p>
              ${work.scope ? `<h3>担当範囲</h3><p>${work.scope}</p>` : ''}
              ${work.period ? `<h3>制作期間</h3><p>${work.period}</p>` : ''}
              ${work.links ? `<h3>リンク</h3><ul class="link-list">${work.links.map(link => `<li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.name}</a></li>`).join('')}</ul>` : ''}
            </div>
            ${work.authorComment ? `
            <div class="author-comment-section">
              <h3>作者コメント</h3>
              <div class="comment-thread">
                ${work.authorComment.map(comment => `<p><strong>${comment.title}</strong><br>${comment.text}</p>`).join('')}
              </div>
            </div>
            ` : ''}
          </div>
        </section>
      </div>

      <div class="video-details-grid">
        <aside class="work-detail-aside">
          <div class="meta-box">
            <h4>投稿情報</h4>
            <p>投稿日: ${work.postedAt}</p>
            <p>カテゴリ: ${work.category}</p>
            <h4>タグ</h4>
            <div class="tag-list">
              ${work.tags.map(tag => `<a href="../works.html?tag=${encodeURIComponent(tag)}" class="tag">${tag}</a>`).join('')}
            </div>
          </div>
        </aside>
      </div>
    `;

    mainContent.innerHTML = workHTML;

    // Initialize the slider
    const thumbnailImage = `../${work.thumbnail}`;
    const slideImages = work.workImages.map(path => `../${path}`);
    const allImages = [thumbnailImage, ...slideImages].map(src => ({ src, link: 'javascript:void(0)' }));
    new SimpleSlider('slideshow', allImages);

  } else {
    // Handle case where work is not found
    mainContent.innerHTML = '<p>指定された作品は見つかりませんでした。</p>';
    pageTitle.textContent = '作品が見つかりません - みづこのポートフォリオ';
  }
});
