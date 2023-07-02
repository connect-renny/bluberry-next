import { useState } from "react";
import Link from "next/link";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

export default function casestudyNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="case-nav-cover">
      <div className="case-nav-btn" onClick={toggleOpen}>
        <TfiLayoutGrid3Alt />
      </div>
      <ul className={`case-nav-list ${isOpen ? "open" : ""}`}>
        <li className="case-nav-item">
          <Link className="case-nav-link" href="Case-Studies">
            01
          </Link>
        </li>
        <li className="case-nav-item">
          <Link className="case-nav-link" href="Case-Studies-10x">
            02
          </Link>
        </li>
        <li className="case-nav-item">
          <Link className="case-nav-link" href="Case-Studies-Aydi">
            03
          </Link>
        </li>
        <li className="case-nav-item">
          <Link className="case-nav-link" href="Case-Studies-Irish">
            04
          </Link>
        </li>
        <li className="case-nav-item">
          <Link className="case-nav-link" href="Case-Studies-Maaza">
            05
          </Link>
        </li>
      </ul>
    </div>
  );
}
