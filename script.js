window.onload = function() {
    var navLinks = document.querySelectorAll('nav ul li a');

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            // Check if the link is not leading to an external site
            if (href.startsWith('#')) {
                e.preventDefault();
                var targetSection = document.querySelector(href);
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
            // Add animation class
            this.classList.add('animate');

            // Remove animation class after 0.5 seconds
            setTimeout(() => {
                this.classList.remove('animate');
            }, 500);
        });
    }
};

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
}); 

const aboutImages = document.querySelectorAll('#about .about-image');

aboutImages.forEach(image => {
  image.addEventListener('mousemove', e => {
    const { offsetX, offsetY } = e;
    const { width, height } = image.getBoundingClientRect();
    const x = offsetX / width * 100;
    const y = offsetY / height * 100;
    image.style.transformOrigin = `${x}% ${y}%`;
  });
});

function copyContractAddress() {
    const contractAddress = "0x1c82a75cfe6bacfbbf5ef6622c87febe150fc3ea";
    navigator.clipboard.writeText(contractAddress).then(() => {
      alert("Contract address copied!");
    });
  }
  