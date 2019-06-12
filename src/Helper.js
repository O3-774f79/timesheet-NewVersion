export function DurationOfmployment (d) {
    if (d % 12 === 0) {
      let y = d / 12;
      return `${y} ปี`;
    } else {
      let m = d % 12;
      let y = parseInt (d / 12);
      return `${y} ปี ${m} เดือน`;
    }
  }
  
  export function CurrentDate () {
    const d = new Date ();
    const date = parseInt (d.getDate ());
    const year = parseInt (d.getFullYear ()) + 543;
    var month = '';
    switch (d.getMonth () + 1) {
      case 1:
        month = 'มกราคม';
        break;
      case 2:
        month = 'กุมภาพันธ์';
        break;
      case 3:
        month = 'มีนาคม';
        break;
      case 4:
        month = 'เมษายน';
        break;
      case 5:
        month = 'พฤษภาคม';
        break;
      case 6:
        month = 'มิถุนายน';
        break;
      case 7:
        month = 'กรกฎาคม';
        break;
      case 8:
        month = 'สิงหาคม';
        break;
      case 9:
        month = 'กันยายน';
        break;
      case 10:
        month = 'ตุลาคม';
        break;
      case 11:
        month = 'พฤษจิกายน';
        break;
      case 12:
        month = 'ธันวาคม';
        break;
    }
    return `${date} ${month} ${year}`;
  }
  export function FomatDate (d) {
    const d_year = parseInt (d.substring (0, 4)) + 543;
    var d_month = '';
    const d_day = parseInt (d.substring (8, 11));
    switch (parseInt (d.substring (5, 8))) {
      case 1:
        d_month = 'มกราคม';
        break;
      case 2:
        d_month = 'กุมภาพันธ์';
        break;
      case 3:
        d_month = 'มีนาคม';
        break;
      case 4:
        d_month = 'เมษายน';
        break;
      case 5:
        d_month = 'พฤษภาคม';
        break;
      case 6:
        d_month = 'มิถุนายน';
        break;
      case 7:
        d_month = 'กรกฎาคม';
        break;
      case 8:
        d_month = 'สิงหาคม';
        break;
      case 9:
        d_month = 'กันยายน';
        break;
      case 10:
        d_month = 'ตุลาคม';
        break;
      case 11:
        d_month = 'พฤษจิกายน';
        break;
      case 12:
        d_month = 'ธันวาคม';
        break;
    }
    return {day: `${d_day}`, month: `${d_month}`, year: `${d_year}`};
  }
  
  