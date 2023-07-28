function getMeta(metaName) {
  const metas = document.getElementsByTagName("meta");

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metaName) {
      return metas[i].getAttribute("content");
    }
  }

  return "";
}
const loadFlage = true;
const updateServices = async (e) => {
  let padgeId = Number(getMeta("pageId"));
  let view = Number(
    document.querySelector(
      ".wp-content .home .entery-header .info > span span.views"
    ).textContent
  );
  // console.log(view);
  if (loadFlage) {
    view = view + 1;
    const doc = {
      id: padgeId,
      views: view,
    };

    fetch(`http://localhost:3000/servise/${padgeId}`, {
      method: "PATCH",
      body: JSON.stringify(doc),
      headers: { "content-Type": "application/json" },
    });
    loadFlage = false;
  }
};
// window.addEventListener("load", () => updateServices());
// setTimeout(() => {
//   updateServices();
// }, 1000);
