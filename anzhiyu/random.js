var posts=["Apple-ID/","Gravatar/","Microsoft365-Yunmu/","HEVC-video/","RSS/","Trz7YRgAc/","apple-wallpaper/","bing-wallpapers/","hello-world/","intel-aigc/","minecraft/","yuanshen-4.6-keys/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };