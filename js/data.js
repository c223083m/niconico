const works = [
  {
    id: 'work-0',
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
    thumbnail: 'images/thumbnails/0.jpg',
    workImages: [
      'images/works/0/2.jpg',
      'images/works/0/3.jpg',
      'images/works/0/4.jpg',
      'images/works/0/5.jpg',
      'images/works/0/6.jpg',
      'images/works/0/7.jpg',
      'images/works/0/8.jpg',
      'images/works/0/9.png'
    ],
  },
  {
    id: 'work-1',
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
    thumbnail: 'images/thumbnails/1.png',
    workImages: [
      'images/works/1/2.png'
    ],
  },
  {
    id: 'work-2',
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
    thumbnail: 'images/thumbnails/2.jpg',
    workImages: [
      'images/works/2/2.png'
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
    title: 'AI画像生成のための便利ツール作ったった',
    views: 5678,
    comments: 123,
    postedAt: '2024/08/10',
    description: '生成したい画像のプロンプトをポチポチ押すだけで作成できるサイト。ボタンを押すと、似た意味の英単語をコンマ区切りで出力してくれます。プロンプトのコピー、履歴の保存、カテゴリーを追加できる機能なども搭載しています。',
    period: '約2ヶ月',
    links: [
      { name: 'GitHubリポジトリ', url: 'https://prompt-generate-site.netlify.app' }
    ],
    authorComment: [
      { title: '1. なぜこの作品を作ろうと思ったか', text: '卒業制作にAI画像生成の活用を検討しており、プロンプトを書くのが手間に思ったため、このツールを開発しました。' },
      { title: '2. こだわったポイント', text: 'サイトの使いやすさと直感的な操作性にこだわりました。ボタン一つで関連する英単語が表示されるため、初心者でも簡単にプロンプトを作成できます。' }
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Webサイト', 'AI'],
    category: 'Webサイト',
    thumbnail: 'images/thumbnails/4.png',
    workImages: [
      'images/works/4/2.png',
      'images/works/4/3.png',
      'images/works/4/4.png'
    ],
  },
  {
    id: 'work-5',
    title: 'ひとこと日記のすべてが分かる動画【iOSアプリ】',
    views: 10000,
    comments: 100,
    postedAt: '2025/11/20',
    description: '日々の出来事を「ひとこと」だけ記録する、シンプルさに特化したiOS日記アプリです。',
    period: '約1ヶ月',
    links: [
      { name: 'App Store (準備中)', url: '#' }
    ],
    authorComment: [
      { title: '制作の背景', text: '毎日書くのが大変な日記を、もっと気楽に続けられるようにという思いで開発しました。' },
      { title: '技術的なポイント', text: 'SwiftUIを使用し、iOSのネイティブな操作感を重視しました。データの保存にはCoreDataを使用しています。' }
    ],
    tags: ['iOS', 'Swift', 'SwiftUI', '個人開発'],
    category: 'iOSアプリ',
    thumbnail: 'images/thumbnails/5.jpg',
    workImages: [
      'images/works/5/2.jpg',
      'images/works/5/3.jpg',
      'images/works/5/4.jpg'
    ],
  },
  {
    id: 'work-6',
    title: '【Webサイト】ニコニコ動画風ポートフォリオ作ってみた',
    views: 1234,
    comments: 56,
    postedAt: '2026/01/21',
    description: 'ニコニコ動画をモチーフにしたポートフォリオサイトです。 HTML/CSS/JavaScriptで構築し、コメントや弾幕が流れる演出を取り入れています。',
    period: '約5時間',
    links: [
      { name: 'URL', url: 'https://c223083m.github.io/niconico/' }
    ],
    authorComment: [
      { title: '1. なぜこの作品を作ろうと思ったか', text: '自分のポートフォリオを作るにあたり、ただ作品を並べるだけでなく、サイト自体も一つの作品として見て面白いものにしたい、という思いから制作しました。' },
      { title: '2. こだわったポイント', text: 'ヘッダーのアニメーションや、プロフィールのデザインなど、細かいところまで遊び心を取り入れました。' },
      { title: '3. 苦労した点・次に活かしたい学び', text: 'スマホ版のレスポンシブ対応に苦労しました（汗）。上手く配置しないと読みづらくなってしまうので、レイアウトを試行錯誤しました。' }
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Webサイト'],
    category: 'Webサイト',
    thumbnail: 'images/thumbnails/6.png', 
    workImages: [
      'images/works/6/2.png',
      'images/works/6/3.png',
      'images/works/6/4.png',
      'images/works/6/5.png',
    ], 
  }
  // {
  //   id: 'work-7',
  //   title: '【共同開発】河合先生に感謝伝えてみた【Windows98風】',
  //   views: 400,
  //   comments: 40,
  //   postedAt: '2026/01/24',
  //   description: 'ゼミの友人と共同開発で制作したWindows98風のwebサイトです。',
  //   scope: '主にUI設計とデザインを担当。',
  //   period: '約1週間',
  //   authorComment: [
  //     { title: '作者コメント', text: '作者コメント' }
  //   ],
  //   tags: ['タグ7', 'タグ8'],
  //   category: 'その他',
  //   thumbnail: 'images/thumbnails/7.jpg',
  //   workImages: [
  //     'images/works/7/2.jpg',
  //     'images/works/7/3.jpg'
  //   ],
  // }
];