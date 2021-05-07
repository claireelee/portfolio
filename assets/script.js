//scroll button animation
function scrollToElement(eid, blk) {
  document.getElementById(eid).scrollIntoView({
    block: blk,
    behavior: 'smooth'
  });
}

//vertical carousel on homepage
let imgScroll = (entries, observer) => {
  let elem;
  let intersection = 0.0;
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time

    if (entry.intersectionRatio > intersection) {
      elem = entry.target;
    }

  });
  //switch images by adjusting image opacity betwee 1 and 0
  let container = document.getElementById("img-container");
  document.getElementById("img1").style.opacity = 0.0;
  document.getElementById("img2").style.opacity = 0.0;
  document.getElementById("img3").style.opacity = 0.0;

  switch (elem.id) {
    case "project1":
      document.getElementById("img1").style.opacity = 1.0;
      container.style.background = '#E7F2F0';
      break;
    case "project2":
      document.getElementById("img2").style.opacity = 1.0;
      container.style.background = '#E8F1FA';
      break;
    case "project3":
      document.getElementById("img3").style.opacity = 1.0;
      container.style.background = '#EBEBFF';
      break;
  
    default:
      break;
  }

};

//switch happens according to scroll position
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 0.75
}

let observer = new IntersectionObserver(imgScroll, options);

let t1 = document.querySelector("#project1");
observer.observe(t1);

let t2 = document.querySelector("#project2");
observer.observe(t2);

let t3 = document.querySelector("#project3");
observer.observe(t3);


