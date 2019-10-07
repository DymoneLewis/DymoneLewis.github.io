const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true,
  audio: [
    {
      name: '对的时间点',
      artist: 'JJ Lin',
      url: 'https://dymone-1300351472.cos.ap-beijing.myqcloud.com/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%AF%B9%E7%9A%84%E6%97%B6%E9%97%B4%E7%82%B9%20%5Bmqms2%5D.flac',
      cover: 'https://dymone-1300351472.cos.ap-beijing.myqcloud.com/bg4-cropped.jpg',
    },
    {
      name: '不能说的秘密(live)',
      artist: 'JJ Lin',
      url: 'https://dymone-1300351472.cos.ap-beijing.myqcloud.com/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E4%B8%8D%E8%83%BD%E8%AF%B4%E7%9A%84%E7%A7%98%E5%AF%86%20(Live)%20%5Bmqms2%5D.mp3',
      cover: 'https://dymone-1300351472.cos.ap-beijing.myqcloud.com/bg4-cropped.jpg',
    },
    {
      name: '爱情多恼河(live)',
      artist: 'JJ Lin',
      url: 'https://dymone-1300351472.cos.ap-beijing.myqcloud.com/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E7%88%B1%E6%83%85%E5%A4%9A%E6%81%BC%E6%B2%B3%20(Live)%20%5Bmqms2%5D.mp3',
      cover: 'https://dymone-1300351472.cos.ap-beijing.myqcloud.com/bg4-cropped.jpg',
    },
    {
      name: '知足(live)',
      artist: 'JJ Lin',
      url: 'https://dymone-1300351472.cos.ap-beijing.myqcloud.com/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E7%9F%A5%E8%B6%B3%20(Live)%20%5Bmqms2%5D.mp3',
      cover: 'https://dymone-1300351472.cos.ap-beijing.myqcloud.com/bg4-cropped.jpg',
    },
    {
      name: '雪落下的声音(live)',
      artist: 'JJ Lin',
      url: 'https://dymone-1300351472.cos.ap-beijing.myqcloud.com/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E9%9B%AA%E8%90%BD%E4%B8%8B%E7%9A%84%E5%A3%B0%E9%9F%B3%20(Live)%20%5Bmqms2%5D.mp3',
      cover: 'https://dymone-1300351472.cos.ap-beijing.myqcloud.com/bg4-cropped.jpg',
    },
    {
      name: '江南(live)',
      artist: 'JJ Lin',
      url: 'https://dymone-1300351472.cos.ap-beijing.myqcloud.com/%E6%9E%97%E5%BF%86%E8%8E%B2%26%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%B1%9F%E5%8D%97%20(Live)%20%5Bmqms2%5D.mp3',
      cover: 'https://dymone-1300351472.cos.ap-beijing.myqcloud.com/bg4-cropped.jpg',
    }
  ]
});