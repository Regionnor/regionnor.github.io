var posts=["Apple-ID/","Gravatar/","HEVC-video/","Microsoft365-Yunmu/","RSS/","Trz7YRgAc/","apple-wallpaper/","bing-wallpapers/","intel-aigc/","hello-world/","minecraft/","yuanshen-4.6-keys/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };