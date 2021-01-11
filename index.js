function handleItem() {
    $('#js-shopping-list-form').submit(e => {
        e.preventDefault();

        const userInpoot = $('#shopping-list-entry').val();
        // console.log(userInpoot);

        $('ul').append(
            `<li>
                <span class="shopping-item">${userInpoot}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        );
    });

    $('ul').on('click', '.shopping-item-toggle', (function() {
        $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
    }));

    $('ul').on('click', '.shopping-item-delete', function() {
        $(this).parents('li').remove();
    })
}

$(handleItem);
