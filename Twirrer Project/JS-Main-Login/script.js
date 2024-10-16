const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
/*************************************************/
/*************************************************/

// Main page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', e => 
{
    if (e.target.classList[1] === 'main-btn'){
        goToLoginPage();
    }
    // console.log(e.target.classList[1]);
});

// Main page validation
btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');

    // console.log(inputUserInfo.value);

    if (inputUserInfo.value !== '' && inputPassword.value !== ''){
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    } else {
        // modal box is display when this block is executed
        goToLoginPage();
        loginModal.style.display = 'block';
    }
})

// Login Page 
modalX.addEventListener('click', () => {
    loginModal.style.display = 'none';
})

loginFormBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');

    if (loginUserInfo.value !== "" && loginPassword !== ""){
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    } else{
        loginModal.style.display = 'block';
    }
})