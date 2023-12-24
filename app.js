


const condition=document.getElementById('condition')
const functions=document.getElementById('functions')
const window1=document.getElementById('window1')
const window2=document.getElementById('window2')
const window3=document.getElementById('window3')
const homework1=document.getElementById('homework1')
const function1 = document.getElementById('function1');
const condition1 = document.getElementById('condition1');




//////// HOMEEWORK 1

                                                             


    const numdeg = (num, deg, cb) => {
        if (deg === 0) return 1; 
        return cb(num) * numdeg(num, deg - 1, cb);
      };
      
      const b1 = numdeg(5, 3, (num) => num); 
      
      console.log(b1); 































homework1.addEventListener('click', function() {
    
    
    gsap.from('.condition ', {duration:1, x: '30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})
    gsap.from('.functions ', {duration:1, x: '-30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})


  
    condition.style.display = 'block';
    functions.style.display = 'block';
    window1.style.display = 'none';
    window2.style.display = 'none';
    window3.style.display = 'none';

    
    function1.style.display = 'block';
    function2.style.display = 'none';
    function3.style.display = 'none';
    
    condition1.style.display = 'block';
    condition2.style.display = 'none';
    condition3.style.display = 'none';
    
  
    
});    





// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////

const homework2=document.getElementById('homework2')
const function2 = document.getElementById('function2');



// //HOMEEWORK 2



const user = {
    name: 'nika',
    age: 23,
    address: {     
        georgia:{
            city: 'ketevan dedofali 2'
         } 
     }
  };


function deepcopy(object) {
    return new Promise((resolve, reject) => {



      if (typeof object !== 'object' || object === null) {
        reject('Please select the  object.');
        return;
      }
  
      try {
        const copy = JSON.parse(JSON.stringify(object));
        resolve(copy);
      } catch (error) {
        reject('copy error' + error.message);
      }
    });
  }
    
  deepcopy(user)
    .then(copy => {
      console.log('original', user);
      console.log('copy', copy);
    })
    .catch(error => {
      console.error('error', error);
    });

























homework2.addEventListener('click', function() {   
    
    gsap.from('.condition ', {duration:1, x: '30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})
    gsap.from('.functions ', {duration:1, x: '-30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})


 
    condition.style.display = 'block';
    functions.style.display = 'block';
    window2.style.display = 'none';
    window1.style.display = 'none';
    window3.style.display = 'none';


    function1.style.display = 'none';
    function2.style.display = 'block';
    function3.style.display = 'none';
    
    
    condition1.style.display = 'none';
    condition2.style.display = 'block';
    condition3.style.display = 'none';
    
    

});



// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////

//                                                    



const homework3=document.getElementById('homework3')
const function3 = document.getElementById('function3');
const container = document.getElementById('container')
const cont = document.getElementById('cont')


const back = document.getElementById('back')
const start = document.getElementById('start')
const formcontainer = document.getElementById('formcontainer')
const question = document.getElementById ('question')
const questionNumber = document.getElementById('questionNumber')
const questionAnswer = document.getElementById ('questionAnswer')



             //HOMEEWORK 3





const projcardcontainer = document.querySelector('.projcardcontainer')

const post = (title,body) => {
const projCard = document.createElement('div');
projCard.classList.add('projcard', 'projcard-blue');

const innerBox = document.createElement('div');
innerBox.classList.add('projcard-innerbox');

const imageElement = document.createElement('img');
imageElement.classList.add('projcard-img');
imageElement.src = 'https://picsum.photos/800/600?image=1041';

const textBox = document.createElement('div');
textBox.classList.add('projcard-textbox');

const titleElement = document.createElement('div');
titleElement.classList.add('projcard-title');
titleElement.textContent = title;

const barElement = document.createElement('div');
barElement.classList.add('projcard-bar');

const descriptionElement = document.createElement('div');
descriptionElement.classList.add('projcard-description');
descriptionElement.textContent = body;

textBox.appendChild(titleElement);
textBox.appendChild(barElement);
textBox.appendChild(descriptionElement);

innerBox.appendChild(imageElement);
innerBox.appendChild(textBox);

projCard.appendChild(innerBox);


return projCard

}



async function fetchData() {
    try {
      const rawData = await fetch('https://jsonplaceholder.typicode.com/posts');
  
      if (!rawData.ok) {
        throw Error('Error fetching data');
      }
  
      const data = await rawData.json();
      data.forEach((p) => {
        const user = post(p.title , p.body);
        projcardcontainer.append(user);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();







































homework3.addEventListener('click', function() {



    back.style.display = 'block';
   
    homework1.style.display = 'none';
    homework2.style.display = 'none';
    homework3.style.display = 'none';



    container.style.height = '5%';
    container.style.width = '100%';
    cont.style.height = '100%';
    cont.style.width = '100%';
    back.style.marginTop = '0';
    window3.style.height = '85%'
    back.firstElementChild.style.width = '10%';



    condition.style.display = 'none';
    functions.style.display = 'none';


    window1.style.display = 'none';
    window2.style.display = 'none';
    window3.style.display = 'block';

});

//////////////////////////////////////////////////







    
   




    
   

























// ///////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////


















