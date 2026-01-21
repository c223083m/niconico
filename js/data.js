const works = [
  {
    id: 'work-1',
    title: '【Webサイト】ニコニコ動画風ポートフォリオ作ってみた',
    views: 1234,
    comments: 56,
    postedAt: '2025/12/17',
    description: 'ニコニコ動画風UIをモチーフにしたポートフォリオサイトです。',
    scope: '企画・デザイン・実装すべて',
    period: '約5時間',
    links: [
      { name: 'URL', url: '#' }
    ],
    authorComment: [
      { title: '1. なぜこの作品を作ろうと思ったか', text: '自分のポートフォリオを作るにあたり、ただ作品を並べるだけでなく、サイト自体も一つの作品として見て面白いものにしたい、という思いから制作しました。昔から慣れ親しんだニコニコ動画のUIは、情報量が多くてもなぜかワクワクする不思議な魅力があると感じており、その雰囲気を再現することに挑戦しました。' },
      { title: '2. こだわったポイント', text: 'ダークな背景に映えるアクセントカラーの選定や、コメントや弾幕が流れるアニメーションなど、「それっぽさ」の演出にこだわりました。特に弾幕は、見ているだけでも楽しめるように、いくつかのサンプルコメントを常に流すようにしています。' },
      { title: '3. 苦労した点・次に活かしたい学び', text: '当初はReact(Next.js)で開発を進めていましたが、ビルド周りのエラーに苦戦し、最終的にシンプルなHTML/CSS/JS構成に切り替えました。これにより、フレームワークの複雑さから解放され、より本質的な機能実装に集中できました。Webの基本的な技術の重要性を再認識する良い機会となりました。' }
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Webサイト',
    thumbnail: 'images/thumbnails/1.jpg',
    workImages: [
      'images/works/1/2.jpg',
      'images/works/1/3.jpg',
      'images/works/1/4.jpg'
    ],
  },
  {
    id: 'work-2',
    title: '【Unity】3Dアクションゲーム「NICONICO ADVENTURE」',
    views: 5678,
    comments: 123,
    postedAt: '2024/08/10',
    description: 'Unityで制作した、広大な世界を冒険する3Dアクションゲーム。',
    scope: 'ゲームデザイン、プログラミング',
    period: '約2ヶ月',
    links: [
      { name: 'GitHubリポジトリ', url: '#' }
    ],
    authorComment: [
      { title: '1. なぜこの作品を作ろうと思ったか', text: 'ゼミの課題で、Unityを使ったオリジナルゲームを制作しました。「触っていて楽しい」をテーマに、キャラクターを動かすこと自体の気持ちよさを追求しました。' },
      { title: '2. こだわったポイント', text: 'キャラクターのジャンプや移動のパラメータを細かく調整し、爽快感のある操作性を目指しました。また、ステージのギミックもプレイヤーを飽きさせないように、多様なバリエーションを考えました。' }
    ],
    tags: ['Unity', 'C#', 'ゲームデザイン', '3D'],
    category: 'ゲーム',
    thumbnail: 'images/thumbnails/2.png',
    workImages: [
      'images/works/2/2.png',
      'images/works/2/3.png',
      'images/works/2/4.png'
    ],
  },
  {
    id: 'work-3',
    title: '【Blender】オリジナルキャラクター「ニコニコちゃん」',
    views: 987,
    comments: 32,
    postedAt: '2024/05/01',
    description: 'Blenderで作成したVTuber活動も可能なオリジナル3Dモデルです。',
    scope: 'デザイン、モデリング、リギング',
    period: '約1ヶ月',
    links: [],
    authorComment: [
      { title: '1. なぜこの作品を作ろうと思ったか', text: '自分の手でキャラクターを生み出してみたい、という思いから3Dモデリングの学習を始め、その集大成として制作しました。愛着のあるニコニコ文化の要素をデザインに盛り込んでいます。' }
    ],
    tags: ['Blender', '3Dモデリング', 'キャラクターデザイン'],
    category: '3Dモデル',
    thumbnail: 'images/thumbnails/3.png',
    workImages: [
      'images/works/3/2.png',
      'images/works/3/3.png',
      'images/works/3/4.png',
      'images/works/3/5.png',
      'images/works/3/6.png',
      'images/works/3/7.png'
    ],
  },
  {
    id: 'work-4',
    title: '新しい作品4',
    views: 100,
    comments: 10,
    postedAt: '2025/12/17',
    description: '新しい作品の説明です。',
    scope: '担当範囲',
    period: '制作期間',
    links: [],
    authorComment: [
      { title: '作者コメント', text: '作者コメント' }
    ],
    tags: ['タグ1', 'タグ2'],
    category: 'その他',
    thumbnail: 'images/thumbnails/4.jpg',
    workImages: [
      'images/works/4/2.png'
    ],
  },
  {
    id: 'work-5',
    title: '新しい作品5',
    views: 200,
    comments: 20,
    postedAt: '2025/12/17',
    description: '新しい作品の説明です。',
    scope: '担当範囲',
    period: '制作期間',
    links: [],
    authorComment: [
      { title: '作者コメント', text: '作者コメント' }
    ],
    tags: ['タグ3', 'タグ4'],
    category: 'その他',
    thumbnail: 'images/thumbnails/5.png',
    workImages: [
      'images/works/5/2.png'
    ],
  },
  {
    id: 'work-6',
    title: '新しい作品6',
    views: 300,
    comments: 30,
    postedAt: '2025/12/17',
    description: '新しい作品の説明です。',
    scope: '担当範囲',
    period: '制作期間',
    links: [],
    authorComment: [
      { title: '作者コメント', text: '作者コメント' }
    ],
    tags: ['タグ5', 'タグ6'],
    category: 'その他',
    thumbnail: 'images/thumbnails/6.jpg',
    workImages: [
      'images/works/6/2.jpg',
      'images/works/6/3.jpg',
      'images/works/6/4.jpg',
      'images/works/6/5.jpg',
      'images/works/6/6.jpg',
      'images/works/6/7.jpg',
      'images/works/6/8.jpg',
      'images/works/6/9.png'
    ],
  },
];
