/* //  
// const hoveruv = document.querySelector('.hoveruv');
// const search = document.querySelector('.search');
// const overlay = document.querySelector('.overlay-1');
// const emailThick = document.querySelector('.text-thiny');
// const signIn = document.querySelector('#footer-newsletter-email');

// const footer = document.querySelectorAll('.nav__list-footer-2');
// const iconFooterOpen = document.querySelector('#dario');

const dual = function () {
  search.classList.toggle('hidden');
  overlay.classList.remove('hidden');
};

hoveruv.addEventListener('mouseenter', dual);
signIn.addEventListener('click', function (e) {
  e.preventDefault();
  emailThick.classList.remove('hidden');
});

const openFooter = function(){
  console.log('dskuvilnd');
}

const amade = document.querySelector('.nav__list-footer');

iconFooterOpen.addEventListener('click', function (e){
  const clicked = e.target.closest('.nav__list-footer-2')

  clicked.classList.add('operations__tab--active');
})

iconFooterOpen.addEventListener('click', function(e){


})  */

/* 



tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
*/

/*  FORM DROWDOWN-SIZE */


/* const selected = document.querySelector('#ma');
const optionsConatiner = document.querySelector('.options-container');
const optionsList = document.querySelectorAll('.option');
const sameSize = document.querySelector('.same-size');
const sizeGuide = document.querySelector('.size-guide');
const btnNotClear = document.querySelector('.btn-not-clear');
const btnReset = document.querySelector('.reset-size-details');


selected.addEventListener('click', function () {
  optionsConatiner.classList.toggle('active');
  sizeGuide.innerHTML = '';
  btnNotClear.style.display = 'none';
});

optionsList.forEach(el => {
  el.addEventListener('click', () => {
    selected.innerHTML = el.querySelector('label').innerHTML;
    optionsConatiner.classList.remove('active');
    sameSize.innerHTML = '';
    sameSize.innerHTML = selected.innerHTML;
    btnNotClear.style.display = 'inline';
    btnNotClear.style.cursor = 'pointer';
    btnNotClear.style.backgroundColor = 'black';
  });
}); */

// btnReset.addEventListener('click', function () {
//   selected.innerHTML = '-';
//   sameSize.innerHTML = '';
//   btnReset.innerHTML = 'EDIT DETAILS';
//   btnNotClear.style.display = 'inline';
//   btnNotClear.style.cursor = 'not-allowed';
//   btnNotClear.style.backgroundColor = '#ddd';

// });

//closest

//NOTE switch-single-page to Double
const swicthSingle = document.querySelector('.switch-single-page');
const swicthDouble = document.querySelector('.switch-double-page');
const colorDisplay = document.querySelector('.colorDisplay');
const showcaseItem = document.querySelector('.showcase-container-gallery-grid');

const gridImage = document.querySelectorAll(
  '.showcase-container-gallery-grid-item'
);
let sizeSlider = document.querySelector('.size-slider');
const galleryGrid = document.querySelectorAll(
  '.showcase-container-gallery-grid'
);

galleryGrid.forEach(el => {
  swicthDouble.addEventListener('click', function () {
    el.classList.add('change-to-double-view');
  });
  //showcaseItem.style.gridTemplateRows = 'minmax(25rem, auto)'

  // grid-auto-rows: minmax(50rem, auto)
});

galleryGrid.forEach(el => {
  swicthSingle.addEventListener('click', function () {
    el.classList.remove('change-to-double-view');
  });
});

//NOTE Hover on mouse enter

gridImage.forEach(el => {
  el.addEventListener('mouseenter', addSlider);
});
gridImage.forEach(el => {
  el.addEventListener('mouseleave', removeSlider);
});

function addSlider(e) {
  console.log('IN');
  if (e.target === e.currentTarget) {
    // sizeSlider.forEach(e => {
    // sizeSlider = e.target
    sizeSlider.style.visibility = 'visible';
    sizeSlider.style.opacity = '1';
    sizeSlider.style.transform = 'translate(0,0)';

    // })
  }
  e.stopPropagation();
}

function removeSlider() {
  sizeSlider.style.visibility = 'hidden';
  sizeSlider.style.opacity = '0';
  sizeSlider.style.transform = 'translate(0,100%)';
  // console.log('OUT NOW');
}

// const theTarget = gridImage;
// console.log(theTarget.length);

// gridImage.forEach( el => {

// el.addEventListener('mouseenter', function (){
//   sizeSlider.style.visibility = 'visible';
//   sizeSlider.style.opacity = '1';
//   console.log('in');
// })
// })
// gridImage.forEach( el => {

// el.addEventListener('mouseleave', function (){
//   sizeSlider.style.visibility = 'none';
//   sizeSlider.style.opacity = '0';
//   console.log('leave');
// })
// })

// gridImage.forEach(el => {
//   console.log(el);
//   el.addEventListener('mouseenter', function (_, i){
//     sizeSlider.style.visibility = 'visible';
//     sizeSlider.style.opacity = '1';
//     console.log('siuhds');

//   })
// el.addEventListener('mouseenter', function (e) {
//   if (!theTarget.length > 1) return;
//   sizeSlider.forEach(e => {
//     e.style.visibility = 'visible';
//     e.style.opacity = '1';
//   });
// });
// });

// gridImage.forEach(el => {
//   colorDisplay.innerHTML = ` <p class="text-thinny">1 COLOUR</p>`;
//   el.addEventListener('mouseleave', function () {
//     sizeSlider.forEach(e => {
//       e.style.visibility = '';
//       e.style.opacity = '';
//     });
//   });
// });

// colorDisplay.addEventListener('mouseenter', function (e) { //BUG
//   e.target.style.display = 'none';
//   if(!e.target.style.display === '') return
//   e.target.insertAdjacentHTML(
//     'afterend',
//     `<p class="one-color">
//       <span class="thinny-square">
//         <img src="/src/img/pic-29.jpg" alt="Clothing" class="clothing-img">
//       </span>
//       <span class="text-thinny" >RED</span>
//     </p>`
//   );
// });

// colorDisplay.addEventListener('mouseleave', function (e) {

//   e.target.style.display = 'inline';
// });

const amazon = document.querySelector('#AmazonPayButton');

/* amazon.addEventListener('click', function () {
  console.log('hey');
}); */

const addFormAdress = document.querySelector('.btn__add__address');
// addFormAdress.addEventListener('click', function () {

// });
// const formAddress = document.querySelector('.form__address__1');
// const formClose = document.querySelector('.icon_form_close');
// const formDeliveryAddress = document.querySelector('.deliver__to__address');
// const searchAgain = document.querySelector('.search-again');
// const informationContent = document.querySelector('.information-content');
// const emptyTitle = document.querySelector('empty-title');

// formClose.addEventListener('click', function () {
//   formAddress.style.visibility = 'hidden';
//   formAddress.style.opacity = '0';
//   formAddress.style.height = '0rem';
// });

