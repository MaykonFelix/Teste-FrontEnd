
export default function docTitle() {

    let docTitle = document.title;

    window.addEventListener('blur', () => {
        document.title = "Vai emborar ñ 😥";
    });

    window.addEventListener("focus", () => {
        document.title = docTitle;
    });

    return docTitle;
}





