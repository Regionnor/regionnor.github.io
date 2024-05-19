var posts=["Apple-ID/","HEVC-video/","Gravatar/","Microsoft365-Yunmu/","RSS/","Trz7YRgAc/","apple-wallpaper/","bing-wallpapers/","hello-world/","intel-aigc/","minecraft/","yuanshen-4.6-keys/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };