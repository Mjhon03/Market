const main = document.getElementById('main')
const all = document.getElementById('all')
const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');
let product = Object.values(products);
let productNew = Object.values(newproducts);
const modalDiv = document.getElementById('newProduct');
const modalChange = document.getElementById('modalz');
const modalChange2 = document.getElementById('modalx');
const containerModalJ = document.getElementById('containerModal');
const valida = document.getElementById('validation');
const btncar = document.getElementById('car')
const tableContent = document.getElementById('table')
const car_info_conte = document.getElementById('divCar');
const precio = document.getElementById('precioTotal');

cart_produ = [];


modalDiv.addEventListener('click', () => {  
    containerModalJ.classList.toggle('cambio');
});
modalChange.addEventListener('click', () => {  
    containerModalJ.classList.remove('cambio');
    function card_new(count_card) {
        for (let i = 0; i < count_card; i++) {
            create_new_card();
        }
    }
    console.log(Object.values(products));
    console.log(product.length);
    card_new(1);   
});
btncar.addEventListener('click', () => {  
    tableContent.classList.toggle('active');
});
modalChange2.addEventListener('click', () => {  
    tableContent.classList.remove('active');
});
const imagenPreview = document.getElementById('img-preview')
const imgUploader = document.getElementById('imagenUploader')
const imgName = document.getElementById('nameUploader');
const btnAdd = document.getElementById('btnadd')
const desc = document.getElementById('description');
const preciUploader = document.getElementById('priceUploader');
const claoudinary_url ='https://api.cloudinary.com/v1_1/dflrtslxs/image/upload';
const claudinary_upload_preset='fzhjd9gs';
let res;


imgUploader.addEventListener('change',async(e)=>{
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append('file',files);
    formData.append('upload_preset', claudinary_upload_preset);
    res = await axios.post(claoudinary_url,formData,{
        Headers:{
            'Content-Type': 'multipart/form-data'
        }
    });
    console.log(res);
    imagenPreview.src = res.data.secure_url;
});
btnAdd.addEventListener('click', () => {  
    for (let i = 0;  i<=productNew.length; i++) {
        let NewProduct =newproducts.push({id:i,name:imgName.value,URL:res.data.secure_url,Desc:desc.value})
        console.log(res.data.secure_url);
        console.log(Object.values(newproducts));
    }
    valida.classList.add('active');
});
hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});
function create_Card() {
    products.forEach((element)=> {
        
        const card_render = document.createElement('div');
        const card_name = document.createElement('h1');
        const card_img = document.createElement('img')
        const card_btn  = document.createElement('button');
        const card_render_img = document.createElement('div');
        const card_render_info = document.createElement('div');
        const card_price = document.createElement('h2');
        
        card_render.classList.add('card');
        card_name.classList.add('name');
        card_btn.classList.add('btn');
        card_name.setAttribute('id', 'name');
        card_name.textContent = element.name;
        card_img.classList.add('imgs');
        card_img.setAttribute('src',element.URL); 
        card_img.setAttribute('alt','Image Card');
        card_render_info.classList.add('cardInfo')
        card_price.textContent = element.price + '$'
        card_btn.setAttribute('id', element.id)
        card_btn.addEventListener('click', addToCar)
        card_btn.textContent = 'Buy';
        card_render_info.classList.add('card_render_info')

        card_render_img.appendChild(card_img);
        card_render_info.appendChild(card_btn);
        card_render_info.appendChild(card_price);
        card_render.appendChild(card_name)
        card_render.appendChild(card_render_img)
        card_render.appendChild(card_render_info)
        all.appendChild(card_render);
    });
}
function create_new_card() {
    newproducts.forEach(element => {
        
        const card_render = document.createElement('div');
        const card_name = document.createElement('h1');
        const card_img = document.createElement('img')
        const card_btn  = document.createElement('button');
        const card_render_img = document.createElement('div');
        const card_render_info = document.createElement('div');
        const card_price = document.createElement('h2');
        
        card_render.classList.add('card');
        card_name.classList.add('name');
        card_btn.classList.add('btn');
        card_name.setAttribute('id', 'name');
        card_name.textContent = element.name;
        card_img.classList.add('imgs');
        card_img.setAttribute('src',element.URL); 
        card_img.setAttribute('alt','Image Card');
        card_render_info.classList.add('cardInfo')
        card_price.textContent = preciUploader.value + '$'
        card_btn.setAttribute('id', element.id)
        card_btn.addEventListener('click', addToCar)
        card_btn.textContent = 'Buy';
        card_name.textContent = imgName.value;
        card_render_info.classList.add('card_render_info')

        card_render_img.appendChild(card_img);
        card_render_info.appendChild(card_btn);
        card_render_info.appendChild(card_price);
        card_render.appendChild(card_name)
        card_render.appendChild(card_render_img)
        card_render.appendChild(card_render_info)
        all.appendChild(card_render);
    });
}
function card_new(count_card) {
    
    for (let i = 0; i < count_card; i++) {
        create_Card();
    }
    
}
const showCar = () =>{
    car_info_conte.innerHTML = ''
    let lista = [...new Set(cart_produ)]
    
    lista.forEach(item =>{
        const allproduct = products.filter(products =>{
            return products.id === parseInt(item);
        })
        let cont = 0;
        
        for(let id of cart_produ){
            if(id === item){
                cont = cont + 1 ;
            }
        }   
        let new_price = parseInt(allproduct[0].price) * cont
        const card_producr_car = document.createElement('div')
        const car_name_div = document.createElement('div')
        const car_name = document.createElement('h3')
        const car_img = document.createElement('img')
        const car_price = document.createElement('h3');
        const car_cont = document.createElement('h1')
        const btn_sum = document.createElement('button');
        const btn_rest = document.createElement('button');
        const btn_delete = document.createElement('button');
        
        card_producr_car.classList.add('car_info_card');
        car_name_div.classList.add('carDiv')
        car_name.classList.add('carName')
        car_name.textContent = allproduct[0].name;
        car_img.classList.add('imgCar')
        car_price.classList.add('priceCar')
        
        
        btn_sum.setAttribute('id', allproduct[0].id);
        btn_rest.setAttribute('id',allproduct[0].id);
        btn_delete.setAttribute('id',allproduct[0].id);
        
        car_img.setAttribute('src', allproduct[0].URL)
        
        car_price.textContent = new_price + ".00 $";
        btn_sum.textContent = '+';
        btn_rest.textContent = '-'
        btn_delete.textContent = 'X';
        car_cont.textContent = cont;
        
        card_producr_car.appendChild(car_img);
        card_producr_car.appendChild(car_price);
        card_producr_car.appendChild(car_cont);
        card_producr_car.appendChild(btn_sum);
        card_producr_car.appendChild(btn_rest);
        card_producr_car.appendChild(btn_delete);
        
        btn_sum.addEventListener('click',addToCar );
        btn_rest.addEventListener('click', resProduct);
        btn_delete.addEventListener('click', deleteProduct)
        
        car_name_div.appendChild(car_name)
        car_name_div.appendChild(card_producr_car)

        car_info_conte.appendChild(car_name_div)
    })
}

const addToCar = (e) => {
    cart_produ.push(e.target.getAttribute('id'));
    showCar();
    allPrice(); 
}

const resProduct = (e) => {
    let item = e.target.getAttribute('id') 
    cart_produ.splice(parseInt(cart_produ.indexOf(item)),1)
    if (cart_produ.length == 0) {
        precio.textContent=0 + ".00 $";
    }
    showCar();
    allPrice();
}
const deleteProduct = (e) => {
    let item = e.target.getAttribute('id');
    cart_produ = cart_produ.filter((id) => {
        return id !== item;
    });
    if (cart_produ.length == 0) {
        precio.textContent=0 + ".00 $";
    }
    showCar();
    allPrice();

}

const allPrice = () => {
    let total = 0;
    cart_produ.forEach(item =>{
        const allpreci = product.filter(products =>{
            return products.id === parseInt(item);
        });
        console.log(allpreci);
        if(allpreci[0].id===parseInt(item)){
            total = total + parseFloat(allpreci[0].price);
        }
        precio.textContent= parseFloat(total) + ".00 $";   
    });
}     
console.log(allPrice);
card_new(1);