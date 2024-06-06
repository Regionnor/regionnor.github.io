var posts=["Apple-ID/","HEVC-video/","RSS/","Gravatar/","Microsoft365-Yunmu/","Trz7YRgAc/","apple-wallpaper/","bing-wallpapers/","hello-world/","intel-aigc/","yuanshen-4.6-keys/","minecraft/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };