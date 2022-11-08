import '../App.css';

function Thumoi() {
  return (
    <>
      <div className='header'>
        THƯ MỜI <br></br>
        DỰ TIỆC
      </div>
      <div id='invation' className='description' >
        <p>Kính mời các anh/chị: {localStorage.getItem("nameF10")} </p>
        Đến dự ngày truyền thống F11
      </div>
      <div className='horizontal description'></div>
      <div id='invation1'  className='description description1'><p className='aa'>THỨ BẢY, 12 THÁNG 11 NĂM 2022</p><br></br>
        Địa chỉ: [sẽ được update trong thời gian tới]
      </div>
      <div className='horizontal'></div>
      <div id='invation2'  className='description description1'>
      <p className='aa'>Sự hiện diện của các anh chị thế hệ F10<br className='abc'></br> là niềm vinh dự của chúng em</p>  <br></br>
        Dresscode: [sẽ được update trong thời gian tới]
      </div>

    <div className='thank'>THANH YOU SO MUCH</div>
    </>
  );
}

export default Thumoi;