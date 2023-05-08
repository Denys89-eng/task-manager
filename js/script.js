import {elementChangeColor} from "./elements.js";
import {select} from "./blocks.js";

let linkWrap = document.querySelector('.link-wrap')
let addProjectInput = document.querySelector('.add-project input')
let addProjectBtn = document.querySelector('.add-project .add-item')
let n = 0
let tabsContent = document.querySelector('.tabs-content')
let ol = document.createElement('ol')
let x = addProjectInput.offsetLeft
let y = addProjectInput.offsetTop

function alarmWind() {
    let alarm = document.createElement('div')
    alarm.style.position = 'fixed'
    alarm.style.width = '200px'
    alarm.style.height = '100px'
    alarm.style.top = `${x - 100}px`
    alarm.style.left = `${y + 100}px`
    alarm.style.background = 'white'
    alarm.style.border = '1px solid black'
    alarm.style.borderRadius = '10px'
    alarm.style.boxShadow = '0 0 6px black'
    alarm.style.display = 'flex'
    alarm.style.justifyContent = 'center'
    alarm.style.alignItems = 'center'
    alarm.innerHTML = 'You did not create a project'
    alarm.style.textAlign = 'center'
    document.body.append(alarm)

    const intervalAlarm = setTimeout(function () {
        alarm.remove()
    }, 1000)
}