/* 
searchAgain.addEventListener('click', function () {
  emptyTitle.insertAdjacentText = '';
  formDeliveryAddress.style.opacity = '0';
  formDeliveryAddress.style.visibility = 'hidden';
  formDeliveryAddress.style.height = '0';

  informationContentPersonal.insertAdjacentHTML(
    'afterend',
    `
    <div class="information-content-personal-info-title">
            <p>PERSONAL INFORMATION</p>
          </div>
          <div class="information-content-personal-info-sub-title">
            <p>WELCOME NEW CUSTOMER</p>

          </div>
          <div class="information-content-personal-info-form">
            <div class="information-content-personal-info-form-name">
              <div class="information-content-personal-info-form-name-single">
                <label for="First Name" class="form">First Name*</label>
                <input type="email" class="form__input" placeholder="First Name" id=email required>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="Last Name" class="form">Last Name*</label>
                <input type="email" class="form__input" placeholder="Last Name" id=email required>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="email" class="form">Email*</label>
                <input type="email" class="form__input" placeholder="Email" id=email required>
              </div>

              <div class="information-content-personal-info-form-name-single">
                <label for="Telephone" class="form">Telephone*</label>
                <input type="email" class="form__input" placeholder="Telephone" id=email required>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="email" class="form">&nbsp;</label>
                <span type="email" class="form__input" placeholder="Telephone" id=email required>
                  <p>You will receive updates on your order via Email. Privacy Policy</p>
                </span>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="email" class="form">&nbsp;</label>
                <span type="email" class="form__input" placeholder="Telephone" id=email required>
                  <button>DELIVERY ></button>
                </span>
              </div>
               <div class="information-content-personal-info-form-name-single">
                <label for="email" class="form">&nbsp;</label>
                <span type="email" class="form__input" placeholder="Telephone" id=email required>
                  <p>Continue and complete checkout with Rubaccine</p>
                </span>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="email" class="form">&nbsp;</label>
                <span type="email" class="form__input" placeholder="Telephone" id=email required>
                  <img class=" amazonpay-button-inner-image" style="cursor:pointer; max-height:45px;" 
                  alt="AmazonPay" id="OffAmazonPaymentsWidgets0" src="https://d23yuld0pofhhw.cloudfront.net/default/uk/live/lwa/gold/medium/PwA.png" tabindex="0">
                </span>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="email" class="form">&nbsp;</label>
                <span type="email" class="form__input" placeholder="Telephone" id=email required>
                  <p>Continue and complete checkout by using your Amazon shipping and payment information</p>
                </span>
              </div>
            </div>
  

          </div>
`
  );
}); */
/* 
const confirmAddress = document.querySelector('.confirm__address');

confirmAddress.addEventListener('click', function () {
  informationContentPersonal.textContent = '';
  informationContentPersonal.insertAdjacentHTML(
    'afterbegin',

    `
  <div class="deliver">
  <div class="deliver-to-address  deliver__to__address">
    <div class="deliver-to-address-wrapper">
      <div class="deliver-to-address-wrapper-head">
        <div class="deliver-to-address-wrapper-head-left">
          <svg class="icon-test">
            <use href="src/img/sprite.svg#icon-home2"></use>
          </svg>
          <p>DELIVERY TO AN ADDRESS
     
            </p>
        </div>
        <div class="deliver-to-address-wrapper-head-right">
          <svg class="icon-test">
            <use href="src/img/sprite.svg#icon-map-pin-fill"></use>
          </svg>
          <p> DPD PICK UP</p>

        </div>

      </div>
      <div class="deliver-to-address-wrapper-content">
        <div class="deliver-to-address-wrapper-content-address-save">
          <div class="deliver-to-address-wrapper-content-address-save-left">
            <address>
              Dario Amade
          
              <br>
              33<br>
              Broxholm Road<br>
              London<br>
              London<br>
              GB<br>
              SE27 0NA<br>
              <span type="email" class="form__input" placeholder="Telephone" id=email required>
                <div class="bill-address">
                  <input type="checkbox" name="billAdress" value="billAdress">
                  <label for="billAdress">Use as my billing address</label><br>
                </span>
            </address>
             
          </div>
          <div class="deliver-to-address-wrapper-content-address-save-right"></div>

        </div>


        <div class="deliver-to-address-wrapper-content-form  form__address">
          <div class="close-form">
            <p>ENTER ADDRESS MANUALLY</p>
            <svg class="icon-test icon_form_close">
              <use href="src/img/sprite.svg#icon-close" ></use>
            </svg>
          </div>
          <div class="information-content-personal-info-form">
            <div class="information-content-personal-info-form-name">
              <div class="information-content-personal-info-form-name-single">
                <label for="First Name" class="form">First Name*</label>
                <input type="email" class="form__input" placeholder="First Name" id=email required>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="Last Name" class="form">Last Name*</label>
                <input type="email" class="form__input" placeholder="Last Name" id=email required>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="email" class="form">Address Line 1</label>
                <input type="email" class="form__input" placeholder="Address Line 1" id=email required>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="email" class="form" style="color: a94442
                ;">Address Line 1</label>
                <input type="email" class="form__input" placeholder="Address Line 2" id=email required>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="Telephone" class="form">Town</label>
                <input type="email" class="form__input" placeholder="Town" id=email required>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="Telephone" class="form">Country/Province</label>
                <input type="email" class="form__input" placeholder="Country/Province" id=email required>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="Telephone" class="form">Postcode</label>
                <input type="email" class="form__input" placeholder="Postcode" id=email required>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="Telephone" class="form">Country</label>
                <input type="email" class="form__input" placeholder="Country" id=email required>
              </div>
              <div class="information-content-personal-info-form-name-single">
                <label for="email" class="form">&nbsp;</label>
                <span style="margin-top: 0rem;" type="email" class="form__input" placeholder="Telephone" id=email required>
                  <p >United Kingdom | (Change country)</p>
                  <div class="bill-address">
                    <input type="checkbox" name="billAdress" value="billAdress">
                    <label for="billAdress">Use as my billing address</label><br>
                  </span>
              </div>
            </div>
            <div class="btn-bottons">
              <button class="search-again"> < SEARCH AGAIN </button>
              <button class="search-again confirm__address">CONFIRM ADDRESS > </button>
            </div>
            </div>
          </div> 
        </div>
        <button class="btn-add-address btn__add__address">+ ADD A NEW ADDRESS</button>
      </div>  
  </div>
  <div class="deliver-options">
    <div class="deliver-options-title">
      <p class="title-deliver">DELIVERY OPTIONS - DELIVERY OUTSIDE OF THE UK MAY BE DELAYED 
        DUE TO EU WITHDRAWAL</p>
    </div>
    <div class="deliver-options-title color-active">
      <div class="deliver-options-title-top">
        <div class="bill-address">
          <input type="checkbox" name="billAdress" value="billAdress" checked>
          <label for="billAdress">NEXT BUSINESS DAY DELIVERY - ORDER BEFORE 2PM</label><br>
        </span>
        </div>
        <span>FREE</span>

      </div>
      <div class="deliver-options-title-bottom">
        <p>Order by 2pm for next business day delivery. Orders placed after
           2pm Thurs and before 3pm Sat will be delivered on Mon. All 
           orders delivered Mon to Fri only, excl public holidays.</p>
      </div>
  
    </div>
    <div class="deliver-options-title ">
      <div class="deliver-options-title-top">
        <div class="bill-address">
          <input type="checkbox" name="billAdress" value="billAdress" >
          <label for="billAdress">STANDARD DELIVERY - DELIVERED WITHIN 5-7 WORKING DAYS</label><br>
        </span>
        </div>
        <span>FREE</span>

      </div>
      <div class="deliver-options-title-bottom">
        <p>Orders delivered between Mon and Fri within 5-7 working days, excl 
          public holidays. Outlying areas may take longer. We do not deliver 
          to APO, FPO or PO box addresses. Expect delivery delays over our 
          busy promotional period. European returns are not free. Orders
           delivered outside of the UK may be delayed due to withdrawal 
           from the EU and customs clearance.</p>
      </div>
  
    </div>
    <div class="deliver-options-title">
      <div class="deliver-options-title-top">
        <div class="bill-address">
          <input type="checkbox" name="billAdress" value="billAdress" >
          <label for="billAdress">SATURDAY DELIVERY - ORDER BEFORE 2PM FRIDAY</label><br>
        </span>
        </div>
        <span>FREE</span>

      </div>
      <div class="deliver-options-title-bottom">
        <p>Order up until 2pm Fri for Saturday delivery. Orders placed after 2pm Friday will be delivered the following Saturday.</p>
      </div>
  
    </div>
    <div class="deliver-options-title">
      <div class="deliver-options-title-top">
        <div class="bill-address">
          <input type="checkbox" name="billAdress" value="billAdress" >
          <label for="billAdress">SUNDAY DELIVERY - ORDER BEFORE 2PM SATURDAY</label><br>
        </span>
        </div>
        <span>FREE</span>

      </div>
      <div class="deliver-options-title-bottom">
        <p>Orders placed up until 2pm on Saturday for our Sunday service. Order after 2pm on Saturday and you'll receive your order the following Sunday.</p>
      </div>
  
    </div>



    <div class="deliver-options-title">
      <div class="deliver-options-title-btn">
        <button class="search-again"> < BACK </button>
        <button class="search-again ">REVIEW > </button>
      </div>
    
   
    </div>
  </div>


</div>`
  );
}); 
 */
/* 
///////////////
const informationContentPersonal = document.querySelector(
  '.information-content-personal-info'
);
const btnGreenDelivery = document.querySelector('.btn-green-delivery');

btnGreenDelivery.addEventListener('click', function () {
  informationContentPersonal.textContent = '';
  informationContentPersonal.insertAdjacentHTML(
    'afterend',
    `
  <div class="deliver-to-address  deliver__to__address">
  <div class="deliver-to-address-wrapper">
  <div class="deliver-to-address-wrapper-head">
    <div class="deliver-to-address-wrapper-head-left">
      <svg class="icon-test">
        <use href="src/img/sprite.svg#icon-home2"></use>
      </svg>
      <p>DELIVERY TO AN ADDRESS
 
        </p>
    </div>
    <div class="deliver-to-address-wrapper-head-right">
      <svg class="icon-test">
        <use href="src/img/sprite.svg#icon-map-pin-fill"></use>
      </svg>
      <p> DPD PICK UP</p>

    </div>

  </div>
  <div class="deliver-to-address-wrapper-content">
    <p class="empty-title"> Your address book is currently empty.</p>

    <div class="deliver-to-address-wrapper-content-form  form__address-1 id="tal">
      <div class="close-form">
        <p>ENTER ADDRESS MANUALLY</p>
        <svg class="icon-test icon_form_close">
          <use href="src/img/sprite.svg#icon-close" ></use>
        </svg>
      </div>
      <div class="information-content-personal-info-form">
        <div class="information-content-personal-info-form-name">
          <div class="information-content-personal-info-form-name-single">
            <label for="First Name" class="form">First Name*</label>
            <input type="email" class="form__input" placeholder="First Name" id=email required>
          </div>
          <div class="information-content-personal-info-form-name-single">
            <label for="Last Name" class="form">Last Name*</label>
            <input type="email" class="form__input" placeholder="Last Name" id=email required>
          </div>
          <div class="information-content-personal-info-form-name-single">
            <label for="email" class="form">Address Line 1</label>
            <input type="email" class="form__input" placeholder="Address Line 1" id=email required>
          </div>
          <div class="information-content-personal-info-form-name-single">
            <label for="email" class="form" style="color: a94442
            ;">Address Line 1</label>
            <input type="email" class="form__input" placeholder="Address Line 2" id=email required>
          </div>
          <div class="information-content-personal-info-form-name-single">
            <label for="Telephone" class="form">Town</label>
            <input type="email" class="form__input" placeholder="Town" id=email required>
          </div>
          <div class="information-content-personal-info-form-name-single">
            <label for="Telephone" class="form">Country/Province</label>
            <input type="email" class="form__input" placeholder="Country/Province" id=email required>
          </div>
          <div class="information-content-personal-info-form-name-single">
            <label for="Telephone" class="form">Postcode</label>
            <input type="email" class="form__input" placeholder="Postcode" id=email required>
          </div>
          <div class="information-content-personal-info-form-name-single">
            <label for="Telephone" class="form">Country</label>
            <input type="email" class="form__input" placeholder="Country" id=email required>
          </div>
          <div class="information-content-personal-info-form-name-single">
            <label for="email" class="form">&nbsp;</label>
            <span style="margin-top: 0rem;" type="email" class="form__input" placeholder="Telephone" id=email required>
              <p >United Kingdom | (Change country)</p>
              <div class="bill-address">
                <input type="checkbox" name="billAdress" value="billAdress">
                <label for="billAdress">Use as my billing address</label><br>
              </span>
          </div>
        </div>
        <div class="btn-bottons">
          <button class="search-again"> < SEARCH AGAIN </button>
          <button class="search-again confirm__address">CONFIRM ADDRESS > </button>
        </div>
        </div>
      </div> 
    </div>
    <button class="btn-add-address btn__add__address-1">+ ADD A NEW ADDRESS</button>
  </div>  
</div> 
<div class="deliver-options-due">
 <div class="deliver-options-due-wrapper">
  <span>
    <p>DELIVERY OPTIONS - DELIVERY OUTSIDE OF THE UK MAY BE 
      DELAYED DUE TO EU WITHDRAWAL</p>
  </span>

 <P>Please select your delivery destination 
   for available shipping options.</P>
 <div class="deliver-options-title-btn">
   <button class="search-again"> < BACK </button>
   <button class="search-again ">REVIEW > </button>
 </div>

 </div>


</div>
</div> 
  `
  );
});

const formAddress = document.querySelector('.btn__add__address-1');


const clikc = function(){
  console.log('hey');
  console.log(formAddress);
console.log(formAddress);
}


    formAddress.addEventListener('click', clikc());


   */
const info1 = document.querySelector(
  '.information-content-personal-info-title'
);
const info2 = document.querySelector(
  '.information-content-personal-info-sub-title'
);
const info3 = document.querySelector('.information-content-personal-info-form');
const info3dario = document.querySelector(
  '.deliver-to-address-wrapper-content-form '
);
const info4 = document.querySelector(
  '.information-content-personal-info-form-name'
);
const inforContPersnSingle = document.querySelectorAll('.inforContPersnSingle');
const informationContentPersonal = document.querySelector(
  '.information-content-personal-info'
);
const btnGreenDelivery = document.querySelector('.btn-green-delivery');
const deliverOptionsDue = document.querySelector('.deliver-options-due');
const deliverToAddress1 = document.querySelector('.deliver-to-address');
const deliverToAddressDue = document.querySelector('.deliver-options-due');

// btnGreenDelivery.addEventListener('click', function () {
//   info1.classList.add('deliver__to__address');
//   info2.classList.add('deliver__to__address');
//   info3.classList.add('deliver__to__address');
//   info4.classList.add('deliver__to__address');

//   inforContPersnSingle.forEach(el => {
//     el.classList.add('deliver__to__address');
//   });
//   deliverToAddress1.classList.remove('deliver__to__address');
//   deliverToAddressDue.classList.remove('deliver__to__address');
// });

// addFormAdress.addEventListener('click', function () {
//   formAddress.style.visibility = 'visible';
//   formAddress.style.opacity = '1';
//   formAddress.style.height = 'auto';
//   formAddress.style.transform = 'scale(1,1)';

//   info1.classList.remove('deliver__to__address');
//   info2.classList.remove('deliver__to__address');
//   info3.classList.remove('deliver__to__address');
//   info4.classList.remove('deliver__to__address');
//   inforContPersnSingle.forEach(e => {
//     e.classList.remove('deliver__to__address');
//   });
// });

/* 

<div class="information-content-personal-info-form-name-single deliver__to__address">
                        <label for="First Name" class="form">First Name*</label>
                        <input type="email" class="form__input" placeholder="First Name" id="email" required="">
                      </div>

*/

// IMPORTANT

const btnGreenDev = document.querySelector('.btnGreenDev1');
// const infoContentHidden = document.querySelectorAll(
//   '.information-content-personal-info-form '
// );
const formAddress = document.querySelector('.form__address__1');
const btnGreenDevAfter = document.querySelector('.btnGreenDev2');
const firstHidden = document.querySelectorAll('.firstHidden');
const deliverHidden = document.querySelectorAll('.deliverHidden');
const formClose = document.querySelector('.icon_form_close');
const formDeliveryAddress = document.querySelector('.deliver__to__address');
const searchAgain = document.querySelector('.search-again');
const informationContent = document.querySelector('.information-content');
const emptyTitle = document.querySelector('empty-title');
const confirmAddress = document.querySelector('.confirm__address');
const formInput = document.querySelectorAll('.form__input');
const emptyTitleSmall = document.querySelectorAll('.emptyTitleSmall');

const progressDetails = document.querySelector('#progress-details');
// INPUT VALUE

//const firstName = document.querySelector('.firstName').value;
//const lastName = document.querySelector('.lastName').value;
// const emailAddress = document.querySelector('.emailAddress').value;
// const phoneNumber = document.querySelector('.phoneNumber').value;

