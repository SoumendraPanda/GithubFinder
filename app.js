//Init github
const github=new Github;
//Iniy UI
const ui=new UI;
//search input
const searchUser=document.getElementById('searchUser');


//search input event listner
//keyup means keyup event occurs when a keyboard key is released
searchUser.addEventListener('keyup',(e)=>{
    //Get input text
    const userText=e.target.value;

    if(userText!==''){
      //Make http call
      github.getUser(userText)
        .then(data =>{
           if(data.profile.message==='Not Found'){
               //showAlert
               ui.showAlert('User not found', 'alert alert-danger');

           }else{
               //show Profile
               ui.showProfile(data.profile);
               ui.showRepos(data.repos);
           }
        })
    }else{
        //clear profile
        ui.clearProfile();
    }

});