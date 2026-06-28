import Container from "../Container";
import Logo from './Logo';
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";

export default function Navbar() {
  return (
  <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md relative">
  <Container>
    <div className="flex h-20 items-center justify-between">

      <div className="flex items-center gap-16">
        <Logo />
        <NavLinks />
      </div>

      <NavActions />

    </div>
  </Container>
</header>
  );
}