const menu = [
 {code:"SP000103",cat:"food",jp:"Chả giò (Nem rán) 3 cái",vn:"Chả giò / Nem rán 3 cái",price:540,img:"nem-ran.jpg"},
 {code:"SP000102",cat:"set",jp:"Set 4：Bún bò huế + 2 chả giò",vn:"Set 4",price:1400,img:"bun-bo-hue.jpg"},
 {code:"SP000101",cat:"set",jp:"Set 3：Phở bò +1/2 Bánh mỳ",vn:"Set 3",price:1300,img:"pho-bo.jpg"},
 {code:"SP000100",cat:"set",jp:"SET 2：Bún bò huế + 1/2 bánh mỳ + 2 nem chua rán",vn:"Set 2",price:1500,img:"bun-bo-hue.jpg"},
 {code:"SP000099",cat:"set",jp:"SET 1：Phở bò + 2 gỏi cuốn tôm thịt",vn:"Set 1",price:1400,img:"pho-bo.jpg"},
 {code:"SP000026",cat:"food",jp:"PHỞ BÒ TÁI (Tô)",vn:"Phở bò tái",price:980,img:"pho-bo.jpg"},
 {code:"SP000027",cat:"food",jp:"PHỞ BÒ CHÍN",vn:"Phở bò chín",price:980,img:"pho-bo.jpg"},
 {code:"SP000029",cat:"food",jp:"PHỞ BÒ TÁI BẮP",vn:"Phở bò tái bắp",price:980,img:"pho-bo.jpg"},
 {code:"SP000031",cat:"food",jp:"BÚN BÒ HUẾ",vn:"Bún bò Huế",price:1080,img:"bun-bo-hue.jpg"},
 {code:"SP000032",cat:"food",jp:"Bánh mỳ xá xíu",vn:"Bánh mì xá xíu",price:750,img:"banh-mi.jpg"},
 {code:"SP000033",cat:"food",jp:"Bánh mỳ thịt nướng",vn:"Bánh mì thịt nướng",price:750,img:"banh-mi.jpg"},
 {code:"SP000034",cat:"food",jp:"Bánh mỳ giò chả",vn:"Bánh mì giò chả",price:700,img:"banh-mi.jpg"},
 {code:"SP000035",cat:"food",jp:"Bánh mỳ thập cẩm",vn:"Bánh mì thập cẩm",price:800,img:"banh-mi.jpg"},
 {code:"SP000037",cat:"food",jp:"Gà chiên Karage",vn:"Gà chiên Karaage",price:580,img:"karaage.jpg"},
 {code:"SP000038",cat:"food",jp:"Lạc rang",vn:"Lạc rang",price:380,img:"lac-rang.jpg"},
 {code:"SP000039",cat:"food",jp:"Bánh Đa Nướng",vn:"Bánh đa nướng",price:380,img:"banh-da.jpg"},
 {code:"SP000040",cat:"food",jp:"Giò Lụa",vn:"Giò lụa",price:550,img:"gio-lua.jpg"},
 {code:"SP000041",cat:"food",jp:"Nem Chua Rán",vn:"Nem chua rán",price:650,img:"nem-chua-ran.jpg"},
 {code:"SP000043",cat:"food",jp:"Dưa chuột chẻ",vn:"Dưa chuột chẻ",price:500,img:"dua-chuot.jpg"},
 {code:"SP000044",cat:"food",jp:"Đậu luộc",vn:"Đậu luộc",price:500,img:"dau-luoc.jpg"},
 {code:"SP000045",cat:"food",jp:"Gỏi cuốn tôm thịt 3 cái",vn:"Gỏi cuốn tôm thịt 3 cái",price:750,img:"goi-cuon.jpg"},
 {code:"SP000060",cat:"food",jp:"Thêm Trứng Chần",vn:"Trứng chần",price:110,img:"trung-chan.jpg"},
 {code:"SP000061",cat:"food",jp:"Thêm bún・phở",vn:"Thêm bún / phở",price:110,img:"them-bun.jpg"},
 {code:"SP000073",cat:"food",jp:"Phở cho bé",vn:"Phở cho bé",price:650,img:"pho-be.jpg"},
 {code:"SP000089",cat:"food",jp:"PHỞ THẬP CẨM",vn:"Phở thập cẩm",price:980,img:"pho-thap-cam.jpg"},
 {code:"SP000098",cat:"drink",jp:"Bia Asahi 633ml",vn:"Bia Asahi 633ml",price:650,img:"bia-asahi.jpg"},
 {code:"SP000095",cat:"drink",jp:"Nước Dừa（dừa lon）",vn:"Nước dừa",price:350,img:"nuoc-dua.jpg"},
 {code:"SP000092",cat:"drink",jp:"NƯỚC MÍA（Mía lon）",vn:"Nước mía",price:350,img:"nuoc-mia.jpg"},
 {code:"SP000091",cat:"drink",jp:"Nước sting đỏ",vn:"Sting đỏ",price:380,img:"sting.jpg"},
 {code:"SP000075",cat:"drink",jp:"Bia Heineken",vn:"Bia Heineken",price:600,img:"heineken.jpg"},
 {code:"SP000078",cat:"drink",jp:"Bia Asahi 0 độ",vn:"Asahi 0.0",price:550,img:"asahi-zero.jpg"},
 {code:"SP000079",cat:"drink",jp:"CocaCola",vn:"Coca-Cola",price:350,img:"coca-cola.jpg"},
 {code:"SP000080",cat:"drink",jp:"Bò Húc",vn:"Red Bull",price:480,img:"redbull.jpg"},
 {code:"SP000081",cat:"drink",jp:"Trà xanh 0 độ",vn:"Trà xanh 0 độ",price:350,img:"tra-xanh.jpg"},
 {code:"SP000082",cat:"drink",jp:"Nước Nuber one",vn:"Number One",price:460,img:"number-one.jpg"},
 {code:"SP000083",cat:"drink",jp:"TRÀ BÍ ĐAO",vn:"Trà bí đao",price:350,img:"tra-bi-dao.jpg"},
 {code:"SP000084",cat:"drink",jp:"Trà chanh C2",vn:"Trà chanh C2",price:380,img:"tra-chanh.jpg"},
 {code:"SP000085",cat:"drink",jp:"Trà đào C2",vn:"Trà đào C2",price:380,img:"tra-dao.jpg"},
 {code:"SP000086",cat:"drink",jp:"Nước Me",vn:"Nước me",price:350,img:"nuoc-me.jpg"},
 {code:"SP000087",cat:"drink",jp:"Nước Chanh dây",vn:"Nước chanh dây",price:350,img:"chanh-day.jpg"},
 {code:"SP000088",cat:"drink",jp:"Trà dr Thanh",vn:"Trà Dr Thanh",price:380,img:"dr-thanh.jpg"}
];

const grid = document.getElementById("menu-grid");
function render(filter="all"){
  const list = filter==="all" ? menu : menu.filter(x=>x.cat===filter);
  grid.innerHTML = list.map(x=>`
    <article class="menu-card">
      <div class="food-img" style="background-image:url('images/${x.img}')">
        <span>${x.img}<br>写真を追加してください</span>
      </div>
      <div class="menu-body">
        <div class="menu-code">${x.code}</div>
        <div class="menu-name-jp">${x.jp}</div>
        <div class="menu-name-vn">${x.vn}</div>
        <div class="price">¥${x.price.toLocaleString("ja-JP")} <span class="tax">（税込）</span></div>
      </div>
    </article>`).join("");
}
document.querySelectorAll(".category-tabs button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelector(".category-tabs .active").classList.remove("active");
    btn.classList.add("active");
    render(btn.dataset.filter);
  });
});
render();
