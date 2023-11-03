const textInput = document.getElementById('text-input');
        const textAlign = document.getElementById('text-align');
        const textFont = document.getElementById('text-font');

        const textSize = document.getElementById('text-size');
        const textStyleBold = document.getElementById('text-style-bold');
        const textStyleItalic = document.getElementById('text-style-italic');

        const textStyleUnderline = document.getElementById('text-style-underline');
        const addTextButton = document.getElementById('add-text');
        const clearContentButton = document.getElementById('clear-content');
        
        const textContent = document.getElementById('text-content');

        addTextButton.addEventListener('click', function () {
            const paragraph = document.createElement('p');
            paragraph.style.textAlign = textAlign.value;
            paragraph.style.fontFamily = textFont.value;
            paragraph.style.fontSize = textSize.value + 'px';

            if (textStyleBold.checked) {
                paragraph.style.fontWeight = 'bold';
            } else {
                paragraph.style.fontWeight = 'normal';
            }

            if (textStyleItalic.checked) {
                paragraph.style.fontStyle = 'italic';
            } else {
                paragraph.style.fontStyle = 'normal';
            }

            if (textStyleUnderline.checked) {
                paragraph.style.textDecoration = 'underline';
            } else {
                paragraph.style.textDecoration = 'none';
            }

            paragraph.textContent = textInput.value;
            textContent.appendChild(paragraph);
        });

        clearContentButton.addEventListener('click', function () {
            textContent.innerHTML = '';
        });