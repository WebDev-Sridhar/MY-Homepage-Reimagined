document.getElementById('submitPost').addEventListener('click', function() {
    const content = document.getElementById('postContent').value;
    
    if (content.length < 3) {
      alert('Post must be at least 3 characters long.');
    } else {
      alert('Post submitted: ' + content);
      document.getElementById('postContent').value = '';
    }
  });
 let menuIcon = document.querySelector("#menu-icon");
 let navBar = document.querySelector(".nav-btn");
 let notify = document.querySelector(".notify");
 let msg = document.querySelector(".msg");

  menuIcon.addEventListener('click', ()=> {
    notify.innerHTML = "Notification"
    msg.innerHTML = "Message"
menuIcon.classList.toggle("bx-x");
navBar.classList.toggle("open");

  })