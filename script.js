const IMG = {
  pho: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pho_bo.jpg",
  bun: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bun_bo_hue.JPG",
  banhmi: "https://commons.wikimedia.org/wiki/Special:Redirect/file/B%C3%A1nh_m%C3%AC.jpg",
  spring: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vietnamese_spring_roll.jpg",
  nem: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Nem-chua-ran2.jpg",
  sugar: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sugarcanejuice.jpg",
  cola: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Coca-cola.jpg",
  coffee: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vietnamese_coffee_with_milk_and_ice.jpg"
};

const menu = [
["SP000103","food","Chả giò (Nem rán) 3 cái","Chả giò / Nem rán 3 cái",540,"nem"],
["SP000102","set","Set 4：Bún bò huế + 2 chả giò","Set 4",1400,"bun"],
["SP000101","set","Set 3：Phở bò +1/2 Bánh mỳ","Set 3",1300,"pho"],
["SP000100","set","SET 2：Bún bò huế + 1/2 bánh mỳ + 2 nem chua rán","Set 2",1500,"bun"],
["SP000099","set","SET 1：Phở bò + 2 gỏi cuốn tôm thịt","Set 1",1400,"spring"],
["SP000026","food","PHỞ BÒ TÁI (Tô)","Phở bò tái",980,"pho"],
["SP000027","food","PHỞ BÒ CHÍN","Phở bò chín",980,"pho"],
["SP000029","food","PHỞ BÒ TÁI BẮP","Phở bò tái bắp",980,"pho"],
["SP000031","food","BÚN BÒ HUẾ","Bún bò Huế",1080,"bun"],
["SP000032","food","Bánh mỳ xá xíu","Bánh mì xá xíu",750,"banhmi"],
["SP000033","food","Bánh mỳ thịt nướng","Bánh mì thịt nướng",750,"banhmi"],
["SP000034","food","Bánh mỳ giò chả","Bánh mì giò chả",700,"banhmi"],
["SP000035","food","Bánh mỳ thập cẩm","Bánh mì thập cẩm",800,"banhmi"],
["SP000037","food","Gà chiên Karage","Gà chiên Karaage",580,"nem"],
["SP000038","food","Lạc rang","Lạc rang",380,"nem"],
["SP000039","food","Bánh Đa Nướng","Bánh đa nướng",380,"banhmi"],
["SP000040","food","Giò Lụa","Giò lụa",550,"nem"],
["SP000041","food","Nem Chua Rán","Nem chua rán",650,"nem"],
["SP000043","food","Dưa chuột chẻ","Dưa chuột chẻ",500,"spring"],
["SP000044","food","Đậu luộc","Đậu luộc",500,"spring"],
["SP000045","food","Gỏi cuốn tôm thịt 3 cái","Gỏi cuốn tôm thịt 3 cái",750,"spring"],
["SP000060","food","Thêm Trứng Chần","Trứng chần",110,"pho"],
["SP000061","food","Thêm bún・phở","Thêm bún / phở",110,"pho"],
["SP000073","food","Phở cho bé","Phở cho bé",650,"pho"],
["SP000089","food","PHỞ THẬP CẨM","Phở thập cẩm",980,"pho"],
["SP000098","drink","Bia Asahi 633ml","Bia Asahi 633ml",650,"cola"],
["SP000095","drink","Nước Dừa（dừa lon）","Nước dừa",350,"sugar"],
["SP000092","drink","NƯỚC MÍA（Mía lon）","Nước mía",350,"sugar"],
["SP000091","drink","Nước sting đỏ","Sting đỏ",380,"cola"],
["SP000075","drink","Bia Heineken","Bia Heineken",600,"cola"],
["SP000078","drink","Bia Asahi 0 độ","Asahi 0.0",550,"cola"],
["SP000079","drink","CocaCola","Coca-Cola",350,"cola"],
["SP000080","drink","Bò Húc","Red Bull",480,"cola"],
["SP000081","drink","Trà xanh 0 độ","Trà xanh 0 độ",350,"sugar"],
["SP000082","drink","Nước Nuber one","Number One",460,"cola"],
["SP000083","drink","TRÀ BÍ ĐAO","Trà bí đao",350,"sugar"],
["SP000084","drink","Trà chanh C2","Trà chanh C2",380,"sugar"],
["SP000085","drink","Trà đào C2","Trà đào C2",380,"sugar"],
["SP000086","drink","Nước Me","Nước me",350,"sugar"],
["SP000087","drink","Nước Chanh dây","Nước chanh dây",350,"sugar"],
["SP000088","drink","Trà dr Thanh","Trà Dr Thanh",380,"sugar"]
];

const grid=document.getElementById("menu-grid");
function render(filter="all"){
  const list=filter==="all"?menu:menu.filter(x=>x[1]===filter);
  grid.innerHTML=list.map(x=>`
    <article class="card">
      <div class="card-img" style="background-image:url('${IMG[x[5]]}')"></div>
      <div class="card-body">
        <div class="code">${x[0]}</div>
        <div class="jp">${x[2]}</div>
        <div class="vn-name">${x[3]}</div>
        <div class="price">¥${x[4].toLocaleString("ja-JP")} <small>（税込）</small></div>
      </div>
    </article>`).join("");
}
document.querySelectorAll(".tabs button").forEach(b=>b.addEventListener("click",()=>{
  document.querySelector(".tabs .active").classList.remove("active");
  b.classList.add("active");
  render(b.dataset.filter);
}));
render();
