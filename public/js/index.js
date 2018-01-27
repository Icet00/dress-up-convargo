/* global CONVARGO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    var table_head = [];
    var temp =  `
      <div class="col-md-12 col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>`;
    $.each(actors, function(index, value) {
      temp += `<th scope="col">${value.who}</th>`;
    }); 
    temp += `
            </tr>
          </thead>
          <tbody>
            <tr>`;
    $.each(actors, function(index, value) {
      temp += `<td>${value.type}</td>`;
    }); 
    temp += `
            </tr>
            <tr>`;
    $.each(actors, function(index, value) {
      temp += `<td>${value.amount}</td>`;
    }); 
    temp += `
            </tr>
          </tbody>
        </table>
      </div>`;
    /*const template = actors.map(actor => {
      return `
      <div class="col-md-12 col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>${actor.who}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>${actor.type}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>${actor.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      `;
    }).join('');*/

    div.innerHTML = temp;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const trucker = CONVARGO.getTrucker();
    const distance = document.querySelector('.distance').value;
    const volume = document.querySelector('.volume').value;
    const option = document.querySelector('.option').checked;
    const actors = CONVARGO.payActors(trucker, distance, volume, option);
    render(actors);

    return;
  });
})();