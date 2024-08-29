
import style from './Header.module.css';
import { Outlet, useNavigate } from 'react-router-dom';

function Header() {

  //useNavigate훅 - history객체를 대신합니다.
  let nav = useNavigate();
  let goBack = () => {
    nav(-1); //주소 or 숫자
  }
  let goHome = () => {
    nav('/'); //홈화면
  }
  return (
    <>
      <header className={style.wrap}>
        <h3>헤더 입니다.</h3>
        <ul>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
        </ul>
        <div>
          <button onClick={goHome}>홈으로가기</button>
          <button onClick={goBack}>뒤로가기</button>
        </div>
        
      </header>    
      <section>
        <Outlet/>
      </section>
    </>
  )
}
export default Header;
