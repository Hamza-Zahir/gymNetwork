const scrolling = () => {
    const flickity = document.querySelector(".flickity");
    const cheldren = flickity.children;
    const _cheldrenLength = cheldren.length;

    const _pages =
      _cheldrenLength - flickity.clientWidth / cheldren[0].clientWidth;



const scrollingInterval =  setInterval(()=>{
    const _scrollLeft = flickity.scrollLeft;

    if (_scrollLeft < _pages * cheldren[0].clientWidth) {
      flickity.scrollLeft += cheldren[0].clientWidth;
    } else {
      flickity.scrollLeft = 0;
    }

}, 2000)
flickity.addEventListener("mouseenter",()=>{
  clearInterval(scrollingInterval)

}
  )
  }



  export default {

Scrolling(){
  scrolling()
}

  }
