import Container from './Container'


export default function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <Container>
        <div>
          <div>
            <h1>logo</h1>
          </div>

          {/* links */}
          <div>
            <ul>
              <li>
                <a href="">فروشگاه</a>
              </li>
              <li>
                <a href="">درباره terra</a>
              </li>
              <li>
                <a href="">تماس با ما</a>
              </li>
            </ul>
          </div>

          {/* search-open as an overlay */}
          <div>
            <h1>search</h1>
          </div>

          {/* login-cart */}
          <div>
            <div>
              <a href="">ورود|ثبت نام</a>
            </div>
            <div>
              <h1>cart</h1>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}