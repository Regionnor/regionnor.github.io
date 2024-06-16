var posts=["Apple-ID/","Gravatar/","HEVC-video/","Microsoft365-Yunmu/","RSS/","hello-world/","Trz7YRgAc/","intel-aigc/","minecraft/","yuanshen-4.6-keys/","apple-wallpaper/","bing-wallpapers/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };