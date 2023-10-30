import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = ( element ) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+ Add New User';
    fabButton.classList.add('fab-button');
    fabButton.classList.add('btn');
    fabButton.classList.add('btn-success');

    element.append( fabButton );

    //TODO:
    fabButton.addEventListener('click', () =>{
        showModal();
    });

}
