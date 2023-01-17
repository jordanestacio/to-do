export {
    BtnConcluded,
    BtnDelete
}

const BtnConcluded = () => {
    const btn = document.createElement('button');
    btn.textContent = 'Concluir';
    btn.classList.add('btn');

    btn.addEventListener('click', (event) => {
        event.target.parentElement.classList.add('done');
    });

    return btn;
}

const BtnDelete = () => {
    const btn = document.createElement('button');
    btn.textContent = 'Excluir';
    btn.classList.add('btn');

    btn.addEventListener('click', (event) => {
        event.target.parentElement.remove();
    });

    return btn;
}