addProjectBtn.addEventListener('click', function (e) {
    e.preventDefault()

    if (addProjectInput.value.length > 0) {

        let li = document.createElement('li')
        li.style.listStyleType = 'none'
        ol.append(li)

        let button = document.createElement('button')
        button.type = 'button'
        button.classList.add('link')
        button.classList.add('btn')
        button.classList.add('btn-outline-primary')
        button.innerHTML = addProjectInput.value
        button.setAttribute('data-tab', `tab-${n}`)

        let tabBlock = document.createElement('div')
        tabBlock.classList.add(`tab-${n}`)
        tabBlock.classList.add(`tab-block`)
        tabBlock.innerHTML = 'Project:' + '<h1>' + addProjectInput.value + '</h1>'

        let line = document.createElement('div')
        line.style.width = '100%'
        line.style.height = '10px'
        line.style.background = '#7cd3ea'

        let form = document.createElement('form')
        let inputText = document.createElement('input')
        inputText.classList.add('form-control')
        inputText.style.color = 'white'
        inputText.style.background = 'rgba(0,0,0,0.5)'
        inputText.style.width = '100%'

        inputText.type = 'text'

        let btn = document.createElement('button')
        btn.classList.add('btn')
        btn.classList.add('btn-task')
        btn.style.width = '100%'
        btn.innerHTML = 'Create Task'
        btn.style.color = 'white'
        btn.style.border = '1px solid black'
        btn.style.cursor = 'pointer'
        btn.style.background = 'green'

        let ul = document.createElement('ul')
        ul.style.padding = '10px 40px'
        ul.style.display = 'flex'
        ul.style.flexDirection = 'column'
        ul.style.gap = '15px'


        btn.addEventListener('click', function (e) {
            e.preventDefault()
            if (inputText.value.length > 0) {
                let li = document.createElement('li')
                li.style.display = 'flex'
                li.style.justifyContent = 'space-between'
                li.style.alignItems = 'center'
                li.style.padding = '0 20px'
                li.style.gap = '20px'
                li.style.background = '#66CDAA'

                let divInputTextValue = document.createElement('div')
                divInputTextValue.classList.add('task-text')
                divInputTextValue.style.display = 'flex'
                divInputTextValue.style.justifyContent = 'center'
                divInputTextValue.style.alignItems = 'center'
                divInputTextValue.style.color = 'black'

                let inptValue = document.createElement('div')
                inptValue.style.padding = '10px'
                inptValue.append(inputText.value)
                divInputTextValue.append(inptValue)

                let divSettings = document.createElement('div')
                divSettings.style.display = 'flex'
                divSettings.style.justifyContent = 'center'
                divSettings.style.alignItems = 'center'
                divSettings.style.width = '300px'
                divSettings.style.gap = '20px'

                let wrapColor = document.createElement('div')
                wrapColor.classList.add('color-wrap')
                wrapColor.style.display = 'flex'
                wrapColor.style.cursor = 'pointer'

                wrapColor.addEventListener('mouseenter', function () {
                    spanOne.style.left = '-100px'
                    spanTwo.style.left= '-200px'
                    spanThree.style.left = '-300px'
                })
                wrapColor.addEventListener('mouseleave', function () {
                    spanOne.style.left = '0'
                    spanTwo.style.left= '0'
                    spanThree.style.left = '0'
                })

                let spanMain = document.createElement('span')
                spanMain.classList.add('color')
                spanMain.classList.add('select-task')
                spanMain.innerHTML = 'Status task'
                let spanOne = document.createElement('span')
                spanOne.classList.add('color')
                spanOne.classList.add('red')
                spanOne.innerHTML = 'Not fulfilled'
                let spanTwo = document.createElement('span')
                spanTwo.classList.add('color')
                spanTwo.classList.add('green')
                spanTwo.innerHTML = 'Done'
                let spanThree = document.createElement('span')
                spanThree.classList.add('color')
                spanThree.classList.add('blue')
                spanThree.innerHTML = 'In process'
                wrapColor.append(spanMain,spanOne,spanTwo,spanThree)

                spanOne.addEventListener('click', function () {
                    li.style.color = 'white'
                    li.style.background = '#f64242'
                })
                spanTwo.addEventListener('click', function () {
                    li.style.color = 'white'
                    li.style.background = '#48910a'
                })

                spanThree.addEventListener('click', function () {
                    li.style.color = 'white'
                    li.style.background = '#3815b8'
                })



                let divSvg = document.createElement('div')
                divSvg.classList.add('btn-setting')
                divSvg.style.width = '70px'
                divSvg.style.height = '80px'
                divSvg.style.display = 'flex'
                divSvg.style.justifyContent = 'center'
                divSvg.style.alignItems = 'center'
                divSvg.innerHTML += '<span>' + 'Delete' + '</span>'
                divSvg.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">\n' +
                    '  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>\n' +
                    '</svg>'

                divSvg.addEventListener('click', function () {
                    divSvg.parentElement.parentElement.remove()
                })


                let correctBtn = document.createElement('div')
                correctBtn.classList.add('btn-setting')
                correctBtn.style.width = '70px'
                correctBtn.style.height = '80px'
                correctBtn.style.display = 'flex'
                correctBtn.style.justifyContent = 'center'
                correctBtn.style.alignItems = 'center'
                correctBtn.innerHTML += '<div>' + 'Correct' + '</div>'
                correctBtn.innerHTML += '<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders2" viewBox="0 0 16 16">\n' +
                    '  <path fill-rule="evenodd" d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>\n' +
                    '</svg></div>'


                correctBtn.addEventListener('click', function () {
                    let inputCorrect = document.createElement('input')
                    inputCorrect.value = inptValue.innerHTML
                    inputCorrect.classList.add('text-correct')
                    inputCorrect.type = 'text'
                    inputCorrect.style.all = 'unset'
                    inputCorrect.style.border = '1px solid black'
                    inputCorrect.style.background = 'rgba(0,0,0,0.5)'

                    divInputTextValue.firstElementChild.append(inputCorrect)

                    let btnSave = document.createElement('button')
                    btnSave.classList.add('btn')
                    btnSave.classList.add('save-btn')
                    btnSave.innerHTML = 'Save task'
                    divInputTextValue.append(btnSave)

                    btnSave.addEventListener('click', function () {
                        inptValue.innerHTML = inputCorrect.value
                        inputCorrect.remove()
                        divSettings.append(correctBtn)
                        inputCorrect.value = ''
                        btnSave.remove()
                    })
                    correctBtn.remove()
                })


                elementChangeColor(divSettings, li)

                divSettings.append(wrapColor, divSvg, correctBtn)
                li.append(divInputTextValue, divSettings)
                ul.append(li)
                inputText.value = ''
            } else {
                alarmWind()
            }
        })


        li.append(button)
        ol.append(li)
        form.append(inputText, btn)
        tabBlock.append(line, form, ul)
        tabsContent.append(tabBlock)
        linkWrap.append(li)
        n++
        select()
        addProjectInput.value = ''


    } else {
        alarmWind()
    }
})


select()












