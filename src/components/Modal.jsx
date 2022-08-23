
export const opening = () => {
    const modal = document.getElementById("kuvatModal");

    const images = document.getElementsByClassName("modalImages");
    const modalImg = document.getElementById("modalFocusImg");
    const captionText = document.getElementById("modalCaption");

    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        img.onclick = function (evt) {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

}


export const closing = () => {
    const modal = document.getElementById("kuvatModal");
    const span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

}
