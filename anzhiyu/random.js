var posts=["Apple-ID/","Gravatar/","Microsoft365-Yunmu/","HEVC-video/","RSS/","apple-wallpaper/","bing-wallpapers/","Trz7YRgAc/","hello-world/","intel-aigc/","minecraft/","yuanshen-4.6-keys/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };