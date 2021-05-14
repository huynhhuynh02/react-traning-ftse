import BuongDoiTayNhauRa from './data/assets/music/Buông Đôi Tay Nhau Ra - Sơn Tùng M-TP.mp3';
import ChanhLongToiThuongCo from './data/assets/music/ChanhLongThuongCo-HuyVacNonHanTa.mp3';
import DeMiNoiChoMaNghe from './data/assets/music/DeMiNoiChoMaNghe-HoangThuyLinh-6153588.mp3';
import HoaHaiDuong from './data/assets/music/HoaHaiDuongNoRap-JackG5R.mp3';


import dongthoigianimg from './data/img/dongthoigian.jpg'
import thangmayemnhoanhimg from './data/img/thangmayemnhoanh.jpg'




const playlist = [
    {
        playlistCoverUrl: thangmayemnhoanhimg,
        playlistName: 'playlist name',
        bandName: 'band name',
        songs: [
            {
                position: 0,
                songName: 'Buông Tay Nhau Ra',
                songUrl: BuongDoiTayNhauRa
            },
            {
                position: 1,
                songName: 'ChanhLongToiThuongCo',
                songUrl: ChanhLongToiThuongCo
            },
            {
                position: 2,
                songName: 'Để Mị Nói Cho Mà Nghe',
                songUrl: DeMiNoiChoMaNghe
            },
            {
                position: 3,
                songName: 'Hoa Hải Đường',
                songUrl: HoaHaiDuong
            }
        ],
        type: 'album'
    },
    {
        playlistCoverUrl: dongthoigianimg,
        playlistName: 'playlist name',
        bandName: 'aaa',
        songs: [
            {
                position: 0,
                songName: 'Buông Tay Nhau Ra',
                songUrl: BuongDoiTayNhauRa
            },
            {
                position: 1,
                songName: 'ChanhLongToiThuongCo',
                songUrl: ChanhLongToiThuongCo
            },
            {
                position: 2,
                songName: 'Để Mị Nói Cho Mà Nghe',
                songUrl: DeMiNoiChoMaNghe
            },
            {
                position: 3,
                songName: 'Hoa Hải Đường',
                songUrl: HoaHaiDuong
            }
        ],
        type: 'album'
    },

]
export default playlist;
