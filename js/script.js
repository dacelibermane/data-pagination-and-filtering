/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/




/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
//-----------------------------Display a page of 9 students-----------------

const listUl = document.querySelector('.student-list');
const paginationUl = document.querySelector('.link-list');
const currPage = 1;
const itemsPerPage = 9;

//izsaucot funkciju list vietā ir data(jo tur glabājās viss info par studentiem)
//page -> patreizēja lapa
function showPage(list, currPage){
   const startIndex = (currPage * itemsPerPage) - itemsPerPage;
   const endIndex =currPage * itemsPerPage;
   listUl.innerHTML = '';

   for(let i = 0; i < list.length; i++){
      if(i >= startIndex && i < endIndex){
         const studentInfo =  `
         <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
          </div>
        </li>
         `
         listUl.insertAdjacentHTML('beforeend', studentInfo);
      }
   }
}

//-------------------------Pagination Buttons---------------------
function setupPagination(list) {
   paginationUl.innerHTML = '';
   const pageCount = Math.ceil(list.length / itemsPerPage) ;

   for(let i = 1; i < pageCount + 1; i++){
      const paginationBtn = `
      <li>
      <button type="button">${i}</button>
      </li>
   `
   paginationUl.insertAdjacentHTML('beforeend', paginationBtn);
   }
   
}

showPage(data, 1);
setupPagination(data)



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
