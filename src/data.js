import CauHenCauThe from './data/CauHenCauThe-DinhDung-6994741.mp3';
import Gone from './data/Gone-ROSE-6964052.mp3';
import CauHon from './data/CauHon-VanMaiHuong-5849944.mp3'
import ChuyenCuaMuaDong from './data/ChuyenCuaMuaDong-BuiAnhTuan-4683255.mp3'
import DongThoiGian from './data/DongThoiGianOSTMuiNgoGai-DoanPh_3r4x.mp3'
import KhongSaoMaEmDayRoi from './data/KhongSaoMaEmDayRoi-HuynhThanhThao-6103864.mp3'
import MatEm from './data/MatEm-NooPhuocThinh_3zxzd.mp3'
import NgayChuaGiongBao from './data/NgayChuaGiongBaoNguoiBatTuOst-BuiLanHuong-5708274.mp3'
import NgayMaiNangLenAnhSeVe from './data/NgayMaiNangLenAnhSeVe-AnhKhang_343t6.mp3'
import ThangMayEmNhoAnh from './data/ThangMayEmNhoAnh-HaAnhTuan-6995531.mp3'
import XinLoi from './data/ThangMayEmNhoAnh-HaAnhTuan-6995531.mp3'

// image


import cauhencautheimg from './data/img/cauhencauthe.jpg'
import cauhonimg from './data/img/cauhon.jpg'
import chuyencuamuadongimg from './data/img/chuyencuamuadong.jpg'
import dongthoigianimg from './data/img/dongthoigian.jpg'
import goneimg from './data/img/gone.jpg'
import thangmayemnhoanhimg from './data/img/thangmayemnhoanh.jpg'


const albums = [
    {
        id: 1,
        name: "Câu hẹn câu thề",
        source: CauHenCauThe,
        singer: "Nguyễn Văn A",
        category: "nhac-tre",
        time: "3:30p",
        viewer: "90k",
        img: cauhencautheimg
    },
    {
        id: 2,
        name: "Gone",
        source: Gone,
        singer: "Nguyễn Văn B",
        category: "nhac-tre",
        time: "3:30p",
        viewer: "17Tr",
        img: goneimg
    },
    {
        id: 3,
        name: "Cầu hôn",
        source: CauHon,
        singer: "Nguyễn Văn c",
        category: "nhac-tre",
        time: "3:30p",
        viewer: "1T",
        img: cauhonimg
    },
    {
        id: 4,
        name: "Chuyện của mùa đông",
        source: ChuyenCuaMuaDong,
        singer: "Trần Thị D",
        category: "nhac-tre",
        time: "3:30p",
        viewer: "10Tr",
        img: chuyencuamuadongimg
    },
    {
        id: 5,
        name: "Dòng thời gian (OST Mùi ngò gai)",
        source: DongThoiGian,
        singer: "Nguyễn Thị E",
        category: "nhac-phim",
        time: "3:30p",
        viewer: "100k",
        img: dongthoigianimg
    },
];

export default albums