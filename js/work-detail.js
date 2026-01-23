document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const workId = params.get('id');
  const work = works.find(w => w.id === workId);

  const mainContent = document.getElementById('work-detail-main-content');
  const pageTitle = document.getElementById('work-title');

  if (work) {
    // Set the page title
    pageTitle.textContent = `${work.title} - みづこのポートフォリオ`;

    // Create the HTML structure (Matching Main Page Style)
    const workHTML = `
      <div class="breadcrumb">
        <a href="../index.html">トップ</a> &gt; <a href="../works.html">動画一覧</a> &gt; <span>${work.title}</span>
      </div>

      <section class="video-header-section">
        <div class="video-header-top">
          <div class="video-header-main">
            <h2 class="video-title">${work.title}</h2>
            <div class="player-meta">
              <div class="meta-container">
                <span class="meta-item"><strong>投稿日:</strong> ${work.postedAt}</span>
                <span class="meta-item"><strong>再生:</strong> ${work.views.toLocaleString()}</span>
                <span class="meta-item"><strong>コメント:</strong> ${work.comments.toLocaleString()}</span>
                <span class="meta-item"><strong>カテゴリ:</strong> ${work.category}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="tag-list video-header-tags">
          ${work.tags.map(tag => `<a href="../works.html?tag=${encodeURIComponent(tag)}" class="tag">${tag}</a>`).join('')}
        </div>
      </section>

      <div class="main-layout-container">
        <section class="player-section">
          <div id="slideshow" class="player">
            <!-- Slideshow will be generated here -->
          </div>
        </section>
        <section id="comment-section" class="comment-section">
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
