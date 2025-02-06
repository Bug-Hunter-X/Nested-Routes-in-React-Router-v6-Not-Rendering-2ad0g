import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactLayout/>} >
          <Route path="email" element={<Email />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function ContactLayout(){
  let location = useLocation();
  return (
    <>
      <h1>Contact</h1>
      {location.pathname === '/contact/email' && <Email/>}
    </>
  );
}

function Email() { return <h1>Email</h1>; }