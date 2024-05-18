var posts=["Apple-ID/","Gravatar/","HEVC-video/","Microsoft365-Yunmu/","Trz7YRgAc/","RSS/","apple-wallpaper/","hello-world/","bing-wallpapers/","intel-aigc/","minecraft/","yuanshen-4.6-keys/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };