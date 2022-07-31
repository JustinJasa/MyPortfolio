import useState from 'react'
import Navbar from "./Navbar/navbar";
import Socials from "./SocialIcons/socials";



export default function Layout({ children }) {
  

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Socials />
    </>
  );
}
