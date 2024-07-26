const cardConfig = {
    orientation: 'portrait',
    border: 'no-border',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 0,
    title: 'Card Title',
    paragraph: 'This is a sample paragraph. Edit it to see changes in real-time.',
    textColor: '#000000',
    bgTextColor: 'none', 
    padding: 4,
    bgColor: '#dbdbdb',
    bgImage: '',
    textPosition: 'flex-start',
    textAlign: 'left'
};

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => input.addEventListener('input', handleChange));

    const imageUpload = document.getElementById('imageUpload');
    imageUpload.addEventListener('change', handleImageUpload);

    updateCard();
});

function handleChange(event) {
    const { name, value } = event.target;
    cardConfig[name] = value;
    if (name === 'borderRadius') {
        document.getElementById('borderRadiusValue').textContent = value;
    }
    updateCard();
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            cardConfig.bgImage = reader.result;
            updateCard();
        };
        reader.readAsDataURL(file);
    }
}

function updateCard() {
    const card = document.getElementById('card');
    const cardTitle = document.getElementById('cardTitle');
    const cardParagraph = document.getElementById('cardParagraph');
    const textBlock = document.getElementById('textBlock');

    cardTitle.textContent = cardConfig.title;
    cardParagraph.textContent = cardConfig.paragraph;

    card.style.color = cardConfig.textColor;
    card.style.backgroundColor = cardConfig.bgColor;
    card.style.backgroundImage = cardConfig.bgImage ? `url(${cardConfig.bgImage})` : '';
    card.style.borderColor = cardConfig.borderColor;
    card.style.borderRadius = `${cardConfig.borderRadius}px`;
    card.style.padding = `${cardConfig.padding * 4}px`;

    cardTitle.style.backgroundColor = cardConfig.bgTextColor === 'none' ? 'transparent' : cardConfig.bgTextColor;
    cardParagraph.style.backgroundColor = cardConfig.bgTextColor === 'none' ? 'transparent' : cardConfig.bgTextColor;

    card.className = `card ${cardConfig.orientation} ${cardConfig.border}`;

    // Apply border width changes
    switch (cardConfig.border) {
        case 'full-border':
            card.style.borderWidth = `${cardConfig.borderWidth}px`;
            break;
        case 'left-border':
            card.style.borderWidth = `0 0 0 ${cardConfig.borderWidth}px`;
            break;
        case 'right-border':
            card.style.borderWidth = `0 ${cardConfig.borderWidth}px 0 0`;
            break;
        case 'top-border':
            card.style.borderWidth = `${cardConfig.borderWidth}px 0 0 0`;
            break;
        case 'bottom-border':
            card.style.borderWidth = `0 0 ${cardConfig.borderWidth}px 0`;
            break;
        default:
            card.style.borderWidth = '0';
            break;
    }

    // Update text position and alignment using flexbox
    textBlock.style.justifyContent = cardConfig.textPosition;
    textBlock.style.alignItems = cardConfig.textAlign === 'left' ? 'flex-start' : cardConfig.textAlign === 'right' ? 'flex-end' : 'center';
    textBlock.className = `text-block ${cardConfig.textAlign}`;

    // Update the color input backgrounds to show the selected color
    document.getElementById('borderColor').style.backgroundColor = cardConfig.borderColor;
    document.getElementById('textColor').style.backgroundColor = cardConfig.textColor;
    document.getElementById('bgColor').style.backgroundColor = cardConfig.bgColor;
}
