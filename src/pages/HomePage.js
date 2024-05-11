import CategoryCartComponent from "../components/CategoryCartComponent";
import Productslider from "../components/Productslider";
import { Row,Container } from "react-bootstrap";

const HomePage = () => {
    const category = [
        "Tablets",
        "Monitors",
        "Games",
        "Printers",
        "Software",
        "Camera",
        "Books",
        "Videos"
    ];
    return <>
    <Productslider/>
    <Container>
    <Row xs={1} md={2}  className="g-4 mt-5">
    {
        category.map((category,idx) => <CategoryCartComponent key={idx} category={category} idx={idx}/>
       )
    }
    </Row>
    </Container>
    </>
}

export default HomePage;