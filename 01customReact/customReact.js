const root = document.getElementById('root')                // selecting the root element of html page

// render function

function renderElement(element, container) {
    const newElement = document.createElement(element.type)
    for (const key in element.prop) {
        newElement.setAttribute(key , element.prop[key])
    }
    container.appendChild(newElement)
}

// html element

const element = {
    type: 'input',
    prop: {
        type: 'password',
        placeholder: 'set password'
    }
}
renderElement(element, root)














/* <input type="password" placeholder="set password">  */
