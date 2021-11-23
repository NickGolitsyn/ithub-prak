import ContactComp from "../components/ContactComp";
import Header from "../components/Header";

export default function Contact() {
    return (
        <div>
            <Header />
            <h1 className="title">Контакты</h1>
            <ContactComp />
        </div>
    );
  }