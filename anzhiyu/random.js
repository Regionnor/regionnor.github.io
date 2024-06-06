var posts=["Apple-ID/","Gravatar/","HEVC-video/","RSS/","Microsoft365-Yunmu/","Trz7YRgAc/","apple-wallpaper/","bing-wallpapers/","hello-world/","minecraft/","intel-aigc/","yuanshen-4.6-keys/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };