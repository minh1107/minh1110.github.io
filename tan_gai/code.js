document.addEventListener("DOMContentLoaded",function() {
    // code
    var $ = document.querySelector.bind(document)
    var $$ = document.querySelectorAll.bind(document)

    var buttonBoxTitle = $('.box__title p:last-child')
    var boxTitle = $('.box__title')
    var buttonNo = $('.button__no')
    var buttonYes = $('.button__yes')

    buttonBoxTitle.onclick = function() {
        boxTitle.style.display = 'none'
        $('.box__content').style.display = 'block'
        $('.box__button').style.display = 'block'
    }

    buttonNo.onmouseover = function() {
        var i = Math.floor(Math.random()*73)
        var j = Math.floor(Math.random()*73)
        this.style.top = `${i}%`
        this.style.right = `${j}%`
    }

    buttonYes.onclick = function () {
        $('.box__finish').style.display = 'flex '
    }
    
    $('button').onclick = function() {
        $('.box__finish').style.display = 'none'
    }



}, false )