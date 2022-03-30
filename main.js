//create resource
const resources = [
    {
        heading: "Power cycle",
        path: "./img/icon-1.png",
        body: "Morbi vitae scelerisque neque, nec egestas orci. Quisque orci purus, lobortis nec lectus eu, vestibulum facilisis lacus. Phasellus non lorem et nisl commodo lacinia vulputate sed nisi. Integer a laoreet ante. In bibendum mollis blandit. Morbi posuere arcu ante, id finibus diam condimentum vitae. Maecenas ut augue maximus, semper nulla nec, lobortis quam. Ut id dolor sit amet nisl facilisis feugiat. Mauris eu tempor urna. Maecenas at egestas tortor. In hac habitasse platea dictumst. Aenean ex ex, luctus id diam vel, pretium facilisis nunc. Vestibulum mollis, lectus placerat porttitor aliquam, tellus dui molestie dui, aliquet ultrices ipsum est eu sapien. Quisque posuere lacinia libero, ac posuere sapien feugiat non. Vestibulum sagittis nec lectus consectetur fringilla. Mauris est ex, semper imperdiet ante at, vestibulum aliquet purus."
    },
    {
        heading: "Resource recycling",
        path: "./img/icon-3.png",
        body: "Etiam molestie malesuada tempus. Morbi maximus mi massa, vel sagittis lacus volutpat et. Sed ac libero in velit pulvinar semper. Nam vitae semper velit. Proin id interdum sapien. Nulla commodo quam urna, blandit laoreet ipsum porttitor vel. Aenean id condimentum turpis, sit amet luctus velit. Maecenas rhoncus nisl viverra risus dapibus fringilla. Nam posuere ipsum lorem, a cursus urna eleifend at. Nam vel libero turpis. Nunc ultrices vestibulum dolor, ac finibus urna elementum sed."
    },
    {
        heading: "Crop protection",
        path: "./img/icon-4_.png",
        body: "Phasellus imperdiet tellus sed neque lobortis, sit amet semper neque volutpat. Ut eget lacus eu turpis tincidunt lacinia et quis erat. Ut id urna dictum, efficitur risus vel, hendrerit elit. Morbi suscipit massa vitae velit vulputate, ut aliquet velit tincidunt. Vivamus at vehicula dolor, sit amet suscipit ante. Maecenas auctor laoreet faucibus. Aenean dapibus, libero nec consectetur pulvinar, eros elit lobortis massa, sed vehicula dui ipsum vitae elit. Vestibulum sit amet quam eu nisl cursus auctor. Integer commodo sapien erat, vel vestibulum lacus dignissim at. "
    },
];




/*GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll(".controls button");
const currentContent = document.querySelector(".current-content");

/* Default Information */

currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].path}">
                                    <p>${resources[0].body}</p>
                                    </article>`;

/*Creating eventhandler*/
function contentLoader(ev){

    let eventTarget = ev.target.getAttribute("src");
    
    
    if (eventTarget == 'img/icon-1.png'){

        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].path}">
                                    <p>${resources[0].body}</p>
                                    </article>`;
    } else if(eventTarget === 'img/icon-3.png'){
        currentContent.innerHTML = `<article>
                                    <h2>${resources[1].heading}</h2>
                                    <img src="${resources[1].path}">
                                    <p>${resources[1].body}</p>
                                    </article>`;
    } else if(eventTarget === 'img/icon-4_.png') {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[2].heading}</h2>
                                    <img src="${resources[2].path}">
                                    <p>${resources[2].body}</p>
                                    </article>`;
    }
    
}

/* Registering the content */
btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);