// btnGreenDev.addEventListener('click', function () {
//   firstHidden.forEach(el => {
//     el.classList.add('active');
//   });
//   deliverHidden.forEach(el => {
//     el.classList.replace('active', 'desactived');
//   });
//   // progressDetails.classList.remove('actived')
// });
//Open second Form
btnGreenDevAfter.addEventListener('click', function () {
  emptyTitleSmall.forEach(el => {
    el.classList.add('active');
  });
  formAddress.style.visibility = 'visible';
  formAddress.style.opacity = '1';
  formAddress.style.height = 'auto';
  formAddress.style.transform = 'scale(1,1)';
  formInput.forEach(e => {
    e.value = '';
  });
  console.log('clear');
});
// CLose Form
formClose.addEventListener('click', function () {
  emptyTitleSmall.forEach(el => {
    el.classList.removechec('active');
  });
  formAddress.style.visibility = 'hidden';
  formAddress.style.opacity = '0';
  formAddress.style.height = '0rem';
});

// Bottom Black  Confirm Address >
const mid = document.querySelector('.mid');
const deliver = document.querySelector('.deliver');
confirmAddress.addEventListener('click', function () {
  mid.style.visibility = 'hidden';
  mid.style.opacity = '0';
  mid.style.height = '0rem';
  mid.style.transform = 'scale(1,0)';
  deliver.classList.remove('deliver__to__address');

  formInput.forEach(e => {
    e.value = '';
  });
});

const btnGreenProceedReview = document.querySelector('.review-proceed-green');
const btnGreyProceedReview = document.querySelector('.review-proceed-grey');
const producReview = document.querySelector('.product-review');
const contentTotal = document.querySelector('.content-total');
btnGreyProceedReview.addEventListener('click', function () {
  mid.style.visibility = 'visible';
  mid.style.opacity = '1';
  mid.style.height = 'auto';
  mid.style.transform = 'scale(1,1)';
  deliver.classList.add('deliver__to__address');
});

btnGreenProceedReview.addEventListener('click', function (e) {
  e.preventDefault();
  formDeliveryAddress.textContent = '';
  producReview.classList.remove('active');
  //  contentTotal.classList.remove('active')
});

const purchaseSecurely = document.querySelector('.purchaseSecurely');
const paymentMethods = document.querySelector('.payment-methods ');

purchaseSecurely.addEventListener('click', function () {
  producReview.classList.add('active');
  paymentMethods.classList.remove('active');
});

// NEW IMPORTANT

const saleTab = document.querySelector('.sale__tab_1');
const saleTab2 = document.querySelector('.sale__tab_2');
const saleTab3 = document.querySelector('.sale__tab_3');
const saleTab4 = document.querySelector('.sale__tab_4');
const saleTabBox = document.querySelector('.sale__tab_1_box');
const saleTabBox2 = document.querySelector('.sale__tab_2_box');
const saleTabBox3 = document.querySelector('.sale__tab_3_box');
const saleTabBox4 = document.querySelector('.sale__tab_4_box');

saleTab.addEventListener('mouseover', function () {
  saleTabBox.style.transition = 'all 0.1s;';
  saleTabBox.classList.remove('hidden');
});
saleTab.addEventListener('mouseleave', function () {
  console.log('leave');
  saleTabBox.classList.add('hidden');
});

saleTab2.addEventListener('mouseenter', function () {
  saleTabBox2.style.transition = 'all 0.1s;';
  saleTabBox2.classList.remove('hidden');
});

saleTab2.addEventListener('mouseleave', function () {
  saleTabBox2.classList.add('hidden');
});

saleTab3.addEventListener('mouseenter', function () {
  saleTabBox3.style.transition = 'all 0.1s;';
  saleTabBox3.classList.remove('hidden');
});

saleTab3.addEventListener('mouseleave', function () {
  saleTabBox3.classList.add('hidden');
});

saleTab4.addEventListener('mouseenter', function () {
  saleTabBox4.style.transition = 'all 0.1s;';
  saleTabBox4.classList.remove('hidden');
});

saleTab4.addEventListener('mouseleave', function () {
  saleTabBox4.classList.add('hidden');
});

const hero = document.querySelector('.hero');
const hoveruv = document.querySelector('.hoveruv');
const search = document.querySelector('.search');
const overlay = document.querySelector('.overlay-1');
const emailThick = document.querySelector('.text-thiny');
const signIn = document.querySelector('#footer-newsletter-email');

const footer = document.querySelectorAll('.nav__list-footer-2');

// const iconFooterOpen = document.querySelector('#dario');

// const dual = function (e) {
//   e.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// search.addEventListener('mouseenter', dual);
// signIn.addEventListener('click', function (e) {
//   e.preventDefault();
//   emailThick.classList.remove('hidden');
// });

// const openFooter = function(){
//   console.log('dskuvilnd');
// }

// const amade = document.querySelector('.nav__list-footer');

// iconFooterOpen.addEventListener('click', function (e){
//   console.log('open');
//   const clicked = e.target.closest('.nav__list-footer-2')

//   clicked.classList.add('operations__tab--active');
// })

// iconFooterOpen.addEventListener('click', function(e){

// })

const searchBtnClose = document.querySelector('.closeX');
const searchOverlay = document.querySelector('.earch-overlay-content');
const overlay2 = document.querySelector('.overlayer-2');
const tag1 = document.querySelector('.tag1');
const currency = document.querySelector('.currency');
const language = document.querySelector('.language');
const languageClose = document.querySelector('.iconCurrency');
const languageContainer = document.querySelector('.language-container');
const signinAccount = document.querySelector('.signin-account');
const signInForm = document.querySelector('.sign__In ');
const iconCLoseSignIn = document.querySelector('.icon-close-signin');
const whishlistForm = document.querySelector('.whishlist__form');
const whishlist = document.querySelector('.whishlist');

//
hoveruv.closest('.tag1').addEventListener('click', function () {
  search.style.visibility = 'visible';
  search.style.opacity = '1';
  // searchOverlay.style.visibility = 'visible';
  // searchOverlay.style.opacity = '1';
});

searchBtnClose.addEventListener('click', function (e) {
  e.preventDefault();
  search.style.visibility = 'invisible';
  search.style.opacity = '0';
});

searchBtnClose.addEventListener('mouseout', function (e) {
  e.preventDefault();
  search.style.visibility = 'invisible';
  search.style.opacity = '0';
});

currency.addEventListener('click', function () {
  language.style.visibility = 'visible';
  language.style.opacity = '1';
  languageContainer.classList.add('language-bag--opened');
});

languageClose.addEventListener('click', () => {
  language.style.visibility = 'hidden';
  language.style.opacity = '0';
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    language.style.visibility = 'hidden';
    language.style.opacity = '0';
  }
});

signInForm.addEventListener('click', function () {
  overlay2.style.visibility = 'visible';
  overlay2.style.opacity = '1';
  signinAccount.style.visibility = 'visible';
  signinAccount.style.opacity = '1';
});

iconCLoseSignIn.addEventListener('click', function () {
  overlay2.style.visibility = '';
  overlay2.style.opacity = '';
  signinAccount.style.visibility = '';
  signinAccount.style.opacity = '';
});

document.addEventListener('keydown', function (e) {
  overlay2.style.visibility = '';
  overlay2.style.opacity = '';
  signinAccount.style.visibility = '';
  signinAccount.style.opacity = '';
});

const section1 = document.querySelector('.section-1 ');

whishlistForm.addEventListener('click', function () {
  hero.style.display = 'none';
  section1.style.display = 'none';
  whishlist.style.visibility = 'visible';
  whishlist.style.opacity = '1';
  whishlist.style.minHeight = '100vh';
});

//IMPORTANT
const btnAddWhishlist = document.querySelector('.btn-add-all-to-bag');
const gridWhishlist = document.querySelector('.whishlist-container-title-grid');
const logo = document.querySelector('.header__logo');
const bagIconCart = document.querySelector('.bag__icon__cart');
const shopping = document.querySelector('.shopping');
const bagCartClose = document.querySelector('.bag__close__icon');
const popupKlarna = document.querySelector('.popupKlarna');
const popup = document.querySelector('.checkout-page-2-popup');
const iconBarMenu = document.querySelector('.menu-bar-icon');
const navBarIcon = document.querySelector('.nav__bar__icon');
const navBarIconClose = document.querySelector('#icon-close__menu');
const bagMobile = document.querySelector('.icon_bag__icon__small');
const heartMobile = document.querySelector('.icon__heart__whishlist');
//btnAddWhishlist.classList.remove('active')
// if there item in whalist //

// gridWhishlist.style.visibility = 'visible';
// gridWhishlist.style.opacity = '1';
// whishlist.style.height = 'auto';
// THEN THIS  when click the logo

//BUG
// bagIconCart.addEventListener('click', function(){
//   shopping.classList.remove('active')
// });

const bagOpen = bagIconCart.closest('button');
bagOpen.addEventListener('click', function () {
  shopping.classList.remove('active');
});
const bagOpenMobile = bagMobile.closest('button');

bagOpenMobile.addEventListener('click', function () {
  shopping.classList.remove('active');
});

bagCartClose.addEventListener('click', function () {
  shopping.classList.add('active');
});

const whishlistMobile = heartMobile.closest('button');
whishlistMobile.addEventListener('click', function () {
  hero.style.display = 'none';
  section1.style.display = 'none';
  whishlist.style.visibility = 'visible';
  whishlist.style.opacity = '1';
  whishlist.style.minHeight = '100vh';
});

// popupKlarna.addEventListener('click', function(){
//     popup.style.visibility = 'visible';
//     popup.style.opacity = '1';
// });

