

/**
 * DOM
 */
var liKhuVucA = document.getElementById('liKhuVucA');
var liKhuVucB = document.getElementById('liKhuVucB');
var liKhuVucC = document.getElementById('liKhuVucC');
var liKhuVucK = document.getElementById('liKhuVucK');

var rdKhuVucA = document.getElementById('rdKhuVucA');
var rdKhuVucB = document.getElementById('rdKhuVucB');
var rdKhuVucC = document.getElementById('rdKhuVucC');
var rdKhuVucK = document.getElementById('rdKhuVucK');

var rdDoiTuong1 = document.getElementById('rdDoiTuong1');
var rdDoiTuong2 = document.getElementById('rdDoiTuong2');
var rdDoiTuong3 = document.getElementById('rdDoiTuong3');
var rdDoiTuongK = document.getElementById('rdDoiTuongK');

/**
 * Hàm tính khu vực ưu tiên
 */
var timKhuVucUuTien = function () {
    var khuVuc = 0;
    if (rdKhuVucA.checked) {
        khuVuc = 2;
    } else if (rdKhuVucB.checked) {
        khuVuc = 1;
    } else if (rdKhuVucC.checked) {
        khuVuc = 0.5;
    } else if (rdKhuVucK.checked) {
        khuVuc = 0;
    }
    return khuVuc;
}

/**
 * 
 * Hàm tính đối tượng ưu tiên
 */
var timDoiTuongUuTien = function () {
    var doiTuong = 0;
    if (rdDoiTuong1.checked) {
        doiTuong = 2.5;
    } else if (rdDoiTuong2.checked) {
        doiTuong = 1.5;
    } else if (rdDoiTuong3.checked) {
        doiTuong = 1;
    } else if (rdDoiTuongK.checked) {
        doiTuong = 0;
    }
    return doiTuong;
}

/**
 * Hàm tính điểm tổng 3 môn thi
 */
var tinhTongDiemBaMon = function (diemToan, diemVan, diemAnh) {
    tongDiem = parseFloat(diemToan) + parseFloat(diemVan) + parseFloat(diemAnh);
    return tongDiem;
}



// /**
//  * Băt sự kiện chọn khu vực ưu tiên
//  */
liKhuVucA.onclick = function () {
    rdKhuVucA.checked = true;
}
liKhuVucB.onclick = function () {
    rdKhuVucB.checked = true;
}
liKhuVucC.onclick = function () {
    rdKhuVucC.checked = true;
}
liKhuVucK.onclick = function () {
    rdKhuVucK.checked = true;
}
/**
 * Xử lí sự kiện
 */
document.getElementById('btnKiemTra').addEventListener('click', function () {
    //rdKhuVucA.checked||rdKhuVucB.checked||rdKhuVucC.checked||rdKhuVucK.checked
    var kv = parseFloat(timKhuVucUuTien());
    console.log(kv);

    //rdDoiTuong1.checked||rdDoiTuong2.checked||rdDoiTuong3.checked||rdDoiTuongK.checked
    var dt = parseFloat(timDoiTuongUuTien());
    console.log(dt);

    var diemTong3Mon = tinhTongDiemBaMon(4, 5, 6);
    console.log(diemTong3Mon);

    /**
     * Hàm tính điểm tổng kết
     */
    var diemToan = document.getElementById('ipDiemToan').value;
    var diemVan = document.getElementById('ipDiemVan').value;
    var diemAnh = document.getElementById('ipDiemAnh').value;

    var tinhDiemTongKet = function () {
        diemTongKet = tinhTongDiemBaMon(diemToan, diemVan, diemAnh) + timKhuVucUuTien() + timDoiTuongUuTien();
        return diemTongKet;
    }
    var diemTK = tinhDiemTongKet();
    console.log('diem tong ket la: ' + diemTK);

    /**
     * Hàm so sánh với điểm chuẩn
     */
    var ipDiemChuan = document.getElementById('ipDiemChuan').value;
    var ketQua = document.getElementById('ketQua');

    var kiemTraDauHayRot = function (diemChuan) {
        var ketQuaDiemChuan = '';
        if (diemTongKet >= diemChuan && !(diemToan == 0 || diemAnh == 0 || diemVan == 0)) {
            ketQuaDiemChuan = 'Đậu';
        } else {
            ketQuaDiemChuan = 'Rớt';
        }
        return ketQuaDiemChuan;
    }
    var hienThiThongTin = kiemTraDauHayRot(ipDiemChuan);
    ketQua.style.display = 'block';
    ketQua.style.color = 'red';
    ketQua.innerHTML = 'Bạn đã ' + hienThiThongTin;

});

