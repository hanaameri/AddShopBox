window.addEventListener('load' , function (){
    let form = document.querySelector('#form-information')
    const inputShoesName = document.querySelector('#shoes-name-text-input')
    const inputShoesUpload = document.querySelector('#upload-img-shoes-input')
    const inputShoesPrice = document.querySelector('#price-shoes-input')
    const listOfShoes = document.querySelector('#row-itwm-shoes')
    const ItemAddShow = document.querySelector('#Item-Add-Show')
    
    


    form.addEventListener('submit' , function (e){
        e.preventDefault()
        const vlueOfInputshoesname = inputShoesName.value ;
        console.log(vlueOfInputshoesname)
        const vlueInputshoesimg = inputShoesUpload.value ;
        console.log(vlueInputshoesimg)
        const vlueInputshoesprice = inputShoesPrice.value ;

        const ItemShoesRow = document.createElement('div')
        ItemShoesRow.classList.add('col-sm-4')
        
        const ItemShoes = document.createElement('div')
        ItemShoes.classList.add('Shoes-item')
        
        const titleShoes = document.createElement('h2')
        titleShoes.classList.add('Name-shoes') 
        titleShoes.innerHTML = vlueOfInputshoesname
        ItemShoes.appendChild(titleShoes)

        const pictureOfShoes = document.createElement('img')
        pictureOfShoes.classList.add('Shoes-photo')
        pictureOfShoes.innerHTML = vlueInputshoesimg
        ItemShoes.appendChild(pictureOfShoes)

        const priceShoes = document.createElement('p')
        priceShoes.classList.add('Price-Shoes')
        priceShoes.innerHTML = vlueInputshoesprice
        ItemShoes.appendChild(priceShoes)

        const AddBtnShoes = document.createElement('button')
        AddBtnShoes.classList.add('btn-add-shop')
        AddBtnShoes.innerHTML = 'ADD'
        ItemShoes.appendChild(AddBtnShoes)

        listOfShoes.appendChild(ItemShoesRow) 
        ItemShoesRow.appendChild(ItemShoes);

    })

    const ShoesInformation = document.querySelector('#shoesinformation')
    const ShoesInformationName = document.querySelector('#shoes-information-name')
    const ShoesInformationImage = document.querySelector('#shoes-information-image')
    const ShoesInformationPrice = document.querySelector('#shoes-information-price')
    const ShoesInformationCounter = document.querySelector('#shoes-information-counter-Delete')
    const ButtonAddItem = this.document.getElementsByClassName('btn-add-shop')

  for (i=0 ; i < ButtonAddItem.length ; i++) {
       button = ButtonAddItem[i]
       button.addEventListener('click' ,clickAddCart )
    }


    function clickAddCart (event){
        button = event.target
        let item = button.parentElement.parentElement
        const getShoesName = item.getElementsByClassName('Name-shoes')[0].innerHTML
        const getShoesImg = item.getElementsByClassName('Shoes-photo')[0].src
        const getShoesPrice = item.getElementsByClassName('Price-Shoes')[0].innerHTML
        AddCartItem (getShoesName,getShoesImg,getShoesPrice)

    }


    function AddCartItem (getShoesName,getShoesImg,getShoesPrice){

      const shoesNameDiv = document.createElement('div')
      shoesNameDiv.classList.add('shoesName-div')
      shoesNameDiv.innerHTML = getShoesName
      ShoesInformationName.appendChild(shoesNameDiv)
      ShoesInformation.appendChild(ShoesInformationName)

      const shoesimgDiv = document.createElement('img')
      shoesimgDiv.classList.add('img-baket')
      shoesimgDiv.innerHTML = getShoesImg
      ShoesInformationImage.appendChild(shoesimgDiv)
      ShoesInformation.appendChild(ShoesInformationImage)

      const shoesPriceDiv = document.createElement('p')
      shoesPriceDiv.classList.add('shoes-price-basket')
      shoesPriceDiv.innerHTML = getShoesPrice
      ShoesInformationPrice.appendChild(shoesPriceDiv)
      ShoesInformation.appendChild(ShoesInformationPrice)
      
      const deleteAndCounter = document.createElement('div')
      deleteAndCounter.classList.add('delete-counter-div')

      const shoesCounterDiv = document.createElement('input')
      shoesCounterDiv.type = 'number'
      shoesCounterDiv.value = '1'
      shoesCounterDiv.classList.add('input-number')

      const shoesDeleteDiv = document.createElement('button')
      shoesDeleteDiv.classList.add('btn-remove')
      shoesDeleteDiv.innerHTML = "remove"

      
      deleteAndCounter.appendChild(shoesDeleteDiv)
      deleteAndCounter.appendChild(shoesCounterDiv)
      ShoesInformationCounter.appendChild(deleteAndCounter)
      ShoesInformation.appendChild(ShoesInformationCounter)
      ItemAddShow.appendChild(ShoesInformation)

let removeBtnItem = document.getElementsByClassName('btn-remove')
for (i=0 ; i<removeBtnItem.length ; i++) {
     console.log('hana')
    }

    
   }
})

