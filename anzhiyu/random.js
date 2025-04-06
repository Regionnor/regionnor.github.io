var posts=["posts/f5971e75.html","posts/b95127c8.html","posts/3fc2e76e.html","posts/3b1d6f39.html","posts/fd673773.html","posts/31a7c0fa.html","posts/61d65355.html","posts/e53b63e7.html","posts/2d160ff.html","posts/4a17b156.html","posts/17ab3bb8.html","posts/5e5fecca.html","posts/e609797.html","posts/cbcdabae.html","posts/614a5b2e.html","posts/bfbb6ce.html","posts/95c35dee.html","posts/3ae8bcc7.html","posts/d0093471.html","posts/7838e146.html","posts/af159dfc.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-cn/","avatar":"https://hexo.io/logo.svg","descr":"快速、简单且强大的网志框架","siteshot":"https://cdn.393837.xyz/img/W3CABvPGJ92jRQKdfR0L.avif"},{"name":"Butterfly","link":"https://butterfly.js.org/","avatar":"https://cdn.393837.xyz/img/SDqq2gBhIJhyq0aZoiYe.avif","descr":"A Simple and Card UI Design theme for Hexo","siteshot":"https://cdn.393837.xyz/img/odoOwAJbMcArarKYE6jS.avif"},{"name":"jsDelivr","link":"https://www.jsdelivr.com/?docs=gh","avatar":"https://www.jsdelivr.com/icons/favicon.svg","descr":"A free CDN for open source projects","siteshot":"https://cdn.393837.xyz/img/4xC1CWxduSRBc0xg7EIC.avif"},{"name":"Region","link":"https://blog.393837.xyz/","avatar":"https://cdn.393837.xyz/img/vr6dCKNEtUwPYOBUi7GR.avif","descr":"即使你改变了过程，也改不了结果","siteshot":"https://cdn.393837.xyz/img/LfDhL4JP3JPvAJyW6TEY.avif","color":"vip","tag":"博主"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":null,"tag":"技术"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://www.fomal.cc/assets/avatar.webp","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cc.webp","color":null,"tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2024/07/16/6695ebf7463be.png","color":null,"tag":"技术"},{"name":"风记星辰","link":"https://www.thyuu.com","avatar":"https://std.thyuu.com/logo.svg","descr":"热爱你来过的每度温暖","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };