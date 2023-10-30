import usersStore from '../../store/users-store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {

    const container = document.createElement('div')
    const nextButton = document.createElement('button');
    nextButton.classList.add('btn')
    nextButton.classList.add('btn-secondary')
    nextButton.innerText = ' Next >';
    
    const prevButton = document.createElement('button');
    prevButton.classList.add('btn')
    prevButton.classList.add('btn-secondary')
    prevButton.innerText = '< Prev ';

    const currentPageLabel = document.createElement('span');
    
    currentPageLabel.id = 'current-page'
    currentPageLabel.classList.add('btn')
    currentPageLabel.classList.add('btn-warning')
    currentPageLabel.innerText = usersStore.getCurrentPage();

    container.append(prevButton, currentPageLabel, nextButton )
    element.append(container);


    nextButton.addEventListener('click', async() => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
    });

    prevButton.addEventListener('click', async() => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
    });

}

