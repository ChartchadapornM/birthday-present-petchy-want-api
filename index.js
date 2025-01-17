import exp from "express";
import cors from "cors";
const app = exp();
app.use(exp.json());
app.use(cors());

const products = [
  {
    id: 1,
    name: "Macbook",
    img: "https://www.apple.com/newsroom/images/2024/10/new-macbook-pro/tile/Apple-MacBook-Pro-M4-lineup-lp.jpg.og.jpg?202411051344",
    desc: "MacBook Pro ใหม่ของ Apple มาพร้อมชิปตระกูล M4 ที่ทรงพลังเหลือล้นด้วยกล้อง 12MP Center Stage ที่เหนือชั้น, Thunderbolt 5 บนชิป M4 Pro และ M4 Max รวมถึงตัวเลือกจอภาพ Nano-texture ใหม่ล่าสุด ซึ่งทั้งหมดนี้ทำให้ MacBook Pro มากความสามารถยิ่งขึ้น และโปรสมชื่อยิ่งกว่าเดิม",
    price: 80000,
    type: "Hot Deals",
  },
  {
    id: 2,
    name: "Airpods Pro",
    img: "https://www.iphone-droid.net/wp-content/uploads/2023/05/AirPods-and-AirPods-Pro-Pricing-in-2024.jpg",
    desc: "AirPods 3 มาพร้อมคุณสมบัติ EQ แบบปรับได้เองที่จะปรับเสียงให้เข้ากับหูของคุณแบบเรียลไทม์ รองรับ Spatial Audio ระบบเสียงตามตำแหน่งจะทำให้เสียงอยู่ล้อมรอบตัวผู้ใช้เพื่อสร้างประสบการณ์การฟังแบบสามมิติที่เหมือนในโรงภาพยนตร์ และเมื่อมาพร้อม Dolby Atmos ด้วยแล้ว บอกเลยว่านี่จะเป็นเสียงที่ยอดเยี่ยมที่สุดเท่าที่เคยได้ยินจาก AirPods",
    price: 7000,
    type: "Hot Deals",
  },
  {
    id: 3,
    name: "Essentials",
    img: "https://m.media-amazon.com/images/I/51w-af05CzL._AC_UL1500_.jpg",
    desc: "This hoodie is made of 100% cotton and has a breathable and comfortable feel.",
    price: 5000,
    type: "Clothes",
  },
  {
    id: 4,
    name: "Polo ralph lauren",
    img: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1470157_alternate10?$rl_4x5_pdp$",
    desc: "Cable-knit with pure cotton, this slim crewneck cardigan is finished with the signature embroidered Pony on the chest.",
    price: 30000,
    type: "Clothes",
  },
  {
    id: 5,
    name: "Adidas Samba",
    img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/b19389122c51434eb5bea8bf0117da35_faec/Samba_OG_B75806_db07_standard.jpg",
    desc: " รูปทรงรองเท้าคู่นี้ยังคงเอกลักษณ์ตามแบบต้นฉบับเอาไว้ มาพร้อมอัปเปอร์หนังสัมผัสนุ่มสุดคลาสสิก โอเวอร์เลย์หนังซูเอด และพื้นยาง ซึ่งทําให้รองเท้าคู่นี้กลายเป็นไอเทมสำหรับในและนอกสนามที่ทุกคนต้องมีติดตู้",
    price: 3800,
    type: "Others",
  },
  {
    id: 6,
    name: "Christian Dior",
    img: "https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-push-cross-link-lignes/dior-book-tote/28737491-13-fre-FR/dior-book-tote_1440_1200.jpg?imwidth=3000",
    desc: "กระเป๋า Dior Book Tote ซึ่งเป็นผลงานชิ้นเด่นของ Maria Grazia Chiuri มีวางจำหน่ายในรูปแบบใหม่ที่สง่างาม สไตล์ที่ประณีตนี้เปิดตัวในงานแฟชั่นโชว์ Cruise 2024 และโดดเด่นด้วยลายปัก Dior Oblique สีน้ำเงินอันเป็นเอกลักษณ์จับคู่กับหนังลูกวัว ด้านในกระเป๋ามีกระเป๋าติดซิปกับช่องกระเป๋าที่ออกแบบมาเพื่อเอาไว้ใส่ของใช้ประจําวัน",
    price: 135000,
    type: "Others",
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});
app.post("/add-product", (req, res) => {
  const { name, img, desc, price, type } = req.body;
  const newProduct = {
    id: products.length + 1,
    name: name,
    img: img,
    desc: desc,
    price: price,
    type: type,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get("/product-hotdeals", (req, res) => {
  const product_hotdeals = products.filter((item) => item.type == "Hot Deals");
  res.json(product_hotdeals);
});
app.get("/product-clothes", (req, res) => {
  const product_clothes = products.filter((item) => item.type == "Clothes");
  res.json(product_clothes);
});
app.get("/product-others", (req, res) => {
  const product_others = products.filter((item) => item.type == "Others");
  res.json(product_others);
});

app.listen(8002, () => {
  console.log("App Start at port 8002");
});
