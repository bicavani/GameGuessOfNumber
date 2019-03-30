
function guessOfNumber() {
    //nguoi choi nhap vao khoang muon doan
    let soChanDuoi = parseInt(prompt("Khoang so muon doan tu:", ''));
    let soChanTren = parseInt(prompt("den:", ''));
    //lay ra so ngau nhien trong khoang doan
    let randomNumber = Math.floor(Math.random()*(soChanTren - soChanDuoi + 1)) + soChanDuoi;
    //nguoi dung nhap so doan
    let soDoan = parseInt(prompt("Nhap so ban doan: ", ''));
    //Hien thi ket qua game
    let count = 0;
    while (soDoan !== randomNumber && count<3) {
        if (soDoan > randomNumber)
            alert('So ban doan lon hon ket qua');
        else
            alert('So ban doan nho hon ket qua');
        count++;
        soDoan = parseInt(prompt("Nhap so ban doan lai lan" + count + ":", ''));
    }
    if (soDoan === randomNumber)
        alert('Chuc mung ban doan dung!');
    else
        alert('Ban da het luot doan lai')
}


