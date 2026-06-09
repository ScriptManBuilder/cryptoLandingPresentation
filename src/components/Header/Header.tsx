import {
  NavBar,
  NavLogo,
  NavLinks,
  NavCTA,
} from '../../assets/styles/components/Header.styles';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  return (
    <NavBar>
      <NavLogo>
        <span className="dot" />
        <span className="name">
          Momentum<span>Scalper</span>
        </span>
      </NavLogo>

      <NavLinks>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#trading-logic">Strategy</a></li>
        <li><a href="#risk">Risk</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
      </NavLinks>

      <NavCTA onClick={scrollToContact}>Get Started</NavCTA>
    </NavBar>
  );
}
