function getRandomNumbers(num, padgeId) {
  const numbers = [];

  while (numbers.length < num) {
    const randomNumber = Math.floor(Math.random() * 46);
    if (!numbers.includes(randomNumber) && randomNumber !== padgeId) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}
function getMeta(metaName) {
  const metas = document.getElementsByTagName("meta");
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metaName) {
      return metas[i].getAttribute("content");
    }
  }

  return "";
}

function shareButtom(services, padgeId, imgSrc, servName) {
  let link = window.location.href;
  // link = `https://mohamedalnaser.github.io/ALkhaleej-Group/`;
  servName = services[padgeId].name;
  let share = [
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
    `https://twitter.com/share?text=${encodeURIComponent(
      servName.trim()
    )}&url=${encodeURIComponent(link)}`,
    `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      link
    )}&title=${encodeURIComponent(servName.trim())}
      `,
    `https://www.tumblr.com/share/link?url=${encodeURIComponent(
      link
    )}&name=${encodeURIComponent(servName.trim())}`,
    `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      link
    )}&description=${encodeURIComponent(
      servName.trim()
    )}&media=${encodeURIComponent(imgSrc)}`,
    `https://reddit.com/submit?url=${encodeURIComponent(
      link
    )}&title=${encodeURIComponent(servName.trim())}`,
    `https://vk.com/share.php?url=${encodeURIComponent(link)}`,
    `mailto:?subject=Check%20out%20this%20article!&body=${encodeURIComponent(
      link
    )}`,
    "#",
  ];

  let share_links = document.querySelectorAll(".share-links a");
  share_links.forEach((link, index) => {
    if (index == share_links.length - 1) return;
    link.href = share[index];
    link.target = "_blank";
  });
  share_links[share_links.length - 1].addEventListener("click", () => {
    window.print();
  });
}

export { getRandomNumbers, getMeta, shareButtom };
