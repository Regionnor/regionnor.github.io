var posts=["2024/02/17/Apple-ID/","2024/04/27/Gravatar/","2024/02/05/HEVC-video/","2024/02/05/Microsoft365-Yunmu/","2024/05/04/RSS/","2024/03/29/Trz7YRgAc/","2024/02/05/apple-wallpaper/","2024/08/08/chrome-parallel-download/","2024/02/01/hello-world/","2024/02/11/intel-aigc/","2024/04/12/ys4.6keys/","2024/02/07/minecraft/","2024/07/05/ys4.8keys/","2024/08/16/ys5.0keys/","2024/08/03/zzz1.1keys/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };