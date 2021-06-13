
/**
 * Hàm tính tiền điện
 */
var tinhTienDien = function (soKw) {
    var thanhTien = 0;
    if (soKw > 0 && soKw <= 50) {
        thanhTien = soKw * 500;
    } else if (soKw > 50 && soKw <= 100) {
        thanhTien = (50 * 500) + ((soKw - 50) * 650);
    } else if (soKw > 100 && soKw <= 200) {
        thanhTien = (50 * 500) + (50 * 650) + ((soKw - 100) * 850);
    } else if (soKw > 200 && soKw <= 350) {
        thanhTien = (50 * 500) + (50 * 650) + (100 * 850) + ((soKw - 200) * 1100);
    } else if (soKw > 350) {
        thanhTien = (50 * 100) + (50 * 650) + (100 * 850) + (150 * 1100) + ((soKw - 350) * 1300);
    }
    return thanhTien;
}

/**
 * Xử lí sự kiện
 */
document.getElementById('btnKiemTra').addEventListener('click', function () {
    //DOM
    var soKw = document.getElementById('ipSoKw').value;
    var hienThiThongTin = document.getElementById('hienThiThongTin');
    var ten = document.getElementById('ipTen').value;

    //Gọi hàm
    var thanhToan = tinhTienDien(soKw).toLocaleString();

    
    //Hiển thị thông tin
    if (soKw == '') {
        alert('Vui lòng nhập vào số kW');
    }else if(soKw<0){
        alert('Số kW không được nhỏ hơn 0')
    } else {
        hienThiThongTin.style.display = 'block';
        hienThiThongTin.style.color = 'red';
        hienThiThongTin.innerHTML = 'Chào ' + ten + '. Tổng tiền điện của bạn là: ' + thanhToan + ' VND';
    }
});