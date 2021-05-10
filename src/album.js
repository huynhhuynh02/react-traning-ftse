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



import cauhencautheimg from './data/img/cauhencauthe.jpg'
import cauhonimg from './data/img/cauhon.jpg'
import chuyencuamuadongimg from './data/img/chuyencuamuadong.jpg'
import dongthoigianimg from './data/img/dongthoigian.jpg'
import goneimg from './data/img/gone.jpg'
import thangmayemnhoanhimg from './data/img/thangmayemnhoanh.jpg'




const playlist = [
    {
        imgSong: thangmayemnhoanhimg,
        playlistName: 'playlist name',
        bandName: 'band name',
        songs: [
            {   
                position: '1',
                songName: 'foo',
                songUrl: NgayMaiNangLenAnhSeVe,
                img: goneimg
            },
            {
                position: '2',
                songName: 'bar',
                songUrl: 'path/to/songUrl'
            },
            {
                position: '3',
                songName: 'baz',
                songUrl: 'path/to/songUrl'
            }
        ],
        type: 'album'
    },
    {
        imgSong: cauhencautheimg,
        playlistName: 'playlist name',
        bandName: 'band name',
        songs: [
            {
                position: '1',
                songName: 'foo',
                songUrl: ThangMayEmNhoAnh,
                img: goneimg
            },
            {
                position: '2',
                songName: 'bar',
                songUrl: 'path/to/songUrl'
            },
            {
                position: '3',
                songName: 'baz',
                songUrl: 'path/to/songUrl'
            }
        ],
        type: 'album'
    }

]
export default playlist;
