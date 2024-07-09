class Transport{
    constructor(type, brand, price){
        this.type=type;
        this.brand = brand;
        this.price = price;
        

    };
    getInfo(){
        return "вид ТС " + this.type + ", "+ "Марка "+ this.brand
    };
    getPrice(){
        return "Цена" +" "+ this.price.toLocaleString("RU-ru") +" руб."
    }
}

class Car extends Transport {
    constructor(type, price, brand, doors){
        super(type, price, brand);
        this.doors=doors;
        
    }
    getInfo = this.getInfo.bind(this);
    getPrice = this.getPrice.bind(this);
    getDoorsCount = this.getDoorsCount.bind(this);
    getDoorsCount(){
        return "Количество дверей"+" "+this.doors
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed){
        super(type, price, brand);
        this.maxSpeed=maxSpeed;
    }
    getInfo = this.getInfo.bind(this);
    getPrice = this.getPrice.bind(this);
    getMaxSpeed = this.getMaxSpeed.bind(this);
    getMaxSpeed(){
        return "Максимальная скорость"+" "+this.maxSpeed
    }
}

const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
    }
  ];


//создаем объект класса транспорт, не знаю зачем, наверное для тренировки
let dataTr = data.map(({type, brand, price})=>({type, brand, price}));
console.log(dataTr);
let data3 = dataTr.map(e=> new Transport(...Object.values(e)));
console.log(data3);
//создаем объект класса car
let dataC = data.map(({type, brand, price, doors})=>({type, brand, price, doors}));
console.log(dataC);
let dataCars = dataC.map(e=> new Car(...Object.values(e)));
dataCars = dataCars.filter(item=>item.type=='car');
console.log("dataCars", dataCars);
// создаем объект класса bike
let dataB = data.map(({type, brand, price, maxSpeed})=>({type, brand, price, maxSpeed}));
console.log(dataB);
let dataBikes = dataB.map(e=> new Bike(...Object.values(e)));
dataBikes = dataBikes.filter(item=>item.type=='bike');
console.log("dataBikes", dataBikes);
//выводим на страницу информацию
for(i=0; i<dataCars.length;i++){
let carObj = dataCars[i];
console.log(carObj.getInfo(), carObj.getPrice(), carObj.getDoorsCount());
const container = document.getElementById("transportInfo");
const transportCard = document.createElement("div");
transportCard.className = "transportCard";
transportCard.textContent = carObj.getInfo()+" " + carObj.getPrice()+" " + carObj.getDoorsCount();
container.append(transportCard);
};
for(i=0; i<dataBikes.length;i++){
let bikeObj = dataBikes[i];
console.log(bikeObj.getInfo(), bikeObj.getPrice(), bikeObj.getMaxSpeed);
const container = document.getElementById("transportInfo");
const transportCard = document.createElement("div");
transportCard.className = "transportCard";
transportCard.textContent = bikeObj.getInfo()+" " + bikeObj.getPrice()+" " + bikeObj.getMaxSpeed();
container.append(transportCard);
};
/*
for (i=0; i<data3.length; i++){
  let myobj = data3[i];
  console.log(myobj.getInfo());
  console.log(myobj);
}**/
/*for (i = 0; i< data.length; i++) {
  let myobj=  new Transport(data.type[i], data[i.brand], data[i.price]);
  console.log(myobj);}**/

/*
data.map((transport)=>{
  const container = document.getElementById("transportInfo");
  const transportCard = document.createElement("div");
  transportCard.className = "transportCard";
  transportCard.textContent = transport.type;
  container.append(transportCard);
  const transportBrand = document.createElement("h3");
  transportBrand.textContent = `Марка: ${transport.brand}`;
  transportCard.appendChild(transportBrand);})**/