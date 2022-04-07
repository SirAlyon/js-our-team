const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

for (let key in team){
    console.log(team[key]);
}

/* for (let index = 0; index < team.length; index++) {
    const person = team[index];
    const personDivElement = document.createElement()
    document.querySelector('.team').insertAdjacentHTML('beforeend', `<img src="./img/${person.image}"></img>`)

    document.querySelector('.team').insertAdjacentHTML('beforeend', `<div>${person.name}</div>` )
    document.querySelector('.team').insertAdjacentHTML('beforeend', `<div>${person.role}</div>`)
}
 */
/* console.log(team[0].name);
document.querySelector('.team').insertAdjacentHTML('beforeend', team[0].name) */

for (let index = 0; index < team.length; index++) {
    const person = team[index];
    const ourTeam = document.querySelector('.team')
    const personDivElement = document.createElement('div')
    ourTeam.append(personDivElement)
    personDivElement.classList.add('person')
    personDivElement.innerHTML = `<img src="./img/${person.image}"></img>
                                    <div> 
                                        <span class="fw-bold fs-5">${person.name}</span> 
                                        <span>${person.role}</span>
                                    </div>`



/*     document.querySelector('.team').insertAdjacentHTML('beforeend', `<img src="./img/${person.image}"></img>`)

    document.querySelector('.team').insertAdjacentHTML('beforeend', `<div>${person.name}</div>` )
    document.querySelector('.team').insertAdjacentHTML('beforeend', `<div>${person.role}</div>`) */
}