navBarIcon.addEventListener('click', function () {
  iconBarMenu.classList.remove('active');
  iconBarMenu.style.transform = 'scale(1,1)';

  // iconBarMenu
});
const closeNav = navBarIconClose.closest('.close-menu-bar');
closeNav.addEventListener('click', function () {
  console.log('close');
  iconBarMenu.classList.add('active');

  // iconBarMenu
});

const popupAuto = document.querySelector('.popup-auto');
const popupAutoClose = document.querySelector('.close-popup-auto');

// NOTE DISABLE POPUP
/* const setPopup = setTimeout(() => {
  popupAuto.style.transform = 'scale(1,1)';
}, 5000);

popupAutoClose.addEventListener('click', function () {
  //popupAuto.style.transform = 'scale(0,0)'
  popupAuto.style.visibility = 'invisible';
  popupAuto.style.opacity = '0';
  popupAuto.style.display = 'none';
  clearTimeout(setPopup);
}); */

//NOTE do this later
/* if (sessionStorage.getItem('AnnouncementOnce') !== 'true') {
  window.setTimeout(popupwin, 5000);
  function popupwin() {
    ExecuteOrDelayUntilScriptLoaded(function () {
      var options = SP.UI.$create_DialogOptions();
      options.title = 'Announcements';
      options.width = 400;
      options.height = 400;
      options.url = '/SitePages/Announcements.aspx';
      SP.UI.ModalDialog.showModalDialog(options);
    }, 'sp.js');
  }

  sessionStorage.setItem('AnnouncementOnce', 'true');
} */

// setTimeout
/*
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
*/

// FOOTER NAV DROPDOWN
const footerUp1 = document.querySelector('.footer-first');
const footerUp2 = document.querySelector('.footer-second');
const footerUp3 = document.querySelector('.footer-third');
const footerUp4 = document.querySelector('.footer-fouth');
const footerUp5 = document.querySelector('.footer-five');
const footerUp6 = document.querySelector('.footer-six');
const footerUp_1 = document.querySelector('#footerUp_1');
const footerUp_2 = document.querySelector('#footerUp_2');
const footerUp_11 = document.querySelector('#footerUp_11');
const footerUp_4 = document.querySelector('#footerUp_4');
const footerUp_5 = document.querySelector('#footerUp_5');
const footerUp_6 = document.querySelector('#footerUp_6');
const footerUp_44 = document.querySelector('#footerUp_44');
footerUp1.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-footer-rotation');
  footerUp_1.classList.toggle('active-link');
  footerUp_11.classList.toggle('active-link');
});

footerUp2.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-footer-rotation');
  footerUp_2.classList.toggle('active-link');
});

footerUp3.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-footer-rotation');
  footerUp_3.classList.toggle('active-link');
});

footerUp4.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-footer-rotation');
  footerUp_4.classList.toggle('active-link');
  footerUp_44.classList.toggle('active-link');
});

footerUp5.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-footer-rotation');
  footerUp_5.classList.toggle('active-link');
});
footerUp6.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-footer-rotation');
  footerUp_6.classList.toggle('active-link');
});

// FOOTER NAV DROPDOWN END ///

//NOTE HIDDEN TABS ONPRESS EVENT

const tabPress1 = document.querySelector('tab_1_pressed');

// tabPress1.addEventListener('click', function () {
//   console.log('clicked');

// });

const heroSale = document.querySelector('.hero-sale');
const heroContent = document.querySelector('.hero-sale-container');
const womanTab = document.querySelector('.women-tab');
const slider = document.querySelector('.slider');
const tabsContent = document.querySelectorAll('.hero__tab__hidden');
const sliderTabsContent = document.querySelectorAll('.slider__hidden ');

const navContainer = document.querySelector('.nav__container');
navContainer.addEventListener('click', function (e) {
  //const clickedIt = e.target.parentElement;
  const clickedIt = e.target.closest('.nav__btn');
  console.log(clickedIt);
  // Guard Close -> if there is nothing clicked returns immediatly
  if (!clickedIt) return;

  // Remove Active
  tabsContent.forEach(t => t.classList.remove('hero-sale--active'));
  sliderTabsContent.forEach(t => t.classList.remove('slider__contain-active'));
  // Active content

  document
    .querySelector(`.hero-sale__content--${clickedIt.dataset.tab} `)
    .classList.add('hero-sale--active');

  document
    .querySelector(`.slider__content--${clickedIt.dataset.tab}`)
    .classList.add('slider__contain-active');
});

// Slider
const sliderer = function () {
  const slides = document.querySelectorAll('.slidex');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('mouseover', nextSlide);
  btnLeft.addEventListener('mouseover', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
};
sliderer();

const smallImgs = document.querySelectorAll('.slidex-container-img');
const contRemoveImgs = document.querySelectorAll('.slidex-container-img');
const contRemoveImgsTab = document.querySelectorAll(
  '.slidex-container-img-overlay'
);
