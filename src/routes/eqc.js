import Courses from "../components/Courses";
import Header from "../components/Header";
import '../styles/courses.css'

export default function eqc() {
    return (
        <div>
            <Header />
            <h1 className="title">Центр Образовательных Квалификаций</h1>
            <Courses />
        </div>
    );
  }