function emptyPlaceholder () {
    let input = document.getElementById('input');
    input.addEventListener('focus', function() {
    input.setAttribute('placeholder', '')

})

    input.addEventListener('blur', function() {
    input.setAttribute('placeholder', 'Banana...')
})
}

emptyPlaceholder();
