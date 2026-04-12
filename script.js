// 1. DANH SÁCH MÃ VÀ TÊN FILE PDF (Để cùng thư mục với index.html)
const database = {
    "EH95MTY": "hd2.pdf", 
    "MTX12F": "MTX12F.pdf",
"KS6VC2L36": "KS6VC2L36.pdf",
"MN1DC9KQRJKDAW": "MN1DC9KQRJKDAW.pdf",
"MFJDLKCJDRIEYEOCJDHDKDFK": "MFJDLKCJDRIEYEOCJDHDKDFK.pdf",
"MCJKKF7DHFNVI34793UD73JE8": "MCJKKF7DHFNVI34793UD73JE8.pdf",
"8CBD72FCC119427CA6729BCE7685855E": "8CBD72FCC119427CA6729BCE7685855E.pdf",
"KFFFJFJNVJ3KF83FJE839FJ38KD": "KFFFJFJNVJ3KF83FJE839FJ38KD.pdf",
"SJDH4D8EDJ3923JD93JER893JD93Q2F": "SJDH4D8EDJ3923JD93JER893JD93Q2F.pdf",
"XEHE0339F84F984IF984JF930294": "XEHE0339F84F984IF984JF930294.pdf",
    "KCIE9D738EHC7EUE7V2JVJ378FJ78V": "KCIE9D738EHC7EUE7V2JVJ378FJ78V.pdf",
    "K3UCGE3JV74MNCKC93KCHF67KVHD7": "K3UCGE3JV74MNCKC93KCHF67KVHD7.pdf",
    "ICH2NC4HS5JCF5JKDJ9JCK2KFI5K": "ICH2NC4HS5JCF5JKDJ9JCK2KFI5K.pdf",
    "UHMCJ3HCKF9NVDK2K839CHDJD": "UHMCJ3HCKF9NVDK2K839CHDJD.pdf",
    "UV7EIFJ37DJE7E9CHW6DHF7EHC6EH6D": "UV7EIFJ37DJE7E9CHW6DHF7EHC6EH6D.pdf",
    "K3UCGE3JV74MNCKC93KCHF67KMBC4": "K3UCGE3JV74MNCKC93KCHF67KMBC4.pdf",
    "99477F8C18144C4FBE2B3523EC57DK": "99477F8C18144C4FBE2B3523EC57DK.pdf",
    "KCIE9D738EHC7EUE7V2JVJ378FG4NM": "KCIE9D738EHC7EUE7V2JVJ378FG4NM.pdf",
    "BV3SC84JF943JD734HJF734HDG9": "BV3SC84JF943JD734HJF734HDG9.pdf",
    "99477F8C18144C4FBE2B3523ECBV1M": "99477F8C18144C4FBE2B3523ECBV1M.pdf",
    "LN28JR73HCCHE637WJC8D723NCF73JD": "LN28JR73HCCHE637WJC8D723NCF73JD.pdf",
    "MCJDT7CYEH56JJHDMFHSLXC26HD9S": "MCJDT7CYEH56JJHDMFHSLXC26HD9S.pdf",
    "GTUJNGR347CVGDEYCV4SDFGE345YT": "GTUJNGR347CVGDEYCV4SDFGE345YT.pdf",
    "BKSOUFJFMJGBG74I9R7JD83JC73F738F": "BKSOUFJFMJGBG74I9R7JD83JC73F738F.pdf",
    "MCJKKF7DHFNVI34793UD46VN2": "MCJKKF7DHFNVI34793UD46VN2.pdf",
    "GMJDEV3DFGMLKA35TDFG45Y6EDS": "GMJDEV3DFGMLKA35TDFG45Y6EDS.pdf",
    "GDJDH4F3H56I5RDFH45YETU6I56UTY4": "GDJDH4F3H56I5RDFH45YETU6I56UTY4.pdf",
    "B5WQS86B7": "B5WQS86B7.pdf",
    "NEYHRTY346DF4ETDFGDCVGEYED5FH": "NEYHRTY346DF4ETDFGDCVGEYED5FH.pdf"
};

function refreshCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captchaValue").innerText = result;
}

function handleSearch() {
    const code = document.getElementById("maTraCuu").value.trim().toUpperCase();
    const captcha = document.getElementById("captchaInput").value.trim().toUpperCase();
    const currentCaptcha = document.getElementById("captchaValue").innerText;

    if (!code || !captcha) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (captcha !== currentCaptcha) {
        alert("Mã xác thực không đúng!");
        refreshCaptcha();
        return;
    }

    if (database[code]) {
        showPDF(database[code]);
    } else {
        alert("Mã tra cứu không tồn tại!");
    }
}

function showPDF(pdfUrl) {
    const content = document.getElementById("invoiceContent");
    
    // Thẻ <object> kèm theo tham số #toolbar=0 giúp hiện file ngay và ẩn thanh công cụ nếu muốn
    content.innerHTML = `
        <object data="${pdfUrl}#view=FitH" type="application/pdf" width="100%" height="100%">
            <iframe src="${pdfUrl}#view=FitH" width="100%" height="100%" style="border: none;">
                <p>Trình duyệt của bạn không hỗ trợ xem PDF. <a href="${pdfUrl}">Nhấn vào đây để tải về.</a></p>
            </iframe>
        </object>`;
    
    document.getElementById("invoiceModal").style.display = "block";
}

function closeModal() {
    document.getElementById("invoiceModal").style.display = "none";
    document.getElementById("invoiceContent").innerHTML = ""; 
}

window.onclick = function(event) {
    if (event.target == document.getElementById("invoiceModal")) {
        closeModal();
    }
}

window.onload = refreshCaptcha;
