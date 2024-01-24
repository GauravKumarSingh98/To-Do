const toDoForm = document.querySelector(".form-Todo");
const toDoInput = document.querySelector(".form-Todo input[type ='text'] ");
const todoList = document.querySelector(".todo-list");
const learnMoreBtn = document.querySelector(".btn");



learnMoreBtn.addEventListener("click", () => {
    const newText = document.createElement("p");
    newText.innerHTML = "This to-do application is a valuable tool for individuals and teams seeking to enhance their productivity by effectively managing tasks and deadlines. The features and capabilities offered by these applications continue to evolve, providing users with increasingly sophisticated tools to organize and streamline their work.";
    const moreAbout =  newText.innerHTML;
    const newInnerText = `<span class="more-about">${moreAbout}</span>`;
    newText.innerHTML = newInnerText;
    learnMoreBtn.append(newText);
})
// if(click < 1) {
//     return learnMoreBtn;
// }



toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoText = toDoInput.value;
    const newli = document.createElement("li");
    const newLiInnerHtml = `
            <span class="text">${todoText}</span>
                <div class="todo-buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>`;
    newli.innerHTML = newLiInnerHtml;
    todoList.append(newli);
    toDoInput.value = "";
})


todoList.addEventListener("click", (e) => {
    if(e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")) {
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